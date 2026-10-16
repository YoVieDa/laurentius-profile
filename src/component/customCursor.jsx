"use client";

import { useEffect, useState } from "react";

export default function CustomCursor({darkMode}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`
          pointer-events-none fixed z-[9999] h-[10px] w-[10px] rounded-full border 
          ${darkMode ? " border-[#141414] bg-[#c2c2c2] " : " border-[#ffa09e] bg-[#eb1313] "}
        `}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}