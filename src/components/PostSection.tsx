import React, { FC } from "react";
import { Post } from "@/Types";
import { PostCard } from "./PostCard";

type PostSectionsProps = {
  posts: Post[];
  changeBlogHandle: (title: string[]) => void;
};

export const PostSection: FC<PostSectionsProps> = ({
  posts,
  changeBlogHandle,
}) => {
  return (
    <div className="postsSection__container">
      {posts &&
        posts.map((post: Post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              changeBlogHandle={changeBlogHandle}
            />
          );
        })}
    </div>
  );
};
