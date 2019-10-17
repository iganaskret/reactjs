import React from "react";
import AddPostForm from "./AddPostForm.js";
import Post from "./Post.js";

export default function Feed(props) {
  return (
    <div className="feed">
      <h1>This is the feed</h1>
      <AddPostForm />
      {props.posts.map(item => {
        return <Post author={item.author} subject={item.subject} />;
      })}
    </div>
  );
}
