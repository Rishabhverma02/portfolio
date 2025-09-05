"use Client";
import { text18, text20, text30 } from "@/app/style/typography";
import styled, { css, keyframes } from "styled-components";

const dropDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

// export const HeaderWrapper = styled.header.withConfig({
//   shouldForwardProp: (prop) => prop !== "animate",
// })<{ animate: boolean }>`
//   width: 100%;
//   position: fixed;
//   top: 0px;
//   padding: 20px 0px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
//   transition: background 0.3s ease, backdrop-filter 0.3s ease;

//   ${(props) =>
//     props.animate
//       ? css`
//           background: rgba(68, 68, 68, 0.4);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           animation: ${dropDown} 0.4s ease-out;
//         `
//       : css`
//           background: transparent;
//           backdrop-filter: none;
//         `}
// `;

export const HeaderWrapper = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<{ animate: boolean }>`
  width: 100%;
  position: fixed;
  top: 0px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;

  ${({ animate, theme }) =>
    animate
      ? css`
          background: ${theme.colors.background.glassStrong};
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: ${dropDown} 0.4s ease-out;
        `
      : css`
          background: transparent;
          backdrop-filter: none;
        `}
`;


export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  
 @media (max-width: 1080px) {
  width: 90%;
  }
`;

// export const HamburgerButton = styled.button`
//   ${text20}
//   display: flex;
//   align-items: center;
//   background: rgba(24, 24, 24, 0.4);
//   backdrop-filter: blur(8px);
//   -webkit-backdrop-filter: blur(8px);
//   border: none;
//   border-radius: 50px;
//   padding: 10px 12px;
//   cursor: pointer;
//   z-index: 10;
//   color: #ccc; 



//   @media screen and (min-width: 1080.98px) {
//     display: none;
//   }
// `;

export const HamburgerButton = styled.button`
  ${text20}
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.glass};
  border: none;
  border-radius: 50px;
  padding: 10px 12px;
  cursor: pointer;
  z-index: 10;
  color: ${({ theme }) => theme.colors.text.secondary};

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
  ${text20}
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
  color: #ccc;

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


// export const SocialIconWrapper = styled.div`
//   ${text18}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   color: #ffff;
  
//   .social-icon {
//     transition: color 0.3s ease; 
//   }

//   .social-icon:hover {
//     color: #eabc17;
//   }
     
//    @media (max-width: 1080px) {
//       display: none;
//    }
// `;

export const SocialIconWrapper = styled.div`
  ${text18}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.text.primary};

  .social-icon {
    transition: color 0.3s ease;
  }

  .social-icon:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;


// export const Logo = styled.h1`
//  ${text30}
//  color: #eabc17;
//  font-family: "Josefin Sans", sans-serif;
// `;

export const Logo = styled.h1`
  ${text30}
  color: ${({ theme }) => theme.colors.brand.primary};
  font-family: "Josefin Sans", sans-serif;
`;