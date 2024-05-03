"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import fire from "@/app/assets/firebase auth.png";
import img from "@/app/assets/imagee.png";
import zub from "@/app/assets/zub.png";

const content = [
  {
    title: "Frontend Developer",
    description:
      "I specialize in building visually appealing and user-friendly interfaces for websites and web applications. Proficient in HTML, CSS, JavaScript and ReactJs. I bring designs to life by creating responsive and interactive components.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={img}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. Designing and implementing visually appealing and responsive user interfaces for websites and web applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fire}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Use version control systems (e.g., Git) to track changes, collaborate with other developers, and maintain codebase integrity.Designing and implementing visually appealing and responsive user interfaces for websites and web applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src={zub}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "Write clean, efficient, and maintainable code using HTML, CSS, JavaScript and React to implement UI designs and ensure a seamless user experience. Offering expertise in crafting visually appealing and user-friendly websites. Including conceptualizing layouts, selecting color schemes, implementing typography, and integrating interactive elements to create engaging digital experiences. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={fire}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const Stickyscroll = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default Stickyscroll;
