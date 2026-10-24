import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-heading">Featured Projects</h2>
        <p className="font-normal text-neutral-400 max-w-2xl">
          Highlights of full-stack ecosystems, automated web-scraping pipelines, and hackathon-winning architectures.
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-xl shadow-2xl border border-white/20 pointer-events-none w-80 hidden md:block"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="Project Preview"
        />
      )}
    </section>
  );
};

export default Projects;
