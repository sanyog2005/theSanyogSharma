import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Intro & Bio */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/images/sanimg5.jpg"
            alt="Sanyog Sharma"
            className="bg-black absolute pb-720 scale-[0.05] -right-[1rem] -top-[1rem] md:scale-[1] md:left-0 md:inset-y-0 lg:scale-[1.25] object-cover opacity-60"
          />
          <div className="relative z-10 p-2 rounded-xl bg-midnight/60 backdrop-blur-xs">
            <p className="font-semibold text-white headtext">Hi, I'm Sanyog Sharma</p>
            <p className="text-xs leading-relaxed md:text-sm text-neutral-200">
              High-impact Backend & Full-Stack Developer with expertise in Node.js (Express) and Python (FastAPI).
              Proven track record in building scalable distributed systems, integrating AI/ML models, and managing complex database architectures (SQL & NoSQL). National-level hackathon finalist with hands-on experience in Docker containerization and cloud integrations.
            </p>
          </div>
          <div className="absolute inset-x-0 -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo pointer-events-none" />
        </div>

        {/* Grid 2 - Code is Craft & Core Skills */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
          >
            <p className="flex items-end font-mono font-bold tracking-widest text-5xl text-gray-700/50 select-none">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "18%", left: "15%" }}
              text="FastAPI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "55%", left: "42%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "25%", left: "68%" }}
              text="Docker"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "45%", left: "5%" }}
              text="PostgreSQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "52%" }}
              text="PyTorch"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "68%", left: "72%" }}
              image="/assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "72%", left: "22%" }}
              image="/assets/logos/docker.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "8%", left: "8%" }}
              image="/assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 - Timezone & Location */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[55%]">
            <p className="font-semibold headtext">Location & Availability</p>
            <p className="subtext text-neutral-300">
              Based in Rohini, Delhi, India (IST / UTC+5:30). Open to remote distributed engineering roles and worldwide team collaborations.
            </p>
          </div>
          <figure className="absolute left-[35%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center font-semibold headtext">
              Looking to collaborate on high-impact projects?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Tech Stack Orbit */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[45%]">
            <p className="font-semibold headtext">Tech Stack</p>
            <p className="subtext text-neutral-300">
              Expertise spanning distributed backend APIs, containerization, AI model integration, and modern reactive frontends to build resilient and scalable software.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[45%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
