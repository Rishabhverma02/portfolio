// src/context/ThemeProvider.tsx
"use client";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import { useState } from "react";
import { GlobalStyle } from "./globalstyle";
import { Typography } from "./typography";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");

const toggleTheme = () => {
  const newMode = mode === "dark" ? "light" : "dark";
  console.log(`Switching theme from ${mode} to ${newMode}`);
  setMode(newMode);
};
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Typography />
      <button
        onClick={toggleTheme}
        style={{ position: "fixed", top: 10, right: 10 , zIndex: 110 }}
      >
        Toggle Theme
      </button>
      {children}
    </ThemeProvider>
  );
}




// "use client";

// import { ThemeProvider } from "styled-components";
// import { theme } from "../theme";
// import { GlobalStyle } from "./globalstyle";
// import { Typography } from "./typography";

// export function ThemeProviders({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Typography />
//       {children}
//     </ThemeProvider>
//   );
// }


