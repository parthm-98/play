"use client";

import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Node = {
  name: string;
  nodes?: Node[];
};

let trunk: Node[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          {
            name: "Action",
            nodes: [
              {
                name: "2000s",
                nodes: [
                  { name: "Gladiator.mp4" },
                  { name: "American-Beauty.mp4" },
                ],
              },
              { name: "2010s", nodes: [] },
            ],
          },
          { name: "Comedy", nodes: [{ name: "2000s", nodes: [] }] },
        ],
      },
      {
        name: "Music",
        nodes: [
          { name: "Rock", nodes: [] },
          { name: "Classical", nodes: [] },
        ],
      },
      { name: "Pictures", nodes: [] },
      { name: "Documents", nodes: [] },
      { name: "passwords.txt" },
    ],
  },
];

export default function RecurssiveFolder() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {trunk.map((folder) => (
          <Folder nodeStructure={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ nodeStructure: { nodes, name } }: { nodeStructure: Node }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <li className="my-1.5" key={name}>
      <span className="flex items-center gap-1.5">
        {nodes && nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon
              className={`size-5 text-gray-400 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}
        {nodes ? (
          <div className="flex flex-row items-center">
            <FolderIcon
              className={`size-6 text-sky-500 ${nodes.length === 0 ? "ml-[27px]" : ""}`}
            />
          </div>
        ) : (
          <DocumentIcon className="ml-[27px] size-6 text-gray-500" />
        )}
        {name}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0.5, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="pl-6"
          >
            {nodes?.map((blah) => (
              <Folder nodeStructure={blah} key={blah.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
