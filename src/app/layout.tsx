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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/proxima-nova-condensed"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AppShell>{children}</AppShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
