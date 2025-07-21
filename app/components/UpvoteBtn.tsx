"use client";

import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const UpvoteBtn = ({
  authorId,
  currentUserId,
}: {
  authorId: string;
  currentUserId: string;
}) => {
  const [voteCount, setVoteCount] = useState(0);
  const [voted, setVoted] = useState(false);
  const isAuthor = authorId === currentUserId;

  if (!currentUserId || isAuthor) return null;

  const handleCount = () => {
    if (!voted && !isAuthor) {
      setVoteCount((prev) => prev + 1);
      setVoted(true);
    }
  };
  return (
    <button
      onClick={handleCount}
      disabled={voted || isAuthor}
      className={`flex items-center gap-1 bg-blue-400 hover:bg-blue-600 ml-4 text-white p-2 rounded`}
      aria-label="Upvote this post"
    >
      <AiFillLike className="text-xl" />
      <span className="font-bold">{voted ? "Voted!" : ` (${voteCount})`}</span>
    </button>
  );
};

export default UpvoteBtn;
