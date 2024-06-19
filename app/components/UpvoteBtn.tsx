"use client";

import React, { useState } from "react";

const UpvoteBtn = () => {
  const [voteCount, setVoteCount] = useState(0);

  const handleCount = () => {
    console.log(voteCount);
    setVoteCount((prevVoteCount) => voteCount + 1);
  };

  return (
    <button onClick={handleCount} className="bg-blue-500 text-white p-2 mt-10">
      Vote {voteCount}
    </button>
  );
};

export default UpvoteBtn;
