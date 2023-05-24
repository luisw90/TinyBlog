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
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);

  /*
  useEffect(() => {
    const fecthAllPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);

      let noDuplicatesTagArray: string[] = [];
      posts.map((array: Post) => {
        array.tags.map((tag) => {
          if (!noDuplicatesTagArray.includes(tag)) {
            noDuplicatesTagArray.push(tag);
          }
        });
      });
      setBlogTags(noDuplicatesTagArray);
    };
    fecthAllPosts();
  }, []);
*/

  useEffect(() => {
    setPosts(dummyData);

    let noDuplicatesTagArray: string[] = [];
    dummyData.map((array) => {
      array.tags.map((tag) => {
        if (!noDuplicatesTagArray.includes(tag)) {
          noDuplicatesTagArray.push(tag);
        }
      });
    });
    setBlogTags(noDuplicatesTagArray);
  }, []);

  const changeBlogs = (newblogtags: string[]) => {
    const currentBlogs = dummyData.filter((post) => {
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

  return (
    <main className="blog__container">
      <BlogSections blogTags={blogTags} changeBlogs={changeBlogs} />
      <PostSection posts={currentPosts} changeBlogs={changeBlogs} />
    </main>
  );
}
