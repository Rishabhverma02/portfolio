import { text12, text16, text38 } from "@/app/style/typography";
import Image from "next/image";
import styled from "styled-components";


export const HeroWrapper = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const HeroContentContainer = styled.div`
   width: 80%;
   padding-top: 5%;
   display: flex;
   align-items: center;
`;

export const IntroContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const GreetingContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;

   .greeting-bar{
      width: 30px;
      height: 1px;
      background-color: #eabc17;
   }
`;
export const Greeting = styled.h2`
 ${text12}
 color: #eabc17;
 text-transform: uppercase;
`;
export const Intro = styled.h1`
   ${text38}
   color: #ffff;
   span{
      color: #eabc17;
   }
`;
export const IntroDesc = styled.p`
  ${text16}
   color: #ffff;
`;

// export const ImageContainer = styled.div`
//    width: 50%;
//    display: flex;
//    align-items: center;
//    justify-content: center;
// `;

// export const HeroImage = styled(Image)`
//    position: relative;
//    z-index: 1;
// `;
// export const HeroBgImage = styled(Image)`
//    width: 50%;
//    position: absolute;
//    opacity: 0.1;
//    top: 20%;
// `;


export const ImageContainer = styled.div`
  width: 50%;
  aspect-ratio: 15 / 9;   /* fixed picture frame */
  position: relative;     /* for absolute positioning */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;       /* avoid overflow issues */
`;

export const HeroImage = styled(Image)`
  width: 50%;
  height: 100%;
  object-fit: cover;       /* keeps proportion */
  position: relative;
  z-index: 2;              /* above background */
`;

export const HeroBgImage = styled(Image)`
  width: 80%;
  height: 100%;
  /* object-fit: cover;       */
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  opacity: 0.1;            /* faded background */
  z-index: 1;
`;
