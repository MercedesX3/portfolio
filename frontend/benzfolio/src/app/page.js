import Image from "next/image";
import Link from "next/link";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

export default function Home() {
  let quotes = ["There is no prize to perfection. Only an end to pursuit.", 
    "The history of evolution has taught us is that life will not be contained.", 
    "A mind needs books as a sword needs a whetstone.", 
    "What is a game? It's tomorrow, and tomorrow, and tomorrow. It's the possibility of infinite rebirth, infinite redemption."]

  return (
    <div className="grid grid-rows-[36px_1fr_94px] items-center overflow-auto bg-white sm:pt-6 font-sans">
      <div className="relative bg-blue-500 sm:pl-6 sm:pr-6">
        <Image
          src="/Mercedes_Logo.svg"  // Path to your image (must be in the 'public' folder)
          alt="Mercedes Logo" 
          width={36}  // Set width
          height={36} // Set height
          className="absolute" // Tailwind classes for styling
        />
        <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-full text-center p-4 flex items-center justify-center space-x-8 rounded-full shadow-[0px_4px_20px_#C1BBE1]">
          <Link className="text-sm font-bold" href="/work">Work</Link> {/* This navigates to the new page */}
          <Link className="text-sm font-bold" href="/about">About</Link>
          <p className="text-sm font-bold">Resume</p>
        </div>

      </div>

      <div className="p-4 pt-60 sm:pl-6 sm:pr-6">
        <div className="pb-32">
          <h1 className="text-5xl font-bold py-2">Hello, I'm Mercedes!</h1>
          <p className="font-medium py-2">A full stack developer and aspiring computer science student</p>
          <div className="flex items-center space-x-2">
            <p className="font-medium">@TheUniversityOfTexasAtDallas</p>
            <Image
              src="/Comet.svg"  // Path to your image (must be in the 'public' folder)
              alt="comet" 
              width={28}  // Set width
              height={28} // Set height
              className="relative"          
            />
          </div>

          <div className="flex py-4 space-x-6">
            <a href="https://github.com/MercedesX3" target="_blank">
            <Image
              src="/github 1.svg"  // Path to your image (must be in the 'public' folder)
              alt="githubLogo" 
              width={28}  // Set width
              height={28} // Set height
              className="" // Tailwind classes for styling
            />
            </a>
            <a href="https://www.linkedin.com/in/mercedes-xiong-2900b2296/" target="_blank">
            <Image
            src="/linkedin 1.svg"  // Path to your image (must be in the 'public' folder)
            alt="linkedinLogo" 
            width={28}  // Set width
            height={28} // Set height
            className="" // Tailwind classes for styling
            />
            </a>
        </div>
        </div>

        <div className="flex justify-center space-x-24 px-16 pb-32">
        <div className="h-80 w-1/5 rounded-[20px] bg-[#C4BEEE] pt-8 px-4 flex flex-col items-center justify-between overflow-hidden">
          <p className="font-semibold text-3xl text-white text-center">Lumina</p>
          <p className="font-medium text-white text-center pt-2">
            simplifying the exploration of the magic of stargazing
          </p>
          <Image
            src="/luminaphone.svg"
            alt="Lumina Screen"
            width={100}
            height={56}
            className="w-1/2 h-auto pt-4"
          />
        </div>


          <div className="h-80 w-1/5 rounded-[20px] mt-28 bg-[#EDDCF1] pt-8 px-4 justify-between">
            <p className="font-semibold text-3xl text-white text-center">Drafter</p>
            <p className="font-medium text-white text-center pt-2">analyzing nfl player statistics to predict future stats</p>
            <p className="pt-10 font-semibold text-3xl text-white italic text-center">Coming Soon</p>
          </div>
          
          <div className="h-80 w-1/5 rounded-[20px] mt-52 bg-[#DFDCEE] pt-8 px-4 flex flex-col items-center justify-between overflow-hidden">
          <p className="font-semibold text-3xl text-white text-center">EurekaMart</p>
            <p className="font-medium text-white text-center pt-2">your new digital refrigerator tracker
            </p>
            <Image
            src="/eurekamartmodel.svg"
            alt="Lumina Screen"
            width={100}
            height={56}
            className="w-1/2 h-auto pt-4"
          />
          </div>
        </div>
        <div 
        className="flex flex-row items-center">
          <ScrollVelocity velocity={3}> {quotes[0]} {quotes[1]} {quotes[2]} {quotes[0]} {quotes[1]} {quotes[2]}</ScrollVelocity>
        </div>

      </div>

      <div className="mt-auto shadow-[0px_0px_20px_#C1BBE1]">
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
