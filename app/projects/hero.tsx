"use client";

import React from "react";
import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="min-h-screen w-full relative">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  { title: "Moonbeam", link: "", thumbnail: "/projects/p1.jpg" },
  { title: "Cursor", link: "", thumbnail: "/projects/p2.jpg" },
  { title: "Rogue", link: "", thumbnail: "/projects/p3.jpg" },
  { title: "Editorially", link: "", thumbnail: "/projects/p4.jpg" },
  { title: "Editrix AI", link: "", thumbnail: "/projects/p5.jpg" },

  { title: "Pixel Perfect", link: "", thumbnail: "/projects/p6.jpg" },
  { title: "Algochurn", link: "", thumbnail: "/projects/p7.jpg" },
  { title: "Aceternity UI", link: "", thumbnail: "/projects/p8.jpg" },
  { title: "Tailwind Master Kit", link: "", thumbnail: "/projects/p9.jpg" },
  { title: "SmartBridge", link: "", thumbnail: "/projects/p10.jpg" },

  { title: "Renderwork Studio", link: "", thumbnail: "/projects/p11.jpg" },
  { title: "Creme Digital", link: "", thumbnail: "/projects/p12.jpg" },
  { title: "Golden Bells Academy", link: "", thumbnail: "/projects/p13.jpg" },
  { title: "Invoker Labs", link: "", thumbnail: "/projects/p14.jpg" },
  { title: "E Free Invoice", link: "", thumbnail: "/projects/p15.jpg" },
];
