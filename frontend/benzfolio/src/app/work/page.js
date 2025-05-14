import Image from "next/image";
import Link from "next/link";

export default function Work() {

    return (
        <div className="grid grid-rows-[36px_1fr_94px] items-center overflow-auto bg-white sm:pt-6 font-sans">
            <div className="relative bg-blue-500 sm:pl-6 sm:pr-6">
            <Link href="/">
            <Image
                src="/Mercedes_Logo.svg"  // Path to your image (must be in the 'public' folder)
                alt="Mercedes Logo" 
                width={36}  // Set width
                height={36} // Set height
                className="absolute" // Tailwind classes for styling
            />
            </Link>
            
            <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-full text-center p-4 flex items-center justify-center space-x-8 rounded-full shadow-[0px_4px_20px_#C1BBE1]">
                <Link className="text-sm text-[#C1BBE1] font-bold " href="/work">Work</Link> {/* This navigates to the new page */}
                <Link className="text-sm font-bold" href="/about">About</Link>
                <a href="/Mercedes_Xiong_Resume_2025.pdf" target="_blank" rel="noopener noreferrer"><p className="text-sm font-bold">Resume</p></a>
            </div>
            </div>

            <div className="px-24 pt-32 font-bold text-4xl space-y-16">
                <h1>Learn more about Lumina</h1>
                <div className="flex flex-row space-x-12">
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
                        <img src="/eurekamartmodel.svg" alt="EurekaMart Opening" className="mt-2"/>
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

                <h1>Archive</h1>
                <div className="flex flex-row">
                    <div className="flex h-[438px] w-[83px] bg-white rounded-lg shadow-2xl items-center justify-center ">
                        <p className="transform -rotate-90 origin-center">MUSERIA</p>
                    </div>
                    <div className="flex h-[438px] w-[83px] bg-white rounded-lg shadow-2xl items-center justify-center">
                        <p className="transform -rotate-90 origin-center">PEECHI</p>
                    </div>
                    <div className="flex h-[438px] w-[83px] bg-white rounded-lg shadow-2xl items-center justify-center">
                        <p className="transform -rotate-90 origin-center">RECSITE</p>
                    </div>
                    <div className="flex h-[438px] w-[83px] bg-white rounded-lg shadow-2xl items-center justify-center">
                        <p className="transform -rotate-90 origin-center">OLYMPICS</p>
                    </div>
                    <div className="ml-12 flex h-[438px] w-[296px] bg-white rounded-lg shadow-2xl items-center justify-center">
                        <p className="">AD</p>
                    </div>
                </div>
            </div>

            <div className="mt-60 shadow-[0px_0px_20px_#C1BBE1]">
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