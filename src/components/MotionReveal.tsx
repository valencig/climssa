"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionReveal({ children, className = "" }: MotionRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        container.current,
        { opacity: 0.45, scale: 0.92, y: 32 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            end: "center 55%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div className={className} ref={container}>
      {children}
    </div>
  );
}