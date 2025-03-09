"use client";
import { useState } from "react";
import Step from "./step";

const steps = [1, 2, 3, 4];

export default function MultiStepCard() {
  const [step, setStep] = useState<number>(1);

  // Function to determine the step status
  const getStepStatus = (
    current: number,
    index: number
  ): "active" | "complete" | "inactive" => {
    if (current === index) return "active";
    if (current > index) return "complete";
    return "inactive";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg p-6">
        {/* Steps */}
        <div className="flex justify-between w-full mb-6">
          {steps.map((index) => (
            <Step
              key={index}
              stepNumber={index}
              status={getStepStatus(step, index)}
            />
          ))}
        </div>

        {/* Step Content */}
        <div className="pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100"></div>
            <div className="mt-2 h-4 w-5/6 rounded bg-slate-100"></div>
            <div className="mt-2 h-4 rounded bg-slate-100"></div>
            <div className="mt-2 h-4 w-4/6 rounded bg-slate-100"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() =>
              setStep((prev) => (prev > steps[0] ? prev - 1 : prev))
            }
            disabled={step === steps[0]}
            className={`rounded-full w-32 p-2 border ${
              step === steps[0]
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Back
          </button>
          <button
            onClick={() =>
              setStep((prev) => (prev > steps.length ? prev : prev + 1))
            }
            disabled={step === steps.length + 1}
            className={`rounded-full w-32 p-2 ${
              step === steps.length + 1
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
