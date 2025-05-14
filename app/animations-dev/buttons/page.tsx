"use client";

import CopyButton from "./components/copy";
import HeartButton from "./components/like";
import SmoothButton from "./components/login";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[600px] mx-auto h-dvh">
      <CopyButton />
      <SmoothButton />
      <HeartButton />
    </div>
  );
}
