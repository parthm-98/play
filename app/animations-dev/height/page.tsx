"use client";

import { motion } from "motion/react";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();
  return (
    <div className="grid h-screen w-screen grid-rows-[40%_60%] bg-[#0d0d0d]">
      <div className="flex items-center justify-center">
        <button
          className="bg-white py-2 px-4 rounded-lg text-sm font-medium text-[#0d0d0d]"
          onClick={() => setShowExtraContent((b) => !b)}
        >
          Toggle Height
        </button>
      </div>
      <div className="flex justify-center items-center overflow-hidden">
        <motion.div
          className="flex flex-col bg-white rounded-2xl w-80 gap-2 max-h-full overflow-y-auto"
          animate={{ height: bounds.height }}
        >
          <div ref={ref} className=" p-4">
            <h1 className="font-semibold">
              Fake Family Drawer {bounds.height}
            </h1>
            <p>
              This is a fake family drawer. Animating height is tricky, but
              satisfying when it works.
            </p>
            {showExtraContent ? (
              <p>
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller... Maybe even scrollable.
              </p>
            ) : null}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
