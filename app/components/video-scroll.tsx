"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            {/* Agar aap title ya koi content add karna chahte ho */}
          </>
        }
      >
        <video
          src="https://res.cloudinary.com/dwsdl518r/video/upload/v1766743479/v1_xmxgch.mp4" // Cloudinary link
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );    
}
