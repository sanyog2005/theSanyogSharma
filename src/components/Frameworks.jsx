import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    "python",
    "nodejs",
    "fastapi",
    "docker",
    "postgresql",
    "aws",
    "pytorch",
  ];
  const innerSkills = [
    "react",
    "javascript",
    "supabase",
    "mongodb",
    "tailwindcss",
    "git",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={38} radius={135} duration={35}>
        {outerSkills.map((skill, index) => (
          <Icon key={`outer-${index}`} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={85} reverse duration={25}>
        {innerSkills.map((skill, index) => (
          <Icon key={`inner-${index}`} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <div className="flex items-center justify-center p-1.5 transition-transform duration-200 border rounded-full shadow-lg bg-midnight/90 border-white/10 hover:scale-125">
    <img src={src} alt={alt} className="object-contain size-6" />
  </div>
);
