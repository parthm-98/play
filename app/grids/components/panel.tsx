import React from "react";
import clsx from "clsx";
import useMeasure from "react-use-measure";

type PanelProps = {
  title: string;
  bgColor?: string;
  textColor?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Panel({
  title,
  bgColor = "bg-gray-100",
  textColor = "text-black",
  height = "h-dvh",
  className,
  children,
}: PanelProps) {
  const [ref, bounds] = useMeasure();
  return (
    <div
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
        <span className="font-semibold">
          {title} {bounds.width}
        </span>
      )}
    </div>
  );
}
