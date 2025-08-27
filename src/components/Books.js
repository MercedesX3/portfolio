"use client";

import React from "react";

export default function Books() {
  const projects = [
    {
      name: "LIVELI",
      href: "https://github.com/anushap6571/Liveli",
      hoverColor: "#FF9500",
      padding: "py-16",
      rotate: true,
    },
    {
      name: "Peechi",
      href: "https://github.com/acmutd/PeechiPortal",
      hoverColor: "#AA4235",
      padding: "py-16",
      rotate: true,
    },
    {
      name: "Bookmarked",
      href: "https://www.figma.com/design/iwH36ZXhrEFh198MAN071x/Bookmarked?node-id=0-1&t=k8LgHGPwenJb48Ji-1",
      hoverColor: "#DBC2CA",
      padding: "py-28",
      rotate: true,
    },
    {
      name: "Portfolio",
      href: "https://github.com/MercedesX3/portfolio",
      hoverColor: "#C1BBE1",
      padding: "py-20",
      rotate: true,
    },
    {
      name: "WINDLE",
      href: "https://www.figma.com/design/vSuEaFV1eIqmKiKPITK5la/Windle?node-id=0-1&t=JYQr4jFQ7vSRET6R-1",
      hoverColor: "#4D8ACC",
      padding: "py-20",
      rotate: true,
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
                  bg-white text-black group-hover:[color:${project.hoverColor}]
                  ${project.padding}
                  w-[83px] h-[438px] hover:w-[296px] hover:scale-105`}
              >
                <p
                  className={`font-bold transition-transform duration-300
                    ${project.rotate ? "-rotate-90 group-hover:rotate-0" : ""}`}
                >
                  {project.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


