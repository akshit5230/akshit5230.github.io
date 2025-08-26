"use client"
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarouselInventions from "@/components/EmblaCarouselInventions";
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css';
import EmblaCarouselTutorials from "@/components/EmblaCarouselTutorials";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const INVENTIONS = [
  {
    index: 0,
    image: "/images/music_neon.png",
    title: 'Music Neon Lights',
  },
  {
    index: 1,
    image: "/images/weight_tray.png",
    title: 'Water Tracking Plate',
  },
  {
    index: 2,
    image: "/images/4_led_cube.jpg",
    title: '4x4x4 LED Cube',
    link: 'https://www.instructables.com/Simple-LED-Cube-4x-with-Arduino328p/'
  },
  {
    index: 3,
    image: "/images/digital_fm.JPG",
    title: 'Arduino Digital FM',
  },
  {
    index: 4,
    image: "/images/gaming_pc.JPG",
    title: 'Custom Gaming Build',
    link: 'https://www.instructables.com/How-to-Build-a-Budget-Gaming-PC-Detailed-Informati/'
  },
  {
    index: 5,
    image: "/images/led_dice.JPG",
    title: 'LED Dice',
  },
  {
    index: 6,
    image: "/images/music_cube.JPG",
    title: 'Music Sync LED Cube',
  },
  {
    index: 7,
    image: "/images/wireless_headphone.jpg",
    title: 'Wireless Headphone Adapter',
    link: 'https://www.instructables.com/Simple-Turn-Any-Headphone-into-Wireless-Headset/'
  }
]
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  const [emblaRef] = useEmblaCarousel()
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh px-4">
        <div className="text-4xl sm:text-5xl font-medium">Hi! I&apos;m Akshit.</div>
        <div className="text-xl sm:text-2xl text-center mt-2">I am a software developer.</div>
        <div className="text-xl sm:text-2xl text-center">I mostly work with Javascript & Typescript.</div>
        <div className="text-xl sm:text-2xl text-center">I also develop cross-platform applications for mobile devices such as iPhones, iPads and Android devices.</div>
        <div className="mt-3 flex flex-row gap-2">
          <Link href="https://github.com/akshit5230" rel="noopener noreferrer" target="_blank">
            <Image
              src="/images/github.svg"
              alt="Github logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://stackoverflow.com/users/6025307" rel="noopener noreferrer" target="_blank">
            <Image
              src="/images/stackoverflow.svg"
              alt="Stackoverflow logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://www.youtube.com/@thetypescriptdeveloper" rel="noopener noreferrer" target="_blank">
            <Image
              src="/images/youtube.svg"
              alt="Youtube logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://steamcommunity.com/id/akshit5230" rel="noopener noreferrer" target="_blank">
            <Image
              src="/images/steam.svg"
              alt="Steam logo"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>
      <div id="inventions">
        <svg
          className="w-full h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center bg-[var(--foreground)] text-[var(--background)]">
        <div className="mt-10 text-4xl sm:text-5xl">My Inventions :)</div>
        <EmblaCarouselInventions slides={INVENTIONS} options={OPTIONS} />
      </div>
      <div style={{ marginTop: -50 }} id="tutorials">
        <svg
          className="w-full h-16 text-[var(--background)]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center pb-10">
        <div className="mt-10 text-4xl sm:text-5xl">My Medium Blogs :)</div>
        {/* <EmblaCarouselTutorials slides={[INVENTIONS[0]]} options={OPTIONS} /> */}
        <a className="flex flex-col items-center mt-15 mb-10" target="_blank" href="https://medium.com/@akshit5230">
          <Image
            className="medium-blogs"
            src="/images/medium-blogs.png"
            alt="Medium blogs"
            width={30}
            height={30}
            priority
          />
        </a>
      </div>
      <div style={{ marginTop: -50 }} id="repositories">
        <svg
          className="w-full h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center pb-10 bg-[var(--foreground)] text-[var(--background)]">
        <div className="mt-10 text-4xl sm:text-5xl">My YT Tutorials :)</div>
        <iframe 
          className="mb-20 tutorial_frame"
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/videoseries?si=Rx__kmpC-BYGhVnC&amp;list=PLuD-QWsDG-elW9JyCrN3-GWGw979IO0se" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
      </div>
      <div style={{ marginTop: -50 }} id="vacations">
        <svg
          className="w-full h-16 text-[var(--background)]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center h-svh">
        <div className="mt-10 text-4xl sm:text-5xl">My Vacations :)</div>
      </div>
    </>
  )
}
