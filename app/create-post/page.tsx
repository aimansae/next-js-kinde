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
    <main className="text-center pt-16">
      <h1 className="text-4xl font-bold md:text-5xl">Create post</h1>
      <Form />
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
};

export default createPost;
