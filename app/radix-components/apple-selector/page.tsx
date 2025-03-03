"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

const options = [
  { value: "1tb", label: "1 TB SSD Storage", price: 0 },
  { value: "2tb", label: "2 TB SSD Storage", price: 400 },
  { value: "4tb", label: "4 TB SSD Storage", price: 1000 },
  { value: "8tb", label: "8 TB SSD Storage", price: 2200 },
];

export default function AppleSelector() {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  return (
    <div className="flex h-dvh items-center justify-center">
      <form
        className="flex flex-col w-full max-w-xs"
        onSubmit={(e) => {
          e.preventDefault();
          alert(selectedValue);
        }}
      >
        <p className="font-medium"> Storage </p>
        <RadioGroup.Root
          defaultValue={options[0].value}
          name="storage"
          className="mt-8 space-y-4"
          onValueChange={(v) => setSelectedValue(v)}
          aria-required={true}
        >
          {options.map((option) => (
            <RadioGroup.Item
              key={option.value}
              aria-label={option.label}
              value={option.value}
              className={`focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 flex justify-between w-full rounded-lg border p-4 ${
                option.value === selectedValue
                  ? "border-sky-500 ring-1 ring-inset ring-sky-500"
                  : "border-gray-500"
              }`}
            >
              <span className="font-medium text-black"> {option.label}</span>
              {selectedValue &&
                selectedOption &&
                option.value !== selectedValue && (
                  <span>{option.price - selectedOption.price} </span>
                )}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
        <div className="mt-5 text-right">
          <button
            type="submit"
            className="rounded bg-sky-500 px-3 py-4 text-sm font-semibold text-white w-full"
          >
            Buy
          </button>
        </div>
      </form>
    </div>
  );
}
