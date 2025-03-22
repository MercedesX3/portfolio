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
                <p className="text-sm font-bold">Resume</p>
            </div>
            </div>
        </div>
    )
}