"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function TwoStepPopover() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-[14px]">
            <div className="flex items-center">
              <div className="flex flex-auto items-center space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.003 1.334a6.667 6.667 0 100 13.333 6.667 6.667 0 000-13.333zm2.387 5.317a.5.5 0 00-.774-.634l-2.65 3.24-.943-.943a.5.5 0 00-.707.707l1.333 1.333a.5.5 0 00.74-.037l3-3.666z"
                    fill="grey"
                  ></path>
                </svg>
                <button
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[600] text-stone-700"
                >
                  {" "}
                  Approve Changes
                </button>
              </div>
              <p className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[500] text-stone-400">
                {" "}
                Send Review
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-auto items-center space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.34375 5.83333C1.34375 3.71624 3.05999 2 5.17708 2H10.8437C12.9608 2 14.6771 3.71624 14.6771 5.83333V10.1667C14.6771 12.2837 12.9608 14 10.8437 14H1.84375C1.56761 14 1.34375 13.7761 1.34375 13.5V5.83333ZM5.84375 6C5.56761 6 5.34375 6.22386 5.34375 6.5C5.34375 6.77613 5.56761 7 5.84375 7H10.1771C10.4532 7 10.6771 6.77613 10.6771 6.5C10.6771 6.22386 10.4532 6 10.1771 6H5.84375ZM5.84375 9C5.56761 9 5.34375 9.22387 5.34375 9.5C5.34375 9.77613 5.56761 10 5.84375 10H8.17708C8.45322 10 8.67708 9.77613 8.67708 9.5C8.67708 9.22387 8.45322 9 8.17708 9H5.84375Z"
                    fill="grey"
                  ></path>
                </svg>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[600] text-stone-700"
                >
                  {" "}
                  Add Comment{" "}
                </button>
              </div>
              <p className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[500] text-stone-400">
                {" "}
                Reply Thread
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-[14px]">
            <div className="flex items-center">
              <div className="flex flex-auto items-center space-x-2">
                <h2 className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[600] text-stone-700">
                  Approve Changes
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[500] text-stone-400">
                {" "}
                Send Review
              </p>
            </div>
            <input className="w-full bg-zinc-100 h-72 rounded-md"></input>
            <div className="flex space-x-3">
              <button
                className="flex flex-auto justify-center items-center bg-white rounded-md p-1 font-[family-name:var(--font-inter)] antialiased text-[13px] font-[500] text-stone-800 border border-stone-200 shadow-sm shadow-stone-200"
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                Back
              </button>
              <button
                className="flex flex-auto justify-center items-center bg-stone-800 rounded-md p-1 font-[family-name:var(--font-inter)] antialiased text-[13px] font-[500] text-stone-100 border border-stone-200 shadow-sm shadow-stone-200"
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-[14px]">
            <div className="flex items-center">
              <div className="flex flex-auto items-center space-x-2">
                <h2 className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[600] text-stone-700">
                  Add Comment
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] antialiased text-[12px] font-[500] text-stone-400">
                {" "}
                Create Thread
              </p>
            </div>
            <input className="w-full bg-zinc-100 h-24 rounded-md"></input>
            <div className="flex space-x-3">
              <button
                className="flex flex-auto justify-center items-center bg-white rounded-md p-1 font-[family-name:var(--font-inter)] antialiased text-[13px] font-[500] text-stone-800 border border-stone-200 shadow-sm shadow-stone-200"
                onClick={() => {
                  setCurrentStep((prev) => prev - 2);
                }}
              >
                Back
              </button>
              <button
                className="flex flex-auto justify-center items-center bg-stone-800 rounded-md p-1 font-[family-name:var(--font-inter)] antialiased text-[13px] font-[500] text-stone-100 border border-stone-200 shadow-sm shadow-stone-200"
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        );
    }
  }, [currentStep]);

  return (
    <div className="flex justify-center items-center h-dvh mx-96">
      <div className="flex w-full justify-center items-center h-1/2 bg-zinc-50 border border-stone-200 rounded-lg">
        <div className="relative flex justify-center">
          {isVisible ? (
            <motion.div
              animate={{ height: bounds.height }}
              className="absolute bottom-12 overflow-hidden rounded-xl shadow-lg border bg-white border-stone-200"
            >
              <div className="flex flex-col w-72 p-[14px]" ref={ref}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={currentStep}
                    initial={{ x: "110%", opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ x: "-110%", opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", bounce: 0 }}
                  >
                    {content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <div />
          )}
          <button
            onClick={() => {
              setIsVisible((p) => !p);
              setCurrentStep(0);
            }}
            className="block w-10 h-10 bg-white border border-stone-200 rounded-lg p-1 shadow-sm"
          >
            <div className="flex justify-center items-center w-full h-full bg-stone-100 rounded-[6px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.791 4.592a2.5 2.5 0 012.171-1.26h8.066a2.5 2.5 0 012.17 1.26L18.832 9.2c.216.378.33.805.33 1.24v3.724a2.5 2.5 0 01-2.5 2.5H3.328a2.5 2.5 0 01-2.5-2.5v-3.724a2.5 2.5 0 01.33-1.24l2.633-4.61zm13.704 6.24h-3.75a.833.833 0 00-.667.333l-.25.334a2.5 2.5 0 01-2 1H9.161a2.5 2.5 0 01-2-1l-.25-.334a.833.833 0 00-.666-.333h-3.75v3.333c0 .46.373.834.833.834h13.334c.46 0 .833-.373.833-.834v-3.333z"
                  fill="grey"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
