"use client";
//import { TimelineContent } from "./ui/timeline";
import {VerticalCutReveal} from "./ui/vertical-about";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-8 px-4 bg-[#f9f9f9] pt-30" ref={heroRef} id="about">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2  text-xl">
              <span className="text-orange-600 animate-spin">✱</span>
              <div
               
                className="text-sm font-medium text-gray-600"
              >
                WHO WE ARE
              </div>
            </div>
            <div className="flex gap-4">
             <a
  href="https://www.facebook.com/profile.php?id=61584510311404"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
    <img
      src="https://pro-section.ui-layouts.com/facebook.svg"
      alt="fb"
      width={24}
      height={24}
    />
  </div>
</a>

<a
  href="https://www.instagram.com/iqbalstructuralsolutions/"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
    <img
      src="https://pro-section.ui-layouts.com/instagram.svg"
      alt="insta"
      width={24}
      height={24}
    />
  </div>
</a>

              
            </div>
          </div>

          <div
           
            className="relative group"
          >
            <svg
              className="w-full"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="/about.jpg"
              ></image>
            </svg>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <div
             
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-orange-600 font-bold">15+</span>
                <span className="text-gray-600">years of experience</span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-orange-600 font-bold">500+</span>
                <span className="text-gray-600">Projects Completed</span>
              </div>
            </div>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <div
               
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-orange-700 font-semibold">50+</span>
                <span className="text-gray-700 uppercase">Expert Engineers</span>
              </div>
             
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* <TimelineContent as="h1" animationNum={8} timelineRef={heroRef} customVariants={revealVariants} className="text-4xl md:text-5xl !leading-[110%] font-semibold text-gray-900 mb-8">
              Crafting Words That Make a Difference.
            </TimelineContent> */}
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-900 mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 3,
                }}
              >
                Building Strong Steel Structures for Industrial & Commercial Projects
              </VerticalCutReveal>
            </h1>

            <div
             
              className="grid md:grid-cols-2 gap-8 text-gray-600"
            >
              <div
               
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
                  We specialize in designing and constructing durable steel
                  structures that meet the highest quality standards. From
                  warehouses to commercial complexes, our solutions are
                  reliable and cost-effective.
                </p>
              </div>
              <div
            
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
               Our team of experienced engineers and project managers ensures
                  timely delivery and exceptional structural integrity for every
                  project. Safety, precision, and innovation are at the core of
                  what we do.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <div
              
                className="text-orange-600 text-2xl font-bold mb-2"
              >
                Iqbal Structure
              </div>
              <div
              
                className="text-gray-600 text-sm mb-8"
              >
                Steel Construction Experts
              </div>

              <div
                
                
                className="mb-6"
              >
                <p className="text-gray-900 font-medium mb-4">
                  Ready to elevate your project with robust steel structures?
                </p>
              </div>
                  <a href="/contact">
              <div
                
                
                
                
                className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
              >
                GET A QUOTE <ArrowRight className="" />
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
