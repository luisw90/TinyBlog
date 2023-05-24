import React, { FC, useEffect, useRef, useState } from "react";
import { PostSection } from "./PostSection";
import { Post } from "@/Types";

type BlogSectionsProps = {
  blogTags: string[];
  changeBlogs: (title: string[]) => void;
};

export const BlogSections: FC<BlogSectionsProps> = ({
  blogTags,
  changeBlogs,
}) => {
  const [open, setOpen] = useState(false);
  const [currentTags, setCurrentTags] = useState([""]);

  useEffect(() => {
    const randomTag = blogTags[Math.floor(Math.random() * blogTags.length)];
    setCurrentTags([randomTag]);
  }, [blogTags]);

  useEffect(() => {
    changeBlogs(currentTags);
  }, [currentTags]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCheckbox = (e: any) => {
    const tag = e.target.value;
    if (e.target.checked) {
      setCurrentTags((oldBlogArray) => [...oldBlogArray, tag]);
    } else {
      const newTagArray = currentTags.filter(
        (cuurentTag) => cuurentTag !== tag
      );
      setCurrentTags(newTagArray);
    }
  };

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        <div className="blogDropdown__title">{currentTags.join(" / ")}</div>
        <img className="blogDropdown__icon" src="dropDown.png" alt="" />
      </button>

      {open ? (
        <ul className="blogDropdown__itemcontainer">
          {blogTags &&
            blogTags.map((tag) => {
              let checkboxState = false;
              if (currentTags.includes(tag)) {
                checkboxState = true;
              }
              return (
                <button className="blogDropdown__item" key={tag} value={tag}>
                  {tag}
                  <input
                    type="checkbox"
                    value={tag}
                    defaultChecked={checkboxState}
                    onChange={handleCheckbox}
                  />
                </button>
              );
            })}
        </ul>
      ) : null}
    </div>
  );
};
