"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            
          </>
        }
      >
        <video
          src="/videos/v1.mp4" // path to your video file
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
