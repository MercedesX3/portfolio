import Image from "next/image";
import Link from "next/link";
import { ScrollVelocity } from "../components/ui/scroll-velocity";

export default function Home() {
  return (
    <div className="flex flex-col h-screen pt-8 px-8 overflow-hidden">
      <div className="flex flex-row items-center w-screen">
        <Image
            src="/Mercedes_Logo.svg"  // Path to your image (must be in the 'public' folder)
            alt="Mercedes Logo" 
            width={36}  // Set width
            height={36} // Set height
            className="" // Tailwind classes for styling
        />
        <div className="absolute left-1/2 -translate-x-1/2  bg-white flex flex-row py-2 sm:px-12 md:px-20 lg:px-24 sm:space-x-4 md:space-x-6 lg:space-x-8 rounded-full shadow-[0px_4px_20px_#C1BBE1]">
            <Link className="text-sm font-bold" href="/work">Work</Link> {/* This navigates to the new page */}
            <Link className="text-sm font-bold" href="/about">About</Link>
            <a href="/Mercedes_Xiong_Resume_2025 - V3.pdf" target="_blank" rel="noopener noreferrer"><p className="text-sm font-bold">Resume</p></a>
        </div>
      </div>

      <div className="mt-60">
          <h1 className="font-bold text-[clamp(2rem,10.3vw,12rem)] leading-none whitespace-nowrap text-center">MERCEDES XIONG</h1>
          <div className="bg-blue-100">
            <h1>Bob</h1>
          </div>
      </div>
    </div>
  );
}
