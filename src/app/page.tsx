"use client";

import Image from "next/image";
import { getPosts } from "@/utils/apiCalls";
import { useEffect, useState } from "react";
import { Post } from "@/Types";
import { BlogSections } from "@/components/BlogSections";
import { dummyData } from "@/DummyData";
import { PostSection } from "@/components/PostSection";

export default function Home() {
  const [allTags, setAllTags] = useState<string[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);
  const [currentTags, setCurrentTags] = useState<string[]>([]);

  useEffect(() => {
    const fecthAllPosts = async () => {
      const posts = await getPosts();
      let allTagsArray: string[] = [];
      dummyData.map((array) => {
        array.tags.map((tag) => {
          if (!allTagsArray.includes(tag)) {
            allTagsArray.push(tag);
          }
        });
      });
      setAllTags(allTagsArray);
      setAllPosts(posts);
      const randomTag =
        allTagsArray[Math.floor(Math.random() * allTagsArray.length)];
      changeTags([randomTag]);
    };
    fecthAllPosts();
  }, []);

  useEffect(() => {
    changeBlogs(currentTags);
  }, [currentTags]);

  const handleCheckbox = (e: any) => {
    const tag = e.target.value;
    if (e.target.checked) {
      setCurrentTags((oldBlogArray) => [...oldBlogArray, tag]);
    } else {
      const newTagArray = currentTags.filter(
        (cuurentTag) => cuurentTag !== tag
      );
      changeTags(newTagArray);
    }
  };

  const changeBlogs = (newblogtags: string[]) => {
    const currentBlogs = allPosts.filter((post) => {
      if (post.tags.some((currenttags) => newblogtags.includes(currenttags))) {
        const findMatchingTag = post.tags.filter((tag) =>
          newblogtags.includes(tag)
        );
        const addImageToNewPostObject = Object.assign(post, {
          image: `${findMatchingTag[0]}.jpg`,
        });
        return addImageToNewPostObject;
      }
    });
    setCurrentPosts(currentBlogs);
  };

  const changeTags = (tags: string[]) => {
    setCurrentTags(tags);
  };

  return (
    <main className="blog__container">
      <BlogSections
        allTags={allTags}
        currentTags={currentTags}
        handleCheckbox={handleCheckbox}
      />
      <PostSection posts={currentPosts} changeTags={changeTags} />
    </main>
  );
}
