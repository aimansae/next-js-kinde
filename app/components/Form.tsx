import React from 'react'
import { createPostData } from '../actions/actions'

const Form = () => {
  return (
    <form
    className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    action={createPostData}
  >
    <input
      className="border rounded px-3 h-10"
      type="text"
      name="title"
      placeholder="Title for new post"
      required
    />
    <textarea
      name="body"
      placeholder="Insert content for new post"
      className="border rounder px-3 pt-2"
      rows={6}
      required
    />
    <button className="h-full rounded px-5 test-white bg-blue-500">
      Submit
    </button>
  </form>
  )
}

export default Form
