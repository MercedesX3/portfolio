"use client";

import React from "react";

import WindleBookCover from "../../public/covers/WindleBookCover.png"
import PortfolioBookCover from "../../public/covers/PortfolioBookCover.png"
import BookmarkedBookCover from "../../public/covers/BookmarkedBookCover.png"
import PeechiGamesBookCover from "../../public/covers/PeechiGamesBookCover.png"
import LiveliBookCover from "../../public/covers/LiveliBookCover.png"
import { Book } from "lucide-react";
import { Port_Lligat_Sans } from "next/font/google";
import Image from "next/image";


export default function Books() {
  const projects = [
    {
      name: "LIVELI",
      href: "https://github.com/anushap6571/Liveli",
      hoverColor: "#FF9500",
      padding: "py-16",
      rotate: true,
      shortTitle: "LVLI",
      cover: LiveliBookCover,
      description: "Your shared albums have now gone live",
      color: "#000",
    },
    {
      name: "Peechi",
      href: "https://github.com/acmutd/PeechiPortal",
      hoverColor: "#AA4235",
      padding: "py-16",
      rotate: true,
      shortTitle: "PCG",
      cover: PeechiGamesBookCover,
      description: "Netflix-inspired portal for ACM Peechi Games",
      color: "#FFF",
    },
    {
      name: "Bookmarked",
      href: "https://www.figma.com/design/iwH36ZXhrEFh198MAN071x/Bookmarked?node-id=0-1&t=k8LgHGPwenJb48Ji-1",
      hoverColor: "#DBC2CA",
      padding: "py-28",
      rotate: true,
      shortTitle: "BKD",
      cover: BookmarkedBookCover,
      description: "Intelligent recommendations for all book lovers",
      color: "#FFF",
    },
    {
      name: "Portfolio",
      href: "https://github.com/MercedesX3/portfolio",
      hoverColor: "#C1BBE1",
      padding: "py-20",
      rotate: true,
      shortTitle: "PTFL",
      cover: PortfolioBookCover,
      description: "Check out the designs behind this website",
      color: "#000",
    },
    {
      name: "WINDLE",
      href: "https://www.figma.com/design/vSuEaFV1eIqmKiKPITK5la/Windle?node-id=0-1&t=JYQr4jFQ7vSRET6R-1",
      hoverColor: "#4D8ACC",
      padding: "py-20",
      rotate: true,
      shortTitle: "WD",
      cover: WindleBookCover,
      description: "Forecast market movements using weather intelligence",
      color: "#FFF",
    },
  ];

  return (
    <div className="p-6">

      {/* Scrollable Horizontal Project Cards */}
      <div className="overflow-x-auto whitespace-nowrap mt-4">
        <div className="flex">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300 shrink-0"
              style={{ ["--hover"]: project.hoverColor }}
            >
              <div
                className={`flex ${
                  project.rotate ? "items-end" : "items-center"
                } justify-center rounded-lg shadow-2xl cursor-pointer transition-all duration-300 ease-in-out
                  bg-white text-black group-hover:flex-col group-hover:[color:${project.hoverColor}]
                  ${project.padding}
                  group-hover:items-start
                  p-6
                  w-[83px] h-[438px] hover:w-[296px] hover:scale-105`}
              >
                <p
                  className={`font-bold transition-transform duration-300
                    ${project.rotate ? "-rotate-90 group-hover:rotate-0" : ""}`}
                >
                  {project.name}
                </p>
                {project.rotate && (
                  <div className="relative w-full flex-1 min-h-72">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.cover}
                        alt={`${project.name} cover`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h1 className="absolute hidden group-hover:block -top-4 text-8xl font-semi" style={{ color: project.color }}>{project.shortTitle}</h1>
                    <h1 className="hidden group-hover:block text-sm font-semi w-full max-w-full whitespace-normal break-words text-pretty">{project.description}</h1>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


