import React, { useState } from "react";
import { db } from "../firebase";
import "./CreatePost.scss";

function CreatePost({ posts, setPosts }) {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // when the form is submitted it adds the post info into the database
    db.collection("posts").add({
      title: title,
      message: input,
    });

    setTitle("")
    setInput("");
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <h3>Post a Message</h3>
        <input
          type="text"
          placeholder="Title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message.."
          required
        />
        <button style={{ display: "none" }} type="submit"></button>
      </form>
    </div>
  );
}

export default CreatePost;
