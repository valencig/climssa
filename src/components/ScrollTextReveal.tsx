"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollTextRevealProps = {
  text: string;
};

export function ScrollTextReveal({ text }: ScrollTextRevealProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".reveal-word",
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: container.current,
            start: "top 78%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <p
      className="max-w-5xl text-3xl font-black leading-tight text-blue-950 md:text-5xl"
      ref={container}
    >
      {words.map((word, index) => (
        <span className="reveal-word inline-block pr-2" key={`${word}-${index}`}>
          {word}
        </span>
      ))}
    </p>
  );
}