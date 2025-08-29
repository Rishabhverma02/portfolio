"use client";
import { Header } from "../header";
import { Footer } from "../footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
