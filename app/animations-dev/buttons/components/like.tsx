"use client";

import { useAnimate, AnimationOptions } from "motion/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function HeartButton() {
  const [scope, animate] = useAnimate();

  const createBubble = (x: string, y: string) => {
    const ele = document.createElement("div");
    ele.className = "absolute rounded-full bg-pink-500 pointer-events-none";
    const size = Math.random() * 10 + 10; // 10 to 20px

    Object.assign(ele.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: x,
      top: y,
      transform: "translate(-50%, -50%)",
    });

    return ele;
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!scope.current) return;
    const wrapper = scope.current.querySelector(".bubble-wrapper");
    if (!wrapper) return;

    const bounding = e.currentTarget.getBoundingClientRect();
    const x = `${e.clientX - bounding.left}px`;
    const y = `${e.clientY - bounding.top}px`;

    const bubbles: HTMLElement[] = [];
    const num = Math.floor(Math.random() * 2) + 3;

    for (let i = 0; i < num; i++) {
      const b = createBubble(x, y);
      wrapper.appendChild(b);
      bubbles.push(b);
    }

    const t: AnimationOptions = { duration: 0.6, type: "spring", bounce: 0 };

    await Promise.all(
      bubbles.map((b) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 50 + 30;
        const xOffset = Math.cos(angle) * dist;
        const yOffset = Math.sin(angle) * dist;

        return animate(b, { x: xOffset, y: yOffset, scale: 0 }, t);
      })
    );

    bubbles.forEach((b) => b.remove());
  };

  return (
    <button
      ref={scope}
      onClick={handleClick}
      className="relative rounded-full bg-white p-3 shadow-md"
    >
      <div className="bubble-wrapper absolute inset-0 z-0" />
      <HeartIcon className="h-6 w-6 text-pink-500 z-10 relative" />
    </button>
  );
}
