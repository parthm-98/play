"use client";

import { Panel } from "./components/panel";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-12 gap-6 p-6 min-h-screen bg-white">
      <div className="hidden lg:block col-span-2">
        <Panel
          title="Left Panel"
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
      </div>

      <div className="col-span-12 lg:col-span-8">
        <Panel
          title="Center Panel"
          bgColor="bg-purple-100"
          textColor="text-purple-700"
        />
      </div>

      <div className="hidden lg:block col-span-2">
        <Panel
          title="Right Panel"
          bgColor="bg-green-100"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
}
