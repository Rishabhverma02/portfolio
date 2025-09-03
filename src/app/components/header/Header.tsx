"use client";

import { useEffect, useState } from "react";
import {
  HeaderWrapper,
  HamburgerButton,
  DrawerOverlay,
  Drawer,
  CloseButton,
  DrawerContent,
  HeaderContainer,
  SocialIconWrapper,
  Logo,
} from "./styled";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { usePathname } from "next/navigation";
import { NavigationBar } from "../common";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  return (
    <>
      <HeaderWrapper animate={animate}>
        <HeaderContainer>
          <Logo>Rishi..</Logo>
          <NavigationBar />
          <SocialIconWrapper>
            <FaGithub size={18} className="social-icon" />
            <IoLogoInstagram size={18} className="social-icon" />
            <IoLogoLinkedin size={18} className="social-icon" />
          </SocialIconWrapper>
          <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
            <HiMenuAlt3 className="menu-icon" />
          </HamburgerButton>
        </HeaderContainer>
      </HeaderWrapper>

      {isOpen && (
        <DrawerOverlay onClick={closeDrawer}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeDrawer} aria-label="Close Menu">
              <HiX className="close-icon" />
            </CloseButton>
            <DrawerContent>This is sidebar</DrawerContent>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};
