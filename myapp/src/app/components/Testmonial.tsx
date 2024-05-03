"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
const Testmonial = () => {
  const testimonials = [
    {
      quote:
        "Collaborating with you on our website redesign was a breeze. They brought a level of professionalism and creativity to the table that made the entire process enjoyable. Their mastery of React and Next.js allowed us to implement advanced features seamlessly, while their UX/UI design sensibilities ensured a delightful user experience. We couldn't be happier with the outcome.",
      name: "Huzaif Farooq",
      title: "Collaboration",
    },
    {
      quote:
        "From the initial consultation to the final delivery, you were demonstrated a deep understanding of our project requirements and a commitment to excellence. Their ability to translate our vision into a functional and aesthetically pleasing website using React and Next.js was impressive. They are not just talented developers but also great communicators, making the entire process smooth and efficient.",
      name: "Noumaan",
      title: "Hamlet",
    },
    {
      quote:
        "Working with you was a breath of fresh air. Their passion for web development and dedication to excellence shone through in every interaction. The website they built for us using React and Next.js not only meets but exceeds our expectations. We highly recommend their services to anyone looking for a talented frontend developer.",
      name: "Zaid bin Maqbool",
      title: "Work Experience",
    },
    {
      quote:
        "Hiring you was one of the best decisions we made for our business. Their frontend development skills, particularly in React and Next.js, are unmatched. They were able to take our rough ideas and turn them into a polished, user-friendly website that has received rave reviews from our customers.",
      name: "Zubair Muzaffar",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "“Your designs are visually stunning, exactly what we envisioned!,We were blown away by the level of professionalism and creativity Mehran brought to our project. Their mastery of React and Next.js, coupled with their eye for design, resulted in a website that not only looks amazing but also functions flawlessly.”",
      name: "Saheem",
      title: "D0ne Web App",
    },
  ];
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8 z-10">
          Testimonials
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmonial;
