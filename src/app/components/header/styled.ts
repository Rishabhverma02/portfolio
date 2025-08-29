"use Client";
import { theme } from "@/app/theme";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const HamburgerButton = styled.button`
  background: rgba(24, 24, 24, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: none;
  border-radius: 50px;
  padding: 10px 12px;
  cursor: pointer;
  z-index: 10;

  .menu-icon {
    font-size: 20px;
    color: ${theme.COLOR.OFFWHITE};
  }

  @media screen and (min-width: 1080.98px) {
    display: none;
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: flex-end;
  z-index: 51;
`;

export const Drawer = styled.div`
  background: rgba(24, 24, 24, 0.4);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 60%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.4s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 912.98px) {
    width: 75%;
  }
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  padding: 8px;
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  justify-content: center;

  .close-icon {
    font-size: 20px;
    color: ${theme.COLOR.OFFWHITE};
  }
`;

export const DrawerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
`;
