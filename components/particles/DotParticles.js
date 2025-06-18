import { useEffect, useState } from "react";

const generateDots = (count = 1000) =>
  Array.from({ length: count }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    size: `${Math.random() * 4}px`,
  }));

export default function DotParticles() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(generateDots(10000));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {dots.map((dot, idx) => (
        <div
          key={idx}
          className="absolute bg-blue-300/60 opacity-0 animate-fadeDot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}