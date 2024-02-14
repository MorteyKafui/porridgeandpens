"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { useRef } from "react";

const Showcase = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: "back.inOut",
          yoyo: true,
          stagger: 0.2,
          scale: 1.2,
          duration: 0.7,
        },
      });
      tl.from("header .sub-text", {
        yPercent: -200,
      })
        .from("header .heading", {
          yPercent: 120,
        })
        .from("header .main-text", {
          yPercent: 150,
        })
        .from("header .btns", {
          x: "180",
        });
    },
    { scope: container }
  );

  return (
    <header className="showcase text-white" ref={container}>
      <div className="overlay">
        <div className="max-w-screen-2xl mx-auto container p-8 flex flex-col justify-center items-center gap-8 h-screen text-center w-[85%] lg:w-[70%]">
          <p className="sub-text text-yellowColor lg:text-2xl uppercase tracking-wider font-semibold">
            <span>Education</span>&mdash; <span>Food</span>&mdash;
            <span>Shelter</span>
          </p>
          <h1 className="heading text-4xl lg:text-6xl ">
            Every child deserves the opportunity to realise their full
            potential.
          </h1>
          <p className="main-text text-lg lg:text-2xl">
            We are working with the most disadvantaged children and young people
            in Ghana to help them break the cycle of poverty
          </p>
          <div className="btns flex flex-col lg:flex-row gap-4 lg:gap-12 uppercase lg:text-xl font-bold">
            <Link
              className="bg-greenColor px-12 py-3 rounded-lg hover:translate-y-1 transition-all duration-500 hover:opacity-90"
              href="/projects/academy"
            >
              Our Projects
            </Link>
            <Link
              className="bg-yellowColor text-blackColor px-12 py-3 rounded-lg hover:translate-y-1 transition-all duration-500 hover:opacity-90"
              href="/get-involved"
            >
              Get involved
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
