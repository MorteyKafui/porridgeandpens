"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";

import Image from "next/image";
import image1 from "../public/assets/images/impact-img.webp";
import image2 from "../public/assets/images/project-future.webp";
import image3 from "../public/assets/images/project-hands.webp";

const projects = [
  {
    title: "The Girl Power Project",
    description:
      "We provide safe shelter, care and dignity to the young women on our Girl Power Project, providing them with the environment they need to complete their education and build an independent future free from poverty.",
    url: "/projects/girl-power",
    image: image1,
  },

  {
    title: "Start-Up Project",
    description:
      "We work with the families of the children we support to create sustainable, thriving communities and tackle unemployment in the Kumasi region. We help parents to secure a brighter future...",
    url: "/projects/start-up",
    image: image3,
  },
  {
    title: "Brighter Futures Project",
    description:
      "Brighter Futures, a new project for 2023, provides bright young men with the resources to attend university.",
    url: "/projects/futures",
    image: image2,
  },
  {
    title: "Vacational Training",
    description:
      "We work with the families of the children we support to create sustainable, thriving communities and tackle unemployment in the Kumasi region. We help parents to secure a brighter future...",
    url: "/projects/vocation",
    image: image3,
  },
];

const ProjectCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.leave}
      className="w-full"
    >
      <CarouselContent className="flex justify-between gap-4">
        {projects.map(({ title, description, image, url }, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="flex flex-col gap-8 rounded-xl overflow-hidden h-[33rem] border-2 lg:h-[35rem] shadow-xl">
                <Link href={url}>
                  <Image src={image} alt={title} />
                </Link>
                <CardContent className="flex flex-col gap-2 items-center justify-center text-center">
                  <h3 className="text-xl">{title}</h3>
                  <p>{description}</p>
                  <div className="mt-10">
                    <Link
                      className="text-center px-12 py-3 rounded-md shadow-2xl text-white font-bold uppercase bg-greenColor hover:opacity-80 transition-all duration-500 hover:translate-y-2"
                      href={url}
                    >
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
