import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-neutral-400 c-space border-t border-neutral-800 mt-20">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <p className="font-semibold text-white">Sanyog Sharma</p>
        <span className="hidden sm:inline">|</span>
        <p className="text-xs text-neutral-400">Backend & Full-Stack Developer</p>
      </div>

      <div className="flex items-center gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            title={`${social.name} - ${social.detail || ''}`}
            className="flex items-center justify-center p-2 rounded-xl bg-midnight border border-white/10 hover:border-lavender/60 hover:bg-royal/20 transition-all hover:-translate-y-1"
          >
            <img
              src={social.icon}
              className="w-5 h-5 object-contain"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Sanyog Sharma. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
