import React from 'react'
import portfolioImg from "@/app/assets/images/hero.png";
import portfolioImgBg from "@/app/assets/images/hero-bg1.png";
import { HeroContentContainer, IntroContainer, HeroWrapper, ImageContainer, Intro, GreetingContainer, Greeting, IntroDesc, HeroBgImage, HeroImage } from './styled';
import { Button } from '@/app/components';

export const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContentContainer>
        <IntroContainer>
          <GreetingContainer>
            <div className='greeting-bar'/>
            <Greeting >Hello</Greeting>
          </GreetingContainer>
          <Intro >I&apos;m&nbsp;&nbsp;<span>Rishabh</span>&nbsp;&nbsp;Verma</Intro>
          <IntroDesc className='text-16'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            harum eveniet nostrum laborum et a incidunt, natus laudantium autem.
            Ullam quasi nisi aut odit consequatur quia earum. Officia, facere
            doloremque?
          </IntroDesc>
          {/* <div style={{color:"#ccc"}}>
            <p className='mini-text'>mini-text</p>
            <p className='nav-text'>nav-text</p>
            <p className='drawer=text'>drawer-text</p>
            <button className='button-text'>button</button>
          </div> */}
          <Button buttonText='contact for more'/>
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

