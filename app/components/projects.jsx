import Image from "next/image";
import { PROJECTS } from "../constants";
import { RevealOnScroll } from "./animations/reveal-on-scroll";

const Projects = () => {
  return (
    <section className="py-16">
      <RevealOnScroll>
        <h2 className="my-12 text-center text-3xl font-semibold uppercase tracking-wide text-white">
          Projects
        </h2>
      </RevealOnScroll>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {PROJECTS.map((project, index) => (
          <RevealOnScroll key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="rounded-3xl transition-transform duration-300 hover:scale-105"
              />
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;
