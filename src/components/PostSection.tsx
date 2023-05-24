import React, { FC } from "react";
import { Post } from "@/Types";
import { PostCard } from "./PostCard";
import { Masonry } from "@mui/lab";

type PostSectionsProps = {
  posts: Post[];
  changeBlogs: (tags: string[]) => void;
};

export const PostSection: FC<PostSectionsProps> = ({ posts, changeBlogs }) => {
  return (
    <div className="postsSection__container">
      <div className="postsSection__postscontainer">
        <Masonry columns={4}>
          {posts &&
            posts.map((post: Post) => {
              return (
                <PostCard key={post.id} post={post} changeBlogs={changeBlogs} />
              );
            })}
        </Masonry>
      </div>
    </div>
  );
};
