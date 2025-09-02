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
import {  GithubIcon, Instagram, Linkedin } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo>Rishi..</Logo>
          <NavigationBar />
          <SocialIconWrapper>
            <GithubIcon size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
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
