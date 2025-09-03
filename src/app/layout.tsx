import type { Metadata } from "next";
import { josefin } from "./style/globalstyle";
import AppShell from "./components/app-shell/AppShell";
import { StyledComponentsRegistry } from "./style/registry";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <AppShell>{children}</AppShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
