"use client";
import Image from "next/image";
import Link from "next/link";
import HorizontalScroller from "../components/HorizontalScroller";
import RightScrollBand from "../components/RightScrollBand";
import { useState, useEffect } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(window.innerWidth / 2); // safe: runs only in browser
  }, []);
  return (
    // Let the page grow taller than the viewport and allow vertical scroll
    <div className="flex flex-col min-h-screen pt-8 px-8 overflow-x-hidden">
      {/* Make this relative so the absolute pill centers relative to this row */}
      <div className="relative flex flex-row items-center w-full">
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
      <main className="flex-1 mt-60">
        <h1 className="font-bold text-[clamp(2rem,10.3vw,12rem)] leading-none whitespace-nowrap text-center">
          MERCEDES XIONG
        </h1>

        <div className="bg-blue-100 mt-10 py-40">
          <h1>Bob</h1>
        </div>
        
        {/* Break out of the px-8 padding to reach true screen edge */}
        {/* Counteract the parent's px-8 padding so text can reach true left edge */}
{/* Counteract the parent's px-8 padding */}
<div className="-mx-8 pl-4"> {/* Added pl-4 for some left padding */}
  <HorizontalScroller speed={2} startOffset={0.5} fontSize="responsive" className="text-black">
    Full Stack Developer - Computer Science @ UTD
  </HorizontalScroller>
</div>

<hr className="border-t-2 border-black"/>

<div className="-mx-8 pr-4"> {/* Added pl-4 for some left padding */}
  <RightScrollBand speed={2} startOffset={0.5} fontSize="responsive" className="text-purple-300">
  Director of Community @ ACM UTD
  </RightScrollBand>
</div>

<hr className="border-t-2 border-black"/>

<div className="-mx-8 pl-4"> {/* Added pl-4 for some left padding */}
  <HorizontalScroller speed={2} startOffset={0.5} fontSize="responsive" className="text-black">
    Designer & Front End Developer for Sage
    <button className="bg-black px-10 py-2 rounded-full text-white text-3xl shadow-[0px_0px_15px_#7AFFA6] hover:shadow-[0px_0px_15px_#00FF54] ">Check Out Sage</button>
  </HorizontalScroller>
</div>

<div className="bg-blue-100 mt-10 py-40">
          <h1>Bob</h1>
        </div>

      </main>
    </div>
  );
}