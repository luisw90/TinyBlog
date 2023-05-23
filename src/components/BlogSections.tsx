import React, { FC } from "react";
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        Dropdown
      </button>
      {open
        ? blogTitles &&
          blogTitles.map((title) => {
            return (
              <button
                className="blogDropdown__itemcontainer"
                key={title}
                value={title}
                onClick={(e) => {
                  setOpen(false);
                  changeBlogHandle(e.currentTarget.value);
                }}
              >
                <div>{title}</div>
              </button>
            );
          })
        : null}
    </div>
  );
};
