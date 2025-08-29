"use client";

import { useEffect, useState } from "react";
import {
  HeaderWrapper,
  HamburgerButton,
  DrawerOverlay,
  Drawer,
  CloseButton,
  DrawerContent,

} from "./styled";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { usePathname } from "next/navigation";

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
          <h2>Header</h2>
        <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
          <HiMenuAlt3 className="menu-icon" />
        </HamburgerButton>

      </HeaderWrapper>

      {isOpen && (
        <DrawerOverlay onClick={closeDrawer}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeDrawer} aria-label="Close Menu">
              <HiX className="close-icon" />
            </CloseButton>
            <DrawerContent>
              This is sidebar
            </DrawerContent>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};
