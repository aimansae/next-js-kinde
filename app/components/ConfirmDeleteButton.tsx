"use client";

import React, { useState, useTransition } from "react";
import { deletePost, editPost } from "../actions/actions";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const ConfirmDeleteButton = ({
  postId,
  title,
  body,
}: {
  postId: number;
  title: string;
  body: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(() => {
      deletePost(postId);
    });
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.set("title", editTitle);
    formData.set("body", editBody);

    startTransition(() => {
      editPost(postId, formData).then(() => {
        setShowEditModal(false);
      });
    });
  };
  return (
    <div className="flex  flex-1 justify-between">
      <button
        onClick={() => setShowModal(true)}
        className=" flex items-center gap-1 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Delete <MdDelete />
      </button>
      <button
        onClick={() => setShowEditModal(true)}
        className=" flex items-center gap-1 bg-slate-900 hover:bg-slate-600 text-white px-4 py-2 rounded"
      >
        Edit <CiEdit />
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <p className="text-lg font-medium mb-4 text-gray-800">
              Are you sure you want to delete this post?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDelete}
                disabled={isPending}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                {isPending ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className=" fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-lg w-full space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Edit Post</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                value={editTitle}
                id="title"
                name="title"
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border border-black  px-3 py-2 rounded text-gray-900"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="body">Description</label>
              <textarea
                id="body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="w-full border border-black  px-3 py-2 rounded text-gray-900"
                placeholder="Body"
                rows={5}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleUpdate}
                disabled={isPending}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                {isPending ? "Updating..." : "Save Changes"}
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmDeleteButton;
