"use client";
import * as Switch from "@radix-ui/react-switch";

const CustomSwitch = () => (
  <div className="flex h-dvh items-center justify-center">
    <Switch.Root className="data-[state=checked]:bg-sky-500 w-96 rounded-full bg-gray-100 p-5 transition shadow-inne shadow-black-500 active:bg-gray-300 hover:bg-gray-200 active:data-[state=checked]:bg-sky-600 focus-visible:ring-8 focus-visible:ring-sky-400 focus-visible:ring-offset-8 focus-visible:outline-none">
      <Switch.Thumb className="block data-[state=checked]:translate-x-[152px] w-48 h-48 rounded-full bg-white transition-all shadow-xl data-[state=checked]:bg-white active:data-[state=checked]:scale-95 active:data-[state=unchecked]:scale-95" />
    </Switch.Root>
  </div>
);

CustomSwitch.displayName = "CustomSwitch";

export default CustomSwitch;
