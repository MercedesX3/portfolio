import Image from "next/image";

export default function Home() {
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
          <p className="text-sm font-bold">Work</p>
          <p className="text-sm font-bold">About</p>
          <p className="text-sm font-bold">Resume</p>
        </div>

      </div>

      <div className="p-4 pt-40 sm:pl-6 sm:pr-6">
        <div className="pb-12">
          <h1 className="text-4xl font-bold py-2">Hey, I'm Mercedes!</h1>
          <p className="font-medium py-2">A full stack developer and aspiring computer science student</p>
          <p className="font-medium">@TheUniversityOfTexasAtDallas</p>
          <div className="flex py-4 space-x-6">
            <Image
              src="/github 1.svg"  // Path to your image (must be in the 'public' folder)
              alt="githubLogo" 
              width={28}  // Set width
              height={28} // Set height
              className="" // Tailwind classes for styling
            />
            <Image
            src="/linkedin 1.svg"  // Path to your image (must be in the 'public' folder)
            alt="linkedinLogo" 
            width={28}  // Set width
            height={28} // Set height
            className="" // Tailwind classes for styling
            />
        </div>
        </div>

        <div className="flex justify-center space-x-24 px-16 pb-32">
          <div className="h-72 w-1/4 rounded-[20px] bg-purple-100">

          </div>
          <div className="h-72 w-1/4 rounded-[20px] mt-12 bg-purple-100">

          </div>
          <div className="h-72 w-1/4 rounded-[20px] mt-24 bg-purple-100">

          </div>
        </div>
      </div>

      <div className="mt-auto shadow-[0px_0px_20px_#C1BBE1]">
        <div className="flex h-[96px] w-full items-center justify-between px-14">
          <p>@2025 Mercedes Xiong</p>
          <div className="flex space-x-6">
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Contact Me</p>    
          </div>      
        </div>
      </div>

    </div>
  );
}
