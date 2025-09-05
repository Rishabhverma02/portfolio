"use client";
import { createGlobalStyle } from "styled-components";
import { Roboto, Josefin_Sans, Open_Sans, Poppins } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800"],
  variable: "--font-roboto",
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body, #__next {
    margin: 0;
    padding: 0;
    width: 100% ;
    height: 100%;
    font-family: ${poppins.style.fontFamily}, sans-serif;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    background-attachment: fixed;

    transition: background 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-family: ${poppins.style.fontFamily}, sans-serif;
  }

  input, button, textarea {
    font-family: ${poppins.style.fontFamily}, sans-serif;
  }

  ::placeholder {
    font-family: ${poppins.style.fontFamily}, sans-serif;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent ;
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background.glassStrong} inset ;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 10px; 
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scroll.scrollbar};
    border: 2px solid ${({ theme }) => theme.colors.text.muted};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scroll.scrollbarHover};
  }
`;
