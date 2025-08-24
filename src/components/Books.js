"use client";

import React, { useState } from "react";

export default function Books() {
  const [selected, setSelected] = useState(null);

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
      padding: "py-0", // for center alignment
      rotate: false,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Ongoing Projects</h1>

      {/* Scrollable Horizontal Project Cards */}
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex gap-4">
          {projects.map((project, index) => {
            const isSelected = index === selected;

            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <div
                  onClick={(e) => {
                    e.preventDefault(); // prevent link click if just selecting
                    setSelected(isSelected ? null : index);
                  }}
                  className={`flex ${
                    project.rotate ? "items-end" : "items-center"
                  } justify-center rounded-lg shadow-2xl cursor-pointer transition-all duration-300 ease-in-out
                    bg-white hover:text-[${project.hoverColor}]
                    ${project.padding}
                    ${
                      isSelected
                        ? "w-[296px] h-[438px] scale-105"
                        : "w-[83px] h-[438px]"
                    }`}
                >
                  <p
                    className={`${
                      project.rotate ? "transform -rotate-90 origin-center" : ""
                    } font-medium`}
                  >
                    {project.name}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
