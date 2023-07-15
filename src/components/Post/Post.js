import React from "react";
import "./Post.css";
import PostsList from "../Posts/PostsList"
import AddPostForm from "../Posts/AddPostForm";


const Post = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
              <AddPostForm />
            </div>
            <div className="col-md-6">
              <PostsList />
            </div>
        </div>
        </div>
    )
}

export default Post;
