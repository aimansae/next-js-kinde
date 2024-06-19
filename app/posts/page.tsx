import React, { Suspense } from "react";
import PostsList from "../components/PostsList";

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

const page = async () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold md:text-5xl">All posts</h1>
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
};

export default page;
