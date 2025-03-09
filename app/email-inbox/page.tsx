"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";

type Message = [string, string];

const MessageComponent: React.FC = () => {
  const titles: Message[] = [
    ["Apple's newest iPhone is here", "Watch our July event"],
    [
      "Nintendo's Newsletter for July",
      "Introducing Strike, a 5-on-5 soccer game",
    ],
    ["Your funds have been processed", "See your latest deposit online"],
    ["This Week in Sports", "The finals are heating up"],
    ["Changelog update", "Edge subroutines and more"],
    ["React Hawaii is here!", "Time for fun in the sun"],
  ];

  const [messages, setMessages] = useState<Message[]>(titles);
  const [addIndex, setAddIndex] = useState<number>(0);

  const handleRemove = (indexToRemove: number) => {
    setMessages((prevMessages) =>
      prevMessages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAdd = () => {
    setMessages((prevMessages) => [...prevMessages, titles[addIndex]]);
    setAddIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Image
        src="/moss.webp"
        alt="HD Landscape Background"
        fill // Fills the parent container
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <div className="w-full max-w-md z-10 pt-24">
        {/* Header: The button remains fixed at the top */}
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-full text-white bg-black/70 border border-zinc-900"
          >
            Add Emails
          </button>
        </div>
        <div className="mt-4 h-dvh">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ opacity: { duration: 0.1 } }}
                exit={{ opacity: 0, scale: 0 }}
                key={index}
                className="fancy-card flex flex-row p-2 cursor-pointer hover:bg-white/5 text-white mb-4 justify-between items-center"
              >
                <div className="flex flex-col select-none">
                  <span className="block">{msg[0]}</span>
                  <span className="block">{msg[1]}</span>
                </div>
                <div
                  onClick={() => handleRemove(index)}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <X />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
