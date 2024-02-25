"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

const NewsLetter = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.inOut",
        },
        scrollTrigger: "#news",
      });

      tl.from(["#news h3 ", "#news p", "#news .btn"], {
        yPercent: 50,
      });
    },

    { scope: container }
  );

  return (
    <div id="news" className=" bg-greenColor text-white" ref={container}>
      <div className="flex flex-col justify-center items-center gap-2 py-12 text-center max-w-screen-2xl mx-auto px-10">
        <h3 className="text-4xl mb-2">Subscribe To Our Upcoming Events</h3>
        <p className="font-medium">
          Stay informed about our in Ghana and our latest campaigns.
        </p>

        <Link
          className="px-8 py-3 text-center bg-yellowColor font-bold text-xl rounded text-blackColor uppercase mt-8 shadow-2xl btn"
          href="/contact-us"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default NewsLetter;
