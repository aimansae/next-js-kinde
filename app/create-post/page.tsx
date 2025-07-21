import React from "react";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Form from "../components/Form";

const createPost = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_ulr=create-post");
  }

  return (
    <main className="mx-auto max-w-4xl flex flex-col items-center text-center px-6 py-4 md:py-12 gap-6">
      <h1 className="capitalize text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
        Create your post
      </h1>
      <Form />
    </main>
  );
};

export default createPost;
