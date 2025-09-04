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
  padding-top: 6%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    gap: 10px;
    padding: 8% 0;
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const IntroContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .cv-button {
    ${text16}
    width: fit-content;
    text-transform: capitalize;
    color: #eabc17;
    border-color: #ccc;
  }

  @media (max-width: 1080px) {
    text-align: center;
    align-items: center;
    width: 80%;
    gap: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1080px) {
    align-items: center;
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .greeting-bar-l {
    width: 30px;
    height: 1px;
    background-color: #eabc17;

    @media (max-width: 1080px) {
      width: 20px;
    }
  }
  .greeting-bar-r {
    display: none;
    @media (max-width: 1080px) {
      display: flex;
      width: 20px;
      height: 1px;
      background-color: #eabc17;
    }
  }
  @media (max-width: 1080px) {
    /* display: none; */
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
  span {
    color: #eabc17;
  }
`;
export const IntroDesc = styled.p`
  ${text16}
  color: #ffff;
`;

export const ImageContainer = styled.div`
  width: 50%;
  aspect-ratio: 22 / 15;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
    aspect-ratio: 25 / 19;
  }
`;

export const HeroImage = styled(Image)`
  width: 60%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 65%;
  }
`;

export const HeroBgImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.1;
  z-index: 1;
`;
