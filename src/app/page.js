"use client";
import Image from "next/image";
import Link from "next/link";
import HorizontalScroller from "../components/HorizontalScroller";
import RightScrollBand from "../components/RightScrollBand";
import { useState, useEffect } from "react";

import ArcherHomePage from "../../public/homePics/HeroPageArcher.png"
import LuminaPage from "../../public/homePics/LuminaScreens.png"
import { MoveRight } from "lucide-react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(window.innerWidth / 2); // safe: runs only in browser
  }, []);
  return (
    // Let the page grow taller than the viewport and allow vertical scroll
    <div className="flex flex-col min-h-screen pt-8 overflow-x-hidden">
      {/* Make this relative so the absolute pill centers relative to this row */}
      <div className="relative flex flex-row items-center w-full px-8">
        <Image
          src="/Mercedes_Logo.svg"
          alt="Mercedes Logo"
          width={36}
          height={36}
        />
        <div
          className="
            absolute left-1/2 -translate-x-1/2 bg-white
            flex flex-row items-center py-2
            px-8 sm:px-12 md:px-20 lg:px-24
            gap-6 sm:gap-8
            rounded-full shadow-[0px_4px_20px_#C1BBE1]
          "
        >
          <Link className="text-sm font-bold hover:text-[#C1BBE1]" href="/work">Work</Link>
          <Link className="text-sm font-bold hover:text-[#C1BBE1]" href="/about">About</Link>
          <a
            href="/Mercedes_Xiong_Resume_2025%20-%20V3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold hover:text-[#C1BBE1]"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Main content grows; page will scroll normally */}
      <main className="flex-1 mt-60 px-8">
        <h1 className="font-bold text-[clamp(2rem,10.3vw,12rem)] leading-none whitespace-nowrap text-center">
          MERCEDES XIONG
        </h1>

        <div className="bg-blue-100 mt-10 py-20 relative w-full">
          <Image
          src="/Rectangle.png"
          alt="Description of image"
          fill                // 🔑 tells Next.js to fill the parent
          className="object-cover" // or "object-cover" to crop & fill
        />
        </div>
        
        {/* Break out of the px-8 padding to reach true screen edge */}
        {/* Counteract the parent's px-8 padding so text can reach true left edge */}
        {/* Counteract the parent's px-8 padding */}
        <div className="-mx-8 pl-4 mt-24"> {/* Added pl-4 for some left padding */}
          <HorizontalScroller speed={2} startOffset={0.5} fontSize="responsive" className="text-black">
            Full Stack Developer - Computer Science @ UTD
          </HorizontalScroller>
        </div>

        <hr className="border-t-2 border-black"/>

        <div className="pr-0"> {/* Added pl-4 for some left padding */}
          <RightScrollBand speed={2} startOffset={0.4} fontSize="responsive" className="text-purple-300">
          Director of Community @ ACM UTD
          </RightScrollBand>
        </div>

        <hr className="border-t-2 border-black"/>

        <div className="-mx-8 pl-4"> {/* Added pl-4 for some left padding */}
          <HorizontalScroller speed={2} startOffset={0.5} fontSize="responsive" className="text-black">
            Designer & Front End Developer for Sage
            <button 
            onClick={() => window.open("https://utdsage.com/", "_blank", "noopener,noreferrer")}
            className="flex flex-row items-center space-x-4 bg-black px-10 py-2 rounded-full text-white text-3xl shadow-[0px_0px_15px_#7AFFA6] hover:shadow-[0px_0px_15px_#00FF54] ">
              <h1>Check Out Sage</h1>
              <MoveRight 
                
              />
            </button>
          </HorizontalScroller>
        </div>

        <div className="pt-24 space-y-20">
            <div className="flex flex-row justify-between items-center">
              <div className="group hover:rotate-6 transition-transform">
                <div className="relative w-[80vh] h-[30vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
              <Image
                    src={ArcherHomePage}
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Archer</h1>
                <h1 className="text-lg">The Dictionary for Every Architect</h1>
              </div>
              <div className="group hover:-rotate-6 transition-transform text-right">
                <div className="relative w-[80vh] h-[30vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
                  <Image
                    src={LuminaPage}
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Lumina</h1>
                <h1 className="text-lg">Your Space App for Stagazing Experiences</h1>
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="hover:rotate-3 transition-transform">
                <div className="relative w-[50vh] h-[35vh]">
                  <Image
                    src="/Rectangle.png"
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Finterest</h1>
                <h1 className="text-lg">Use your interests to invest in your finances</h1>
              </div>
              <div className="hover:-rotate-6 transition-transform text-right">
                <div className="relative w-[45h] h-[40vh]">
                  <Image
                    src="/Rectangle.png"
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Eureka Mart</h1>
                <h1 className="text-lg">Your digital refrigerator and cookbook in one</h1>
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="hover:rotate-6 transition-transform text-left">
                  <div className="relative w-[60vh] h-[25vh]">
                    <Image
                      src="/Rectangle.png"
                      alt="Description of image"
                      fill                // 🔑 tells Next.js to fill the parent
                      className="object-cover" // or "object-cover" to crop & fill
                      sizes="(min-width: 768px) 700px, 100vw"
                    />
                  </div>
                  <h1 className="text-lg font-bold">Windle</h1>
                  <h1 className="text-lg">Forecasting Market Movements Using Weather Intelligence</h1>
                </div>
              <div className="hover:-rotate-6 transition-transform text-right">
                <div className="relative w-[80vh] h-[30vh]">
                  <Image
                    src="/Rectangle.png"
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Bookmarked</h1>
                <h1 className="text-lg">Where stories live, lists thrive, and readers find their next adventure</h1>
              </div>
            </div>
        </div>
      </main>

      <div className="mt-20 shadow-[0px_0px_20px_#C1BBE1]">
                <div className="flex h-[96px] w-full items-center justify-between px-14">
                <p>@2025 Mercedes Xiong</p>
                <div className="flex space-x-6">
                    <a href="https://github.com/MercedesX3" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/mercedes-xiong-2900b2296/" target="_blank">LinkedIn</a>
                    <a>Contact Me</a>    
                </div>      
                </div>
      </div>
    </div>
  );
}