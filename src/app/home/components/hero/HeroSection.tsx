import React from 'react'
import portfolioImg from "@/app/assets/images/referances/BW-ProfilePicture-removebg-preview.png";
import portfolioImgBg from "@/app/assets/images/referances/Untitled_design__2_-removebg-preview.png";
import { HeroContentContainer, IntroContainer, HeroWrapper, ImageContainer, Intro, GreetingContainer, Greeting, IntroDesc, HeroBgImage, HeroImage } from './styled';

export const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContentContainer>
        <IntroContainer>
          <GreetingContainer>
            <div className='greeting-bar'/>
            <Greeting>Hello</Greeting>
          </GreetingContainer>
          <Intro>I&apos;m&nbsp;&nbsp;<span>Rishabh</span>&nbsp;&nbsp;Verma</Intro>
          <IntroDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            harum eveniet nostrum laborum et a incidunt, natus laudantium autem.
            Ullam quasi nisi aut odit consequatur quia earum. Officia, facere
            doloremque?
          </IntroDesc>
        </IntroContainer>
        <ImageContainer>
          <HeroBgImage
            src={portfolioImgBg}
            alt="bg-img"
          />
          <HeroImage
            src={portfolioImg}
            alt="portfolio"
          />
        </ImageContainer>
      </HeroContentContainer>
    </HeroWrapper>
  )
}

