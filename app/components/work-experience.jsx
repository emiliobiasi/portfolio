import React from "react";
import { EXPERIENCES } from "../constants";
import Image from "next/image";
import { RevealOnScroll } from "./animations/reveal-on-scroll";

const WorkExperience = () => {
  return (
    <div>
      <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
        Experience
      </h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <RevealOnScroll key={index}>
            <div className="flex flex-wrap items-center p-4 lg:mb-24 lg:justify-center">
              <div className="mx-4">
                <Image
                  src={experience.img}
                  alt={experience.company}
                  width={80}
                  height={80}
                  className="mb-2 mr-2 rounded-full border border-slate-400"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <p className="mb-2 text-sm">{experience.year}</p>
                <h6 className="font-semibold">{experience.role}</h6>
                <span className="text-sm">{experience.company}</span>
                <p className="my-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-lg border border-slate-400 px-2 py-1 text-sm font-medium text-slate-300 bg-white/10 backdrop-blur-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
