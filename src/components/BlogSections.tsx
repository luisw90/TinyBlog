import React, { FC, useState } from "react";

type BlogSectionsProps = {
  allTags: string[];
  currentTags: string[];
  handleCheckbox: (e: any) => void;
};

export const BlogSections: FC<BlogSectionsProps> = ({
  allTags,
  currentTags,
  handleCheckbox,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        <div className="blogDropdown__title">{currentTags.join(" / ")}</div>
        <img className="blogDropdown__icon" src="dropDown.png" alt="" />
      </button>

      {open ? (
        <ul className="blogDropdown__itemcontainer">
          {allTags &&
            allTags.map((tag) => {
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
