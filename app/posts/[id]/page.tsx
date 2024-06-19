
import UpvoteBtn from "@/app/components/UpvoteBtn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 text-center pt-24">
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <p className="max-w-[700]">{post.body}</p>
      <UpvoteBtn />
    </main>
  );
};

export default page;
