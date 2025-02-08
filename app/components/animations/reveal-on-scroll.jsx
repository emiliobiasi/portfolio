"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../utils/utils";

export const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  let timeoutId = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          element.classList.remove("exit-up");
        } else {
          // Evita flickering aplicando um pequeno atraso antes de remover a classe
          timeoutId.current = setTimeout(() => {
            if (!entry.isIntersecting) {
              element.classList.remove("visible");
              element.classList.add("exit-up");
            }
          }, 200); // Atraso de 200ms para evitar flickering
        }
      },
      {
        threshold: 0.2, // Evita que o efeito dispare repetidamente quando o elemento está parcialmente visível
        rootMargin: "-50px 0px", // Ajuste fino para garantir uma transição mais suave
      }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
};
