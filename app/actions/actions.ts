"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostData(formData: FormData) {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login/");
  }

  const user = await getUser();
  if (!user || !user.id) {
    throw new Error("User not found or missing ID.");
  }
  await prisma.user.upsert({
    where: { id: user.id },
    update: {}, // no update needed
    create: {
      id: user.id,
      email: user.email || "",
    },
  });
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log("logging data from ", title, body);

  // create post

  await prisma.post.create({
    data: {
      title,
      body,
      author: {
        connect: { id: user?.id },
      },
    },
  });
  revalidatePath("/posts");
}
export async function deletePost(id: number) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) redirect("/api/auth/login");

  const user = await getUser();
  if (!user || !user.id) throw new Error("Unauthorized");

  const post = await prisma.post.findUnique({ where: { id } });

  if (!post || post.authorId !== user.id) {
    throw new Error("You cannot delete this post");
  }
  await prisma.post.delete({ where: { id } });
  revalidatePath("/posts");
}
export async function editPost(id: number, formData: FormData) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) redirect("/api/auth/login");

  const user = await getUser();
  if (!user || !user.id) throw new Error("Unauthorized");

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post || post.authorId !== user.id) {
    throw new Error("You don't have permissions to edit this post");
  }
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await prisma.post.update({
    where: { id },
    data: {
      title,
      body,
    },
  });
  revalidatePath(`/posts/${id}`);
}
