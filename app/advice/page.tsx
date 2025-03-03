"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Advice() {
  const [currentAdvice, setCurrentAdvice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchNewAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("API request failed");

      const json = await res.json();
      return json.slip.advice;
    } catch (error) {
      console.error(error);
      return "Failed to fetch advice. Please try again.";
    }
  }

  useEffect(() => {
    async function preloadAdvice() {
      const firstAdvice = await fetchNewAdvice();
      setCurrentAdvice(firstAdvice);
      setIsLoading(false);
    }

    preloadAdvice();
  }, []);

  async function handleClick() {
    setIsLoading(true);
    const startTime = Date.now(); // Record when "Loading..." starts

    const newAdvice = await fetchNewAdvice(); // Fetch new advice in background

    const elapsedTime = Date.now() - startTime; // Time taken so far
    const minLoadingTime = 200; // Minimum loading duration

    // If API is fast, wait so "Loading..." appears for at least the minimum duration
    const remainingTime = minLoadingTime - elapsedTime;
    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    setCurrentAdvice(newAdvice);
    setIsLoading(false);
  }

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Background Image */}
      <Image
        src="/moss.webp" // Ensure the file is in the public folder and reference it as "/moss.webp"
        alt="HD Landscape Background"
        fill // This makes the image fill its parent container
        style={{ objectFit: "cover" }} // Ensures the image covers the container without distortion
        priority={true} // Optionally, prioritize loading this image
      />

      {/* Content Overlay */}
      <button
        onClick={handleClick}
        disabled={isLoading}
        style={{
          position: "relative",
          width: 500,
          inset: 30,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="text-3xl">
          {isLoading ? "Loading..." : currentAdvice}
        </div>
      </button>
    </div>
  );
}
