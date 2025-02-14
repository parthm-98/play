"use client";

import { useState } from "react";
import "./styles.css";

export default function AppleMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-6">
      <button
        onClick={toggleMenu}
        className="flex flex-row items-center p-3 bg-zinc-900 text-white cursor-pointer rounded-md"
      >
        Toggle Menu
      </button>
      <div className="flex flex-col bg-zinc-950 w-60 h-auto rounded-xl space-y-2 overflow-clip">
        <div
          className={`flex flex-col menu-clipper bg-zinc-800 text-white ${isOpen ? "open" : ""}`}
        >
          <div className="flex flex-row items-center p-3 bg-zinc-800 text-white border-b-[1px] border-zinc-600 space-x-2">
            <svg
              className="inset-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>New space</p>
          </div>
          <div className="flex flex-row items-center p-3 bg-zinc-800 text-white border-b-[1px] border-zinc-600 space-x-2">
            <div className="w-4 h-4">
              {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
            <p>New space</p>
          </div>
          <div className="flex flex-row items-center p-3 bg-zinc-800 text-white border-b-[1px] border-zinc-600 space-x-2">
            <div className="w-4 h-4">
              {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
            <p>New space</p>
          </div>
          <div className="flex flex-row items-center p-3 bg-zinc-800 text-white border-b-[1px] border-zinc-600 space-x-2">
            <div className="w-4 h-4">
              {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
            <p>New space</p>
          </div>
          <div className="flex flex-row items-center p-3 bg-zinc-800 text-white border-b-[1px] border-zinc-600 space-x-2">
            <div className="w-4 h-4">
              {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </div>
            <p>New space</p>
          </div>
        </div>
        <div className="flex flex-row items-center p-3 bg-zinc-800 text-white space-x-2">
          <div className="w-4 h-4">
            {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
          </div>
          <p>New space</p>
        </div>
        <div className="flex flex-row items-center p-3 bg-zinc-800 text-white  space-x-2">
          <div className="w-4 h-4">
            {/* <svg
                className="inset-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
          </div>
          <p>New space</p>
        </div>
      </div>
    </div>
  );
}
