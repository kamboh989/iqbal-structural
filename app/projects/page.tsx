import React from 'react'
import  {HeroParallaxDemo} from "./hero";
import  CircularGalleryDemo  from "./circular-gallery-1";
import  VideoScrollHeroPage  from "./videos";
import  Video2  from "./video2";
import { projectsSEO } from "./seo";

export const metadata = projectsSEO;


const page = () => {
  return (
    <div>
      <HeroParallaxDemo/>
      <CircularGalleryDemo/>
    
      <VideoScrollHeroPage/>
      <Video2/>
    </div>
  )
}

export default page
