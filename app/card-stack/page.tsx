"use client";
import "./styles.css";

const Length = 4;

export default function StackedCards() {
  return (
    <div className="grid items-center justify-center h-dvh">
      {new Array(Length).fill(0).map((_, i) => (
        <div
          className="card"
          key={i}
          style={{ "--index": Length - 1 - i } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
