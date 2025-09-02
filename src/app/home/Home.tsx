"use client";
import React from "react";
import {
  AboutMe,
  ContactMe,
  HeroSection,
  Projects,
  Skills,
} from "./components";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
};
