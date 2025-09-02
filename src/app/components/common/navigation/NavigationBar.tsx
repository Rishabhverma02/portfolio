import React from "react";
import { NavLinkContainer, NavLinks } from "./styled";

export const NavigationBar = () => {
  return (
    <NavLinkContainer>
      <NavLinks href="#hero">Home</NavLinks>
      <NavLinks href="#about">About Me</NavLinks>
      <NavLinks href="#skills">Tech Stack</NavLinks>
      <NavLinks href="#project">Work</NavLinks>
      <NavLinks href="#contact">Contact</NavLinks>
    </NavLinkContainer>
  );
};
