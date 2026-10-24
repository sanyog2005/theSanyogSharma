import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  adminHref,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-md bg-black/60"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl w-full border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden my-8"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-midnight/80 hover:bg-neutral-800 border border-white/10 text-white"
          aria-label="Close modal"
        >
          <img src="/assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        <div className="relative w-full h-64 md:h-72 overflow-hidden bg-primary">
          <img src={image} alt={title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-6 md:p-8">
          <h5 className="mb-2 text-2xl md:text-3xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-base font-medium text-neutral-300">{description}</p>
          
          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-neutral-400">
                <span className="text-lavender mt-1 font-bold">▹</span>
                <span>{subDesc}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="size-4 object-contain"
                  />
                  <span className="text-xs text-neutral-300 font-medium">{tag.name}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-royal to-lavender hover:opacity-90 shadow-md shadow-royal/30"
                >
                  <span>Visit Project</span>
                  <img src="/assets/arrow-up.svg" className="size-3.5" alt="external link" />
                </a>
              )}
              {adminHref && (
                <a
                  href={adminHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-lavender transition-all rounded-lg bg-lavender/10 border border-lavender/40 hover:bg-lavender/20"
                >
                  <span>Admin Panel</span>
                  <img src="/assets/arrow-up.svg" className="size-3.5" alt="admin link" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
