import React from 'react'
import Hero from "./components/hero";
//import  Nav  from "./components/navbar";
import About   from "./components/about";
import  {Blog8}  from "./components/ui/service-blog";
import  ProcessSectionDemo from "./components/how-it-works";
import  TestimonialChunks  from "./components/testimonial";
import  { LetsWorkTogether}  from "./components/start";
//import  FooterGlow  from "./components/footer";
import { FeatureStepsDemo } from "./components/feature-sec";
import  Faq  from "./components/faq";
import {  HeroScrollDemo} from "./components/video-scroll";


const page = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Hero/>
      <About/>
      <HeroScrollDemo/>
      <Blog8/>
      <ProcessSectionDemo/>
      <FeatureStepsDemo/>
      <Faq/>
      <TestimonialChunks/>
      < LetsWorkTogether/>
      {/* <FooterGlow/> */}
    </div>
  )
}

export default page
