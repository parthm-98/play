"use client";

import { motion } from "framer-motion";
import { Ring } from "./ring";
import { RingV2 } from "./ringv2";

export default function DynamicIsland() {
  return (
    <div className="flex flex-col h-dvh justify-center items-center scale-150 space-y-10">
      <div className="relative flex w-full flex-col justify-between items-center">
        <motion.div
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black"
        >
          <motion.div>
            <Ring />
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex w-full flex-col justify-between items-center">
        <motion.div
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black"
        >
          <motion.div>
            <RingV2 />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Define animation variants and bounce variants with strict typing
