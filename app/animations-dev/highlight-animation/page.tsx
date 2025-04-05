"use client";
import { useState } from "react";
import { motion } from "motion/react";

const TABS = ["Saved Sites", "Collections", "48 following", "32 Followers"];

export default function HighlightAnimation() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [direction, setDirection] = useState<"vertical" | "horizontal">(
    "horizontal"
  );

  return (
    <div className="flex items-center relative w-[600px] h-64 mx-auto">
      <ul
        className={`mx-auto flex w-fit gap-2 ${direction === "horizontal" ? "flex-row justify-center" : "flex-col items-start"}`}
      >
        {TABS.map((tab) => (
          <li
            className={`relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors ${activeTab === tab ? "text-gray-800" : "text-gray-700"}`}
            key={tab}
            onMouseLeave={() => setActiveTab(tab)}
            onMouseOver={() => setActiveTab(tab)}
          >
            {activeTab === tab ? (
              <div className="absolute inset-0 rounded-lg bg-black/5" />
            ) : null}
            <span className="relative text-inherit">{tab}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setDirection(direction === "vertical" ? "horizontal" : "vertical")
        }
        className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg text-black opacity-50 hover:bg-black/10 hover:opacity-100 transition-all"
      >
        <motion.svg
          initial={false}
          animate={{ rotate: direction === "vertical" ? 0 : 90 }}
          className="size-3"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0.482178L18.5178 7.9999L11 15.5177L9.2322 13.7499L13.7322 9.2499H0V6.7499H13.7322L9.2322 2.24995L11 0.482178Z"
            fill="currentColor"
          />
        </motion.svg>
      </button>
    </div>
  );
}
