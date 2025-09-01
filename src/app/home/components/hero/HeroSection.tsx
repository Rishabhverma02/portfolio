import React from 'react'
import portfolioImg from "@/app/assets/images/referances/BW-ProfilePicture-removebg-preview.png";
import portfolioImgBg from "@/app/assets/images/referances/Untitled_design__2_-removebg-preview.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
 <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "50%",
          }}
        >
          <h1>Hello</h1>
          <h2>I'm Rishabh Verma</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            harum eveniet nostrum laborum et a incidunt, natus laudantium autem.
            Ullam quasi nisi aut odit consequatur quia earum. Officia, facere
            doloremque?
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Image
            src={portfolioImgBg}
            alt="bg-img"
            style={{
              position: "absolute",
              width: "50%",
              opacity: 0.1,
              zIndex: 0,
              top: "70px",
            }}
          />
          <Image
            src={portfolioImg}
            alt="portfolio"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </main>
  )
}

