import ConfirmDeleteButton from "@/app/components/ConfirmDeleteButton";
import UpvoteBtn from "@/app/components/UpvoteBtn";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import React from "react";

const PostDetail = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="bg-white text-left  text-gray-900    max-w-6xl px-6 py-16 space-y-10 ">
      <div className="flex justify-between items-center">
        <h1 className=" capitalize text-2xl border-black border-b-2 md:text-3xl font-extrabold leading-tight tracking-tight">
          {post.title}
        </h1>
        <UpvoteBtn authorId={post.authorId} currentUserId={user?.id || ""} />
      </div>{" "}
      <p className=" md:text-xl leading-relaxed">{post.body}</p>
      <ConfirmDeleteButton
        postId={post.id}
        title={post.title}
        body={post.body}
      />
    </main>
  );
};

export default PostDetail;
