import React from "react";
import { Button } from "@/app/components/ui/moving-border";

import { Spotlight } from "@/app/components/ui/spotlight";
const Hero = () => {
  return (
    <>
      {/* <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"> */}
      <div className="h-auto md:h-[48rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto  py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 text-center  mx-auto relative z-10  w-full pt-20 ">
          <h1 className="mt-8 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            MOHD AAQIB MUSHTAQ
          </h1>
          <p
            className="mt-8 font-normal text-base text-neutral-300  text-center mx-auto"
            style={{ maxWidth: "60rem" }}
          >
            Full Stack Developer skilled in creating dynamic, responsive web applications
 with expertise in JavaScript, React, Node.js, and MongoDB. Proficient in both
 frontend and backend, I design seamless user experiences and build efficient
 server logic. Experienced in database management and end-to-end
 development, I deliver robust, scalable solutions. Known for my problem
 solving approach and collaboration, I’m dedicated to crafting impactful, user
 centered applications that align with business goals
          </p>
          <div className="mt-8">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
