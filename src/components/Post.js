import { Avatar } from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";
import React from "react";
import { db } from "../firebase";
import "./Post.scss";

function Post(props) {
  const deletePost = () => {
    let id = props.keyValue;
    db.collection("posts").doc(id).delete();
  };
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={props.profileURL} />
        <div className="post-stat">
          <h4>{props.title}</h4>
          <h5>@test</h5>
        </div>
        <DeleteRounded className="post-delete" onClick={deletePost} />
      </div>
      <p>{props.message}</p>
    </div>
  );
}

export default Post;
