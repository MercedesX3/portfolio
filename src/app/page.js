"use client";
import Image from "next/image";
import Link from "next/link";
import HorizontalScroller from "../components/HorizontalScroller";
import RightScrollBand from "../components/RightScrollBand";
import { useState, useEffect } from "react";

import ArcherHomePage from "../../public/homePics/HeroPageArcher.png"
import LuminaPage from "../../public/homePics/LuminaScreens.png"
import BookMarked from "../../public/homePics/Bookmarked.png"
import EurekaMart from "../../public/homePics/EurekeMart.png"
import Finterest from "../../public/homePics/OpeningScreenFinterest.png"
import Windle from "../../public/homePics/WindleScreen.png"
import { MoveRight, Wind } from "lucide-react";
import ProjectModal from "../components/ui/projectModal"

import ArcherHeroPage from "../../public/archerPhotos/Hero Page.png"
import ArcherExplorePage from "../../public/archerPhotos/Explore Page.png"
import ArcherSignUpPage from "../../public/archerPhotos/Sign Up Page.png"
import ArcherComponents from "../../public/archerPhotos/archerComponents.png"

import LuminaHeroPage from "../../public/luminaPhotos/BACKGROUND.png"
import LuminaSignUpPage from "../../public/luminaPhotos/SIGNUP/SIGNIN SCREEN.png"
import LuminaCalendarPage from "../../public/luminaPhotos/CALENDAR SCREEN.png"
import LuminaEventsPage from "../../public/luminaPhotos/EVENTS SCREEN.png"

import FinterestHeroPage from "../../public/finterestPhotos/openingScreen.png"
import FinterestSignInPage from "../../public/finterestPhotos/Sign In Page.png"
import FinterestInterestPage from "../../public/finterestPhotos/Interest Page.png"
import FinterestExplorePage from "../../public/finterestPhotos/Explore Screen.png"

import EureakaMartHeroPage from "../../public/eurekamartPhotos/Opening Page.png"
import EurekaMartLoginPage from "../../public/eurekamartPhotos/Login Page.png"
import EurekaMartHomePage from "../../public/eurekamartPhotos/Home Screen.png"
import EurekaMartItemsPage from "../../public/eurekamartPhotos/Items Screen.png"
import EurekaMartSelectedRecipePage from "../../public/eurekamartPhotos/Selected Recipe Screen.png"

import WindleLandingPage from "../../public/windlePhotos/Landing Page.png"
import WindleLoginPage from "../../public/windlePhotos/Login Page.png"
import WindleComponents from "../../public/windlePhotos/windleComponents.png"

import BookmarkedHeroPage from "../../public/bookmarkedPhotos/Hero Page.png"
import BookmarkedComponents from "../../public/bookmarkedPhotos/bookmarkedComponents.png"
import BookmarkedLoginPage from "../../public/bookmarkedPhotos/Login Page.png"
import BookmarkedDiscoverPage from "../../public/bookmarkedPhotos/Discover Page.png"
import BookmarkedListsAndTrends from "../../public/bookmarkedPhotos/Lists & Trends Page.png"
import BookmarkedYourShelfPage from "../../public/bookmarkedPhotos/Your Shelf Page.png"



export default function Home() {
  const [offset, setOffset] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Lock body scroll while modal is open
    if (selectedProject) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  const openProject = (proj) => setSelectedProject(proj);
  const closeProject = () => setSelectedProject(null);


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

        <div className="relative w-full mt-10 py-20 overflow-hidden">
          {/* animated gradient background */}          <div className="absolute inset-0 bg-gradient-to-r from-[#C1BBE1] via-[#ECDCF1] to-[#a0a5fe] bg-[length:200%_200%] animate-[gradientMove_8s_ease_infinite]" />
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
            Designer & Front End Developer @ ACM Dev
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
              <div className="group hover:rotate-6 transition-transform"
                role="button"
                tabIndex={0}
                onClick={()=>openProject({
                  id: "archer",
                  title: "Archer",
                  description: "The Dictionary for Every Architect",
                  image: ArcherHomePage, // uses your imported image
                  techStack: ["Next.js", "React", "Tailwind", "Firebase"],
                  purpose:
                    "The pocket spellbook of architecture - a living dictionary where blueprints meets vocabulary. Archer is built to allow users to browse terms based on category, era, or style. The visual collections that are built on archer are here to inspire useers with architectural examples, sketches, or reference images.",
                  date: "2025",
                  challenges: ["Balanced authentic vintage newspaper layout design with contemporary usability standards",
                  "Difficulty with handling visual clutters when displaying multiple terms with images"],
                  learnings: ["Implemented asynchronous authentication flows using onAuthStateChanged listeners to handle real-time user session updates and loading states",
                    "Created scalable design patterns using Tailwind CSS that adapted vintage newspaper aesthetics across device sizes"
                  ],
                  githubUrl: "https://github.com/MercedesX3/archer", // update if you have it
                  photosForCarousel: [ArcherComponents, ArcherHeroPage, ArcherSignUpPage, ArcherExplorePage],
                })}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
              >
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
              <div className="group hover:-rotate-6 transition-transform text-right"
              role="button"
              tabIndex={0}
              onClick={()=>openProject({
                id: "lumina",
                title: "Lumina",
                description: "Your Space App for Stagazing Experiences",
                image: LuminaPage, // uses your imported image
                techStack: ["Expo", "React Native", "AWS Event Bridge", "AWS Lambda", "DynamoDB"],
                purpose:
                  "A mobile application for astronomy enthusiasts that intelligently combines real-time weather data, celestial event tracking, and location-based recommendations to optimize stargazing experiences.",
                date: "2024",
                challenges: ["Designed and implemented scalable AWS serverless infrastructure using Lambda functions and DynamoDB to handle variable user loads while maintaining cost-effective cloud resource utilization and real-time data processing",
                  "Solved complex UI/UX challenges for displaying large volumes of astronomical data (weather forecasts, celestial events, moon phases, stargazing sites) without overwhelming users through intuitive information design"],
                learnings: ["Developed proficiency in cross-platform mobile development using React Native and NativeWind styling",
                  "Learned serverless computing principles using AWS Amplify, Lambda functions, and DynamoDB for scalable data storage and processing, implementing efficient API Gateway patterns and cloud-native development practices"
                ],
                githubUrl: "https://github.com/MercedesX3/Lumina", // update if you have it
                photosForCarousel: [LuminaHeroPage, LuminaSignUpPage, LuminaCalendarPage, LuminaEventsPage],
              })}
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}>
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
              <div className="group hover:rotate-3 transition-transform "
                role="button"
                tabIndex={0}
                onClick={()=>openProject({
                  id: "finterest",
                  title: "Finterest",
                  description: "Use your interests to invest in your finances",
                  image: Finterest, // uses your imported image
                  techStack: ["Expo", "React Native", "Express", "MongoDB"],
                  purpose:
                    "Historically, finance education and the stock market have been completely male dominated. This has caused for the lack of support and resources for women to start or continue their investment in stocks. Alongside this, is the lack of confidence many women face in not knowing what exactly to invest and how to do it safely. That's why Finterest was created: a way to invest in your interests and make better financial decisions!",
                  date: "2024",
                  challenges: ["Deciding how to display a complex subject like stock investment in a way for people to easily understand", "Used plain language instead of legal jargon so users can easily navigate the application"],
                  learnings: ["Improved understandings on how users may view financial subjects and how to display such subjects","Used trending mobile animations and interaction features to simplify user's experience with mobile application"],
                  githubUrl: "https://github.com/MercedesX3/Finterest",
                  photosForCarousel: [FinterestHeroPage, FinterestSignInPage, FinterestExplorePage, FinterestInterestPage]
                })}
                >
                <div className="relative w-[85vh] h-[35vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
                  <Image
                    src={Finterest}
                    alt="Description of image"
                    fill                // 🔑 tells Next.js to fill the parent
                    className="object-cover" // or "object-cover" to crop & fill
                    sizes="(min-width: 768px) 700px, 100vw"
                  />
                </div>
                <h1 className="text-lg font-bold">Finterest</h1>
                <h1 className="text-lg">Use your interests to invest in your finances</h1>
              </div>
              <div className="group hover:-rotate-6 transition-transform text-right"
              role="button"
              tabIndex={0}
              onClick={()=>openProject({
                id: "eurekaMart",
                title: "EurekaMart",
                description: "Your digital refrigerator and cookbook in one",
                image: EurekaMart, // uses your imported image
                techStack: ["Expo", "React Native", "Express", "MongoDB"],
                purpose:
                  "Build a clean, fast reference for architectural terminology with delightful UX.",
                date: "2024",
                challenges: "Navigation IA, fast search, and content modeling.",
                learnings: "Design systems, incremental static regeneration.",
                githubUrl: "https://github.com/MercedesX3/Finterest",
                photosForCarousel: [EureakaMartHeroPage, EurekaMartLoginPage, EurekaMartHomePage, EurekaMartItemsPage]
              })}>
                <div className="relative w-[60vh] h-[40vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
                  <Image
                    src={EurekaMart}
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
              <div className="group hover:rotate-6 transition-transform text-left"
                role="button"
                tabIndex={0}
                onClick={()=>openProject({
                  id: "windle",
                  title: "Windle",
                  description: "Forecasting Market Movements Using Weather Intelligence",
                  image: Windle, // uses your imported image
                  techStack: ["TailwindCSS", "React"],
                  purpose:
                    "Build a clean, fast reference for architectural terminology with delightful UX.",
                  date: "2024",
                  challenges: "Navigation IA, fast search, and content modeling.",
                  learnings: "Design systems, incremental static regeneration.",
                  githubUrl: "https://github.com/MercedesX3/Windle",
                  photosForCarousel: [WindleLandingPage, WindleComponents, WindleLoginPage]
                })}
              >
                  <div className="relative w-[60vh] h-[30vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
                    <Image
                      src={Windle}
                      alt="Description of image"
                      fill                // 🔑 tells Next.js to fill the parent
                      className="object-cover" // or "object-cover" to crop & fill
                      sizes="(min-width: 768px) 700px, 100vw"
                    />
                  </div>
                  <h1 className="text-lg font-bold">Windle</h1>
                  <h1 className="text-lg">Forecasting Market Movements Using Weather Intelligence</h1>
                </div>
              <div className="group hover:-rotate-6 transition-transform text-right"
                  role="button"
                  tabIndex={0}
                  onClick={()=>openProject({
                    id: "bookmarked",
                    title: "Bookmarked",
                    description: "Where stories live, lists thrive, and readers find their next adventures",
                    image: BookMarked, // uses your imported image
                    techStack: ["TailwindCSS", "React", "AWS Lambda", "API Gateway", "DynamoDB", "EventBridge"],
                    purpose:
                      "Build a clean, fast reference for architectural terminology with delightful UX.",
                    date: "2024",
                    challenges: "Navigation IA, fast search, and content modeling.",
                    learnings: "Design systems, incremental static regeneration.",
                    githubUrl: "https://github.com/MercedesX3/Bookmarked",
                    photosForCarousel: [BookmarkedHeroPage, BookmarkedComponents, BookmarkedLoginPage, BookmarkedDiscoverPage, BookmarkedListsAndTrends, BookmarkedYourShelfPage]
                  })}>
                <div className="relative w-[80vh] h-[40vh] border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300">
                  <Image
                    src={BookMarked}
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

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProject} />
        )}
    </div>
  );
}