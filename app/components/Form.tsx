"use client";

import React, { useRef, useState } from "react";
import { createPostData } from "../actions/actions";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async (formaData: FormData) => {
    setError("");
    setLoading(true);
    try {
      await createPostData(formaData);
      formRef.current?.reset();
      setSuccess(true);
      // setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to create post", error);
      setError("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {success && (
        <div className="p-2 bg-green-100 border border-green-300 rounded mb-4">
          <p className="text-green-700 text-sm">
            Your post was created successfully!
          </p>
        </div>
      )}
      {error && (
        <div className="p-2 bg-red-100 border border-red-300 rounded mb-4">
          <span className="text-red-700 text-sm"> {error}</span>
        </div>
      )}

      <form
        ref={formRef}
        className="flex flex-col gap-3"
        action={handleCreatePost}
      >
        <input
          className="placeholder:text-white border rounded px-3 h-10 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500"
          type="text"
          name="title"
          placeholder="Title for new post..."
          required
        />
        <textarea
          name="body"
          placeholder="Insert content for new post"
          className="placeholder:text-white border rounded px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500"
          rows={6}
          required
        />
        <button
          type="submit"
          className="h-10 rounded py-2 text-black bg-blue-200 hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? <span className="animate-pulse">Sending...</span> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Form;
