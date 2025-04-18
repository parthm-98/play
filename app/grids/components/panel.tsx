import React from "react";
import clsx from "clsx";
import useMeasure from "react-use-measure";

type PanelProps = {
  title: string;
  bgColor?: string;
  textColor?: string;
  height?: string; // no default
  className?: string;
  children?: React.ReactNode;
};

export function Panel({
  title,
  bgColor = "bg-gray-100",
  textColor = "text-black",
  height,
  className,
  children,
}: PanelProps) {
  const [ref, bounds] = useMeasure();

  return (
    <section
      className={clsx(
        "flex items-center justify-center text-center rounded p-4",
        bgColor,
        textColor,
        height,
        className
      )}
      ref={ref}
    >
      {children ?? (
        <div className="text-center font-semibold">
          <h2>{title}</h2>
          <div className="font-serif font-extralight">({bounds.width})</div>
        </div>
      )}
    </section>
  );
}
