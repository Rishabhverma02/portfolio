"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalStyle } from "./globalstyle";
import { Typography } from "./typography";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Typography />
      {children}
    </ThemeProvider>
  );
}
