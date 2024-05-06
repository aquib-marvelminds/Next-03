"use client";
import React from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

const Services = () => {
  return (
    <>
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-8 z-10 mt-12">
          MY SERVICES
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-8 h-[40rem]">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default Services;
export const projects = [
  {
    title: "MATLAB",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "C++",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "C#",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Software",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "GIT HUB",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
