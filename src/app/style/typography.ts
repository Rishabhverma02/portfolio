"use client";
import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const Typography = createGlobalStyle`
.text-12 { font-size: clamp(0.6rem, 1.2vw, 0.75rem); }    
.text-14 { font-size: clamp(0.7rem, 1.4vw, 0.875rem); }  
.text-16 { font-size: clamp(0.8rem, 1.6vw, 1rem); }       
.text-18 { font-size: clamp(0.9rem, 1.8vw, 1.125rem); }   
.text-20 { font-size: clamp(1rem, 2vw, 1.25rem); }       
.text-22 { font-size: clamp(1.1rem, 2.2vw, 1.375rem); }  
.text-24 { font-size: clamp(1.2rem, 2.4vw, 1.5rem); }     
.text-26 { font-size: clamp(1.3rem, 2.6vw, 1.625rem); }   
.text-28 { font-size: clamp(1.4rem, 2.8vw, 1.75rem); }    
.text-30 { font-size: clamp(1.5rem, 3vw, 1.875rem); }     
.text-32 { font-size: clamp(1.6rem, 3.2vw, 2rem); }      
.text-34 { font-size: clamp(1.7rem, 3.4vw, 2.125rem); }   
.text-36 { font-size: clamp(1.8rem, 3.6vw, 2.25rem); }    
.text-38 { font-size: clamp(1.9rem, 3.8vw, 2.375rem); }  
.text-40 { font-size: clamp(2rem, 4vw, 2.5rem); }         
.text-48 { font-size: clamp(2.4rem, 4.8vw, 3rem); }          
`;

export const text12 = css`font-size: clamp(0.6rem, 1.2vw, 0.75rem);`;
export const text14 = css`font-size: clamp(0.7rem, 1.4vw, 0.875rem);`;
export const text16 = css`font-size: clamp(0.8rem, 1.6vw, 1rem);`;
export const text18 = css`font-size: clamp(0.9rem, 1.8vw, 1.125rem);`;
export const text20 = css`font-size: clamp(1rem, 2vw, 1.25rem);`;
export const text22 = css`font-size: clamp(1.1rem, 2.2vw, 1.375rem);`;
export const text24 = css`font-size: clamp(1.2rem, 2.4vw, 1.5rem);`;
export const text26 = css`font-size: clamp(1.3rem, 2.6vw, 1.625rem);`;
export const text28 = css`font-size: clamp(1.4rem, 2.8vw, 1.75rem);`;
export const text30 = css`font-size: clamp(1.5rem, 3vw, 1.875rem);`;
export const text32 = css`font-size: clamp(1.6rem, 3.2vw, 2rem);`;
export const text34 = css`font-size: clamp(1.7rem, 3.4vw, 2.125rem);`;
export const text36 = css`font-size: clamp(1.8rem, 3.6vw, 2.25rem);`;
export const text38 = css`font-size: clamp(1.9rem, 3.8vw, 2.375rem);`;
export const text40 = css`font-size: clamp(2rem, 4vw, 2.5rem);`;
export const text48 = css`font-size: clamp(2.4rem, 4.8vw, 3rem);`;


/* ---------- Predefined Roles ---------- */
export const description = css`
  ${text16};
  font-weight: 400;
  line-height: 1.6;
  color: #ccc;
`;

export const buttonText = css`
  ${text16};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const drawerNavText = css`
  ${text14};
  font-weight: 600;
`;

export const miniText = css`
  ${text12};
  font-weight: 400;
  color: #aaa;
`;

