"use client";

import { SKILLS } from "../constants";
import { RevealOnScroll } from "./animations/reveal-on-scroll";

export default function Skills() {
  return (
    <RevealOnScroll>
      <div className="my-12 flex flex-col items-center justify-center">
        {/* Título da seção */}
        <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
          Skills
        </h2>

        {/* Contêiner principal com overflow hidden e mask */}
        <div className="my-12 relative w-full max-w-5xl px-6 overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          {/* Primeira lista */}
          <ul className="flex items-center whitespace-nowrap animate-infinite-scroll space-x-24 will-change-transform pl-12 pr-12">
            {[...SKILLS, ...SKILLS].map((skill, index) => (
              <li key={index} className="flex flex-col items-center">
                {/* Contêiner fixo para o ícone */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain w-full h-full filter invert brightness-0 transition duration-300 hover:brightness-75 hover:opacity-50"
                  />
                </div>

                <span className="text-white mt-2 text-sm font-medium">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Segunda lista */}
          <ul
            className="flex items-center whitespace-nowrap animate-infinite-scroll space-x-24 will-change-transform pl-12 pr-12"
            aria-hidden="true"
          >
            {[...SKILLS, ...SKILLS].map((skill, index) => (
              <li key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt=""
                    className="object-contain filter invert brightness-0 hover:filter-none transition duration-300 w-full h-full"
                  />
                </div>
                <span className="text-white mt-2 text-sm font-medium">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealOnScroll>
  );
}
