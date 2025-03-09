"use client";
import { motion } from "motion/react";
import { SVGProps } from "react";

interface CheckProps extends SVGProps<SVGSVGElement> {
  weight?: "bold" | "regular";
}

interface StepProps {
  stepNumber: number;
  status: "active" | "complete" | "inactive";
}

export default function Step({ stepNumber, status }: StepProps) {
  return (
    <div className="relative">
      <motion.div
        initial={false}
        variants={{
          inactive: {},
          active: {},
          complete: {
            scale: 1.25,
            backgroundColor: "var(--blue-600)",
            opacity: 0,
            filter: "blur(10px)",
          },
        }}
        transition={{ delay: 0.1, duration: 0.3 }}
        animate={status}
        className="absolute inset-0 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "var(--white)",
            borderColor: "var(--slate-200)",
            color: "var(--slate-400)",
          },
          active: {
            backgroundColor: "var(--white)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
          complete: {
            backgroundColor: "var(--blue-500)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
        }}
        animate={status}
        className="relative flex items-center justify-center w-10 h-10 font-semibold border-2 rounded-full"
      >
        {status === "complete" ? (
          <Check weight="bold" className="h-5 w-5 text-white" />
        ) : (
          <span> {stepNumber} </span>
        )}
      </motion.div>
    </div>
  );
}

function Check({ weight, ...props }: CheckProps) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={weight === "bold" ? 3 : 2}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
