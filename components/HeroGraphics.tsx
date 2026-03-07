"use client";

import { motion } from "framer-motion";

const float1 = {
  y: [0, -12, 0],
  x: [0, 6, 0],
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
};

const float2 = {
  y: [0, 15, 0],
  x: [0, -8, 0],
  transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const },
};

const float3 = {
  y: [0, -8, 0],
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
};

const float4 = {
  y: [0, 10, 0],
  x: [0, 5, 0],
  transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const },
};

const float5 = {
  scale: [1, 1.08, 1],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

export function HeroGraphics() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        isolation: "isolate",
      }}
      aria-hidden="true"
    >
      {/* Soft grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />
      {/* Large gradient orbs */}
      <motion.div
        animate={float1}
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.35), rgba(20, 184, 166, 0.15))",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={float2}
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-5%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.25), rgba(13, 148, 136, 0.08))",
          filter: "blur(35px)",
        }}
      />
      <motion.div
        animate={float3}
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, rgba(94, 234, 212, 0.2), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <motion.div
        animate={float4}
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 60%, rgba(45, 212, 191, 0.18), transparent 65%)",
          filter: "blur(45px)",
        }}
      />
      {/* Floating 3D-style box */}
      <motion.div
        animate={float5}
        style={{
          position: "absolute",
          bottom: "25%",
          right: "15%",
          width: "100px",
          height: "100px",
          perspective: "200px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "rotateX(15deg) rotateY(-25deg)",
            transformStyle: "preserve-3d",
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(13, 148, 136, 0.08) 100%)",
            boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        />
      </motion.div>
      {/* Small accent sphere */}
      <motion.div
        animate={float5}
        style={{
          position: "absolute",
          top: "60%",
          right: "25%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(94, 234, 212, 0.4))",
          boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.25), inset -5px -5px 15px rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
}
