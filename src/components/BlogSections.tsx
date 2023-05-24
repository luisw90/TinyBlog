import React, { FC, useEffect, useRef, useState } from "react";
import { PostSection } from "./PostSection";
import { Post } from "@/Types";

type BlogSectionsProps = {
  blogTitles: string[];
  changeBlogHandle: (title: string[]) => void;
};

export const BlogSections: FC<BlogSectionsProps> = ({
  blogTitles,
  changeBlogHandle,
}) => {
  const [open, setOpen] = useState(false);
  const [currentTags, setCurrentTags] = useState([""]);

  useEffect(() => {
    setCurrentTags([blogTitles[0]]);
  }, [blogTitles]);

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
    changeBlogHandle(currentTags);
  };

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        <div className="blogDropdown__title">{currentTags}</div>
        <img className="blogDropdown__icon" src="dropDown.png" alt="" />
      </button>

      {open ? (
        <ul className="blogDropdown__itemcontainer">
          {blogTitles &&
            blogTitles.map((title, index) => {
              let checkboxState = false;
              if (currentTags.includes(title)) {
                checkboxState = true;
              }
              return (
                <button
                  className="blogDropdown__item"
                  key={title}
                  value={title}
                >
                  {title}
                  <input
                    type="checkbox"
                    value={title}
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

/*
{open ? (
  <ul className="blogDropdown__itemcontainer">
    {blogTitles &&
      blogTitles.map((title) => {
        return (
          <li
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
          </li>
        );
      })}
  </ul>
) : null}


checkList.addEventListener("blur", function (e: any) {
  if (!e.relatedTarget || !e.relatedTarget.classList.contains("anchor")) {
    checkList.setAttribute("class", "dropdown-check-list");
  }
});
*/
