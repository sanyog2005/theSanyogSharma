import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ onLinkClick }) {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul items-center">
      {navItems.map((item) => (
        <li key={item.name} className="nav-li">
          <a
            className="nav-link font-medium hover:text-lavender transition-colors"
            href={item.href}
            onClick={onLinkClick}
          >
            {item.name}
          </a>
        </li>
      ))}
      <li className="nav-li max-sm:w-full">
        <a
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-royal to-lavender hover:opacity-90 transition-all max-sm:w-full"
          href="https://drive.google.com/file/d/1J_oCv7KYczldcxtRhLfFAMF05bCBswVn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Download CV</span>
          <img src="/assets/arrow-up.svg" className="size-3" alt="arrow" />
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/70 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-colors hover:text-lavender"
          >
            <span className="size-8 rounded-lg bg-gradient-to-br from-royal to-lavender flex items-center justify-center font-black text-white text-base shadow-md shadow-royal/30">
              S
            </span>
            <span>Sanyog Sharma</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden p-1.5 rounded-lg border border-white/10"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-5 h-5"
              alt="toggle menu"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={() => {}} />
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden border-b border-white/10 bg-midnight/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 px-6">
              <Navigation onLinkClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
