import React from 'react'
// import portfolioImg from "@/app/assets/images/hero.png";
import portfolioImg from "@/app/assets/images/rishabh.color.portfolio.png";
import portfolioImgBg from "@/app/assets/images/hero-bg1.png";
import { HeroContentContainer, IntroContainer, HeroWrapper, ImageContainer, Intro, GreetingContainer, Greeting, IntroDesc, HeroBgImage, HeroImage, ContentWrapper } from './styled';
import { Button } from '@mui/material';


export const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContentContainer>
        <IntroContainer>
          <ContentWrapper>
          <GreetingContainer>
            <div className='greeting-bar-l'/>
            <Greeting >Hello</Greeting>
            <div className='greeting-bar-r'/>
          </GreetingContainer>
          <Intro >I&apos;m&nbsp;&nbsp;<span>Rishabh</span>&nbsp;&nbsp;Verma</Intro>
          <IntroDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            harum eveniet nostrum laborum et a incidunt, natus laudantium autem.
            Ullam quasi nisi aut odit consequatur quia earum. Officia, facere
            doloremque?
          </IntroDesc>
          </ContentWrapper>
          <Button className='cv-button' variant="outlined">download CV</Button>
        </IntroContainer>
        <ImageContainer>
          <HeroImage
            src={portfolioImg}
            alt="portfolio"
          />
          <HeroBgImage
            src={portfolioImgBg}
            alt="bg-img"
          />
        </ImageContainer>
      </HeroContentContainer>
    </HeroWrapper>
  )
}

