import React, { FC } from "react";
import { Post } from "@/Types";

type PostProps = {
  post: Post;
  changeTags: (tag: string[]) => void;
};
export const PostCard: FC<PostProps> = ({ post, changeTags }) => {
  return (
    <article className="postCard__container">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img className="postCard__image" src={post.image} alt={post.title} />
      <div className="postCard__infocontainer">
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
                  onClick={(e) => changeTags([e.currentTarget.value])}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="postCard__reactioncontainer">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className="postCard__reaction-image"
              src="like1.png"
              alt="number of reactions"
            />
            <div>{post.reactions}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
