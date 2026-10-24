import React from "react";
import { techStackCategories } from "../constants";

const TechStack = () => {
  return (
    <section className="relative c-space section-spacing" id="skills">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-heading">Skills & Technologies</h2>
        <p className="font-normal text-neutral-400 max-w-2xl">
          A comprehensive overview of my technical proficiencies, frameworks, database architectures, and engineering tools.
        </p>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 h-[1px] w-full" />

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-12 gap-5 mt-12">
        {techStackCategories.map((item, index) => (
          <div
            key={index}
            className={`${item.colSpan} flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/10 hover-animation hover:border-lavender/40 hover:shadow-2xl hover:shadow-royal/10 transition-all duration-200`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {item.category}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-lavender/20 text-lavender border border-lavender/30">
                  {item.badge}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {item.tagline}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {item.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-midnight/70 border border-white/10 text-neutral-200 text-sm font-medium hover:border-lavender/50 hover:bg-royal/20 hover:text-white transition-all cursor-default"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="size-4 object-contain"
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
