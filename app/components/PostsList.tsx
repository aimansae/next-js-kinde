import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
type Post = {
  id: number;
  title: string;
  body: string;
};

type ApiResponse = {
  posts: Post[];
};

type Props = {
  data: ApiResponse;
};

const PostsList = async () => {

  // const res = await fetch("https://dummyjson.com/posts?limit=10");
const posts = await prisma.post.findMany()
  
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="my-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
