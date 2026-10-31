"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function PacketSpine() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const dotY = useTransform(smoothProgress, [0, 1], ["12vh", "88vh"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-4 z-20 md:left-10 lg:left-16"
    >
      {/* Subtle minimal vertical track */}
      <div className="h-full w-[1px] bg-white/[0.07]" />

      {/* Active scroll progress line */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          className="absolute inset-x-0 top-0 h-full w-[1px] bg-lime/40"
        />
      )}

      {/* Glowing Acid Lime dot */}
      {!prefersReducedMotion ? (
        <motion.div
          style={{ y: dotY }}
          className="absolute -left-[6px] top-0"
        >
          <span className="block h-3.5 w-3.5 rounded-full border-2 border-midnight bg-lime shadow-lime-packet" />
        </motion.div>
      ) : (
        <div className="absolute -left-[5px] top-24 h-3 w-3 rounded-full bg-lime" />
      )}
    </div>
  );
}
