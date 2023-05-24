import React, { FC } from "react";
import { Post } from "@/Types";

type PostProps = {
  post: Post;
  changeBlogHandle: (title: string[]) => void;
};
export const PostCard: FC<PostProps> = ({ post, changeBlogHandle }) => {
  return (
    <div className="postCard__container">
      <h1 className="postCard__title">{post.title}</h1>
      <h3 className="postCard__body">{post.body}</h3>
      <div className="postCard__innercontainer">
        <div className="postCard__tagcontainer">
          {post.tags.map((tag: string) => {
            return (
              <button
                className="postCard__tag"
                key={tag}
                value={tag}
                onClick={(e) => changeBlogHandle([e.currentTarget.value])}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div className="postCard__reactioncontainer">
          <img className="postCard__reaction-image" src="like2.png" alt="" />
          <div>{post.reactions}</div>
        </div>
      </div>
    </div>
  );
};
