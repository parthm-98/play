import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


// Custom Tailwind plugin to add colors as CSS variables
const addVariablesForColors = plugin(({ addBase, theme }) => {
  const colors = flattenColors(theme("colors")); // Flatten Tailwind colors

  const colorVariables = Object.entries(colors).reduce(
    (vars, [key, value]) => {
      vars[`--${key}`] = value as string;
      return vars;
    },
    {} as Record<string, string>
  );

  // Inject variables into :root
  addBase({
    ":root": colorVariables,
  });
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Supports old Next.js app directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Supports new Next.js app directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors], // ✅ Adds global CSS variables
};

const flattenColors = (colors: Record<string, any>): Record<string, string> => {
  let output: Record<string, string> = {};

  Object.keys(colors).forEach((key) => {
    if (typeof colors[key] === "string") {
      output[key] = colors[key]; // Direct color values
    } else {
      Object.entries(colors[key]).forEach(([shade, value]) => {
        output[`${key}-${shade}`] = value as string;
      });
    }
  });

  return output;
};


export default config;


