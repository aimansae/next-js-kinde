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
  const posts = await prisma.post.findMany();

  return (
    <div>
      {" "}
      {posts.length > 0 ? (
        <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-between h-full p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex-1">
                <h2 className="capitalize text-left font-bold text-gray-900 dark:text-white mb-4 block sm:hidden">
                  {post.title.length > 18
                    ? post.title.slice(0, 18) + "..."
                    : post.title}
                </h2>

                {/* Full title for medium and up */}
                <p className="capitalize text-left font-bold text-gray-900 dark:text-white mb-4 hidden sm:block">
                  {post.title}
                </p>

                <p className="text-sm capitalize text-left  text-gray-900 dark:text-white mb-2 block sm:hidden">
                  {post.body.length > 80
                    ? post.body.slice(0, 80) + "..."
                    : post.body}
                </p>

                {/* Full body for medium and up */}
                <h2 className="capitalize text-left   text-gray-900 dark:text-white mb-2 hidden sm:block">
                  {post.body}
                </h2>
              </div>
              <div className="text-right">
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center   px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-sm  flex flex-col items-center justify-center py-10 text-gray-600">
          <span className="text-lg font-semibold">No posts found!</span>
          <p className="text-sm text-gray-500 mt-1">
            Start by creating your first post above.
          </p>
        </div>
      )}
    </div>
  );
};

export default PostsList;
