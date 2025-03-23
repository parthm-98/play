"use client";

import { useState } from "react";
import "./styles.css";
import SplitText from "./SplitText";

export default function TextReveal() {
  const [reset, SetReset] = useState(0);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-dvh">
      <div key={reset} className="overflow-hidden">
        <h1 className="h1 text-6xl">
          <SplitText
            text="Hey This is any woth toher dflgdkf gd"
            className="char"
          />
        </h1>
      </div>
      <button className="button" onClick={() => SetReset(reset + 1)}>
        Replay Animation
      </button>
    </div>
  );
}
