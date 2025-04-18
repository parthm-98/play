"use client";

import { Panel } from "./components/panel";

export default function MainLayout() {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <header className="h-24">
        <Panel
          title="Nav + Global search"
          className="h-full rounded-none"
          bgColor="bg-blue-900"
          textColor="text-white"
        />
      </header>
      <main className="flex-1 overflow-hidden">
        <div className="lg:hidden flex flex-col flex-1 h-full overflow-hidden">
          <aside className="px-4 pt-4" aria-label="Left Panel">
            <Panel
              title="Left Panel"
              bgColor="bg-blue-100"
              textColor="text-blue-700"
            />
          </aside>

          <section className="h-full overflow-hidden p-4">
            <Panel
              title="Center Panel"
              bgColor="bg-purple-100"
              textColor="text-purple-700"
              className="h-full overflow-y-auto"
            />
          </section>

          <aside className="h-32" aria-label="Right Panel">
            <Panel
              title="Right Panel"
              bgColor="bg-green-100"
              textColor="text-green-700"
            />
          </aside>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-4 p-4 h-full bg-white">
          <aside className="col-span-2 h-full" aria-label="Left Panel">
            <Panel
              title="Left Panel"
              bgColor="bg-blue-100"
              textColor="text-blue-700"
              className="h-full"
            />
          </aside>

          <section className="col-span-7 h-full">
            <Panel
              title="Center Panel"
              bgColor="bg-purple-100"
              textColor="text-purple-700"
              className="h-full"
            />
          </section>

          <aside className="col-span-3 h-full" aria-label="Right Panel">
            <Panel
              title="Right Panel"
              bgColor="bg-green-100"
              textColor="text-green-700"
              className="h-full"
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
