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
          <Logo>&lt; R.v &gt;</Logo>
          <NavigationBar />
          <SocialIconWrapper>
            <FaGithub  className="social-icon"  />
            <IoLogoInstagram  className="social-icon" />
            <IoLogoLinkedin  className="social-icon" />
          </SocialIconWrapper>
          <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
            <HiMenuAlt3 />
          </HamburgerButton>
        </HeaderContainer>
      </HeaderWrapper>

      {isOpen && (
        <DrawerOverlay onClick={closeDrawer}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeDrawer} aria-label="Close Menu">
              <HiX/>
            </CloseButton>
            <DrawerContent>This is sidebar</DrawerContent>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};
