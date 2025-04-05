"use client";

import { CheckCircleIcon, ClipboardIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const buttonCopy = {
  idle: <ClipboardIcon className="size-7 text-zinc-600" />,
  check: <CheckCircleIcon className="size-7 text-zinc-600" />,
};

export default function CopyButton() {
  const [buttonState, setButtonState] = useState<"idle" | "check">("idle");
  return (
    <button
      className="flex items-center justify-center w-16 h-16 bg-white border border-zinc-300 rounded-lg shadow-sm hover:shadow-md transition-colors"
      onClick={() => {
        setButtonState("check");

        setTimeout(() => {
          setButtonState("idle");
        }, 1000);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          key={buttonState}
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
