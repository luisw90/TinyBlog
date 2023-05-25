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

  if (window !== undefined) {
    window.addEventListener("click", function (e: any) {
      if (!document.getElementById("dropdown")?.contains(e.target)) {
        if (
          !document.getElementById("dropdown__container")?.contains(e.target)
        ) {
          setOpen(false);
        }
      }
    });
  }

  return (
    <div className="blogDropdown__container">
      <button className="blogDropdown__button" onClick={handleOpen}>
        <div id="dropdown" className="blogDropdown__title">
          {currentTags.join(" / ")}
        </div>
        <img className="blogDropdown__icon" src="dropDown.png" alt="" />
      </button>

      {open ? (
        <ul id="dropdown__container" className="blogDropdown__itemcontainer">
          {allTags &&
            allTags.map((tag) => {
              let checkboxState = false;
              if (currentTags.includes(tag)) {
                checkboxState = true;
              }
              return (
                <div className="blogDropdown__item" key={tag}>
                  {tag}
                  <input
                    type="checkbox"
                    value={tag}
                    defaultChecked={checkboxState}
                    onChange={handleCheckbox}
                  />
                </div>
              );
            })}
        </ul>
      ) : null}
    </div>
  );
};
