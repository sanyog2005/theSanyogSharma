import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  adminHref,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-4 sm:flex sm:space-y-0 cursor-pointer group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div>
          <p className="text-2xl font-bold group-hover:text-lavender transition-colors">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm font-medium">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsHidden(true);
          }}
          className="flex items-center gap-1 cursor-pointer hover-animation text-neutral-300 hover:text-white"
        >
          Read More
          <img src="/assets/arrow-right.svg" className="w-5" alt="arrow right" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          adminHref={adminHref}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
