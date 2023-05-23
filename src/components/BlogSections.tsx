import React, { FC, useEffect, useState } from "react";
import { PostSection } from "./PostSection";
import { Post } from "@/Types";

type BlogSectionsProps = {
  blogTitles: string[];
  changeBlogHandle: (title: string) => void;
};

export const BlogSections: FC<BlogSectionsProps> = ({
  blogTitles,
  changeBlogHandle,
}) => {
  const [open, setOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setCurrentBlog(blogTitles[0]);
  }, [blogTitles]);

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        <div className="blogDropdown__title">{currentBlog}</div>
        <img className="blogDropdown__icon" src="dropDown.png" alt="" />
      </button>
      <div className="blogDropdown__itemcontainer">
        {open
          ? blogTitles &&
            blogTitles.map((title) => {
              return (
                <button
                  className="blogDropdown__item"
                  key={title}
                  value={title}
                  onClick={(e) => {
                    setOpen(false);
                    setCurrentBlog(e.currentTarget.value);
                    changeBlogHandle(e.currentTarget.value);
                  }}
                >
                  {title}
                </button>
              );
            })
          : null}
      </div>
    </div>
  );
};
