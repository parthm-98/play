"use client";

import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

export default function AppStore() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setActiveGame(null)
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black/20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeGame && (
          <div className="absolute inset-0 grid place-items-center z-20">
            <motion.div
              ref={ref}
              layoutId={`card-${activeGame.title}`}
              className="flex flex-col w-[500px] gap-4 bg-white p-4 rounded-xl shadow-md overflow-hidden"
            >
              <div className="flex w-full items-center gap-4">
                <motion.img
                  layoutId={`image-${activeGame.title}`}
                  src={activeGame.image}
                  alt={activeGame.title}
                  height={56}
                  width={56}
                  className="rounded-lg"
                />
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className="text-sm font-medium"
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className="text-sm text-neutral-500"
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className="rounded-full bg-zinc-100 px-4 py-1 text-xs font-semibold text-blue-500"
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="text-sm text-neutral-500"
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex flex-col min-h-screen items-center justify-center py-12">
        <ul className="flex flex-col gap-4">
          {games.map((game) => (
            <motion.li
              key={game.title}
              layoutId={`card-${game.title}`}
              className="flex w-[386px] items-center gap-4 cursor-pointer hover:bg-neutral-50 p-2 rounded-lg overflow-hidden"
              onClick={() => setActiveGame(game)}
            >
              <motion.img
                layoutId={`image-${game.title}`}
                src={game.image}
                alt={game.title}
                height={56}
                width={56}
                className="rounded-lg"
              />
              <div className="flex flex-1 items-center justify-between border-b border-neutral-200 last:border-none">
                <div className="flex flex-col py-4 gap-1">
                  <motion.h2
                    layoutId={`title-${game.title}`}
                    className="text-sm font-medium"
                  >
                    {game.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`description-${game.title}`}
                    className="text-sm text-neutral-500"
                  >
                    {game.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${game.title}`}
                  className="rounded-full bg-zinc-100 px-4 py-1 text-xs font-semibold text-blue-500"
                >
                  Get
                </motion.button>
              </div>
            </motion.li>
          ))}
        </ul>
      </main>
    </div>
  );
}

type Game = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

const games: Game[] = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
