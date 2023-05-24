"use client";

import Image from "next/image";
import { getPosts } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import { Post } from "@/Types";
import { BlogSections } from "@/components/BlogSections";
import { dummyData } from "@/DummyData";
import { PostSection } from "@/components/PostSection";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [blogTitles, setBlogTitles] = useState<string[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);

  useEffect(() => {
    /*
    const fecthData = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fecthData();
    */
    setPosts(dummyData);
    console.log(dummyData);

    let tagArray: string[] = [];
    dummyData.map((array) => {
      array.tags.map((tag) => {
        if (!tagArray.includes(tag)) {
          tagArray.push(tag);
        }
      });
    });
    setBlogTitles(tagArray);
    changeBlogHandle([tagArray[0]]);
  }, []);

  const changeBlogHandle = (blogtitle: string[]) => {
    const currentP = dummyData.filter((post) => {
      if (post.tags.some((substring) => blogtitle.includes(substring))) {
        return post;
      }
    });
    setCurrentPosts(currentP);
  };

  return (
    <main className="blog__container">
      <BlogSections
        blogTitles={blogTitles}
        changeBlogHandle={changeBlogHandle}
      />
      <PostSection posts={currentPosts} changeBlogHandle={changeBlogHandle} />
    </main>
  );
}
