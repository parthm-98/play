import React from "react";

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = "" }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={className}
          style={{ display: "inlineblock", animationDelay: `${index * 0.1}s` }}
        >
          {char === "" ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
