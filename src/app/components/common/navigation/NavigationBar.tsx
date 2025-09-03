import React from "react";
import { NavLinkContainer, NavLinks } from "./styled";

export const NavigationBar = () => {
  return (
    <NavLinkContainer>
      <NavLinks href="#hero" className="text-14">Home</NavLinks>
      <NavLinks href="#about" className="text-14">About Me</NavLinks>
      <NavLinks href="#skills" className="text-14">Tech Stack</NavLinks>
      <NavLinks href="#project" className="text-14">Work</NavLinks>
      <NavLinks href="#contact" className="text-14">Contact</NavLinks>
    </NavLinkContainer>
  );
};
