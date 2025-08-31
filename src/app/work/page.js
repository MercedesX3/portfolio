import Image from "next/image";
import Link from "next/link";
import Scroller from "../../components/Scroller";
import Books from "../../components/Books";

export default function Work() {

    return (
        <div className="flex flex-col min-h-screen pt-8 overflow-x-hidden">
        {/* Make this relative so the absolute pill centers relative to this row */}
        <div className="relative flex flex-row items-center w-full px-8">
        <Link href="\">
          <Image
            src="/Mercedes_Logo.svg"
            alt="Mercedes Logo"
            width={36}
            height={36}
          />
          </Link>
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

            <div className="px-24 pt-32 font-bold text-4xl space-y-16">
                <h1>Learn more about Lumina</h1>
                <div className="flex flex-row space-x-12">
                <Scroller>
                    <div className="h-96 w-[28rem] bg-white rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <video autoPlay playsInline className="h-full"><source type="video/mp4" src="luminaVideo.mp4"/></video>
                    </div>
                    <div className="h-96 w-96 space-y-3 bg-white rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="text-2xl mt-8 ml-8">Your guide to stargazing</p>
                        <img src="/luminamodel.svg" alt="My icon" className="w-[395px] h-[296px]" />
                    </div>
                    <div className="relative h-96 w-80 bg-white rounded-3xl overflow-hidden shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="absolute inset-0 mt-8 ml-8 text-white text-2xl">Find stargazing events near you</p>
                        <img src="/starwallpaper.svg" alt="Star Wallpaper" className="h-full w-full object-cover"/>
                    </div>
                </Scroller>
                </div>

                <h1>Get to know EurekaMart</h1>
                <div className="flex flex-row space-x-12">
                    <div className="relative h-[503px] w-[300px] bg-[#c1bbe1] rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="inset-0 mt-8 ml-8 text-white text-2xl">Your digital refrigerator</p>
                        <img src="/Opening Page.svg" alt="EurekaMart Opening" className="mt-2"/>
                    </div>
                    <div className="relative h-[503px] w-[300px] bg-white rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <img src="https://www.skinnytaste.com/wp-content/uploads/2015/01/Avocado-Toast-with-Egg-7-500x500.jpg" alt="Egg Avocado Toast" 
                        className="h-[503px] w-[300px] rounded-3xl object-cover"/>
                        <div className="absolute inset-0 h-[503px] w-[300px] bg-[#E2DDFF] opacity-60 rounded-3xl object-cover"></div>
                        <h1 className="absolute inset-0 mt-8 ml-8 text-white text-2xl">Personalized recipe recommendations</h1>
                    </div>
                    <div className="h-[503px] w-[300px] bg-[#ECDCF1] rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="inset-0 mt-8 ml-8 text-white text-2xl">Your digital refrigerator</p>
                        <img src="/eurekamartmodel.svg" alt="EurekaMart Opening" className="mt-2" draggable="false"/>
                    </div>
                </div>

                <h1>Finterest</h1>
                <div className="flex flex-row space-x-12">
                    <div className="flex flex-row h-[264px] w-[483px] bg-white rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="inset-0 mt-8 ml-8 text-black text-2xl w-32">Your introduction to stocks</p>
                        <img src="/finterestOpening.svg" alt="Finterest Opening"/>
                    </div>
                    <div className="relative flex flex-row h-[264px] w-[483px] bg-white rounded-3xl shadow-[0px_4px_15px_#D9D9D9] hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out" >
                        <p className="absolute inset-0 mt-8 ml-8 text-black text-2xl w-44">Your interests can align with your future finances</p>
                        <img src="/finterestScreen.svg" alt="Finterest Opening" className="h-fit ml-32 mt-8"/>
                    </div>
                </div>

                <h1>Ongoing Projects</h1>
                <Books/>
            </div>

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
    )
}