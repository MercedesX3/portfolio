"use client";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Image from "next/image";

export default function ImageCarousel({
    images = [],              // array of StaticImport or string
    alt = "Slide",
    className = "",
    aspect = "16/9",
}) {
    const [index, setIndex] = useState(0);
    const len = images.length;

    const go = useCallback(
        (dir) => setIndex((i) => (i + dir + len) % len),
        [len]
    );

    const goTo = (i) => setIndex((i + len) % len);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go]);

    if(len === 0) return null;

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* aspect box so <Image fill /> has height */}
            <div className="relative w-full" style={{ aspectRatio: aspect }}>
                {/* track */}
                <div
                className="absolute inset-0 flex transition-transform duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
                >
                {images.map((src, i) => (
                    <div className="relative w-full shrink-0 bg-gray-500" key={i}>
                    <Image
                        src={src}
                        alt={`${alt} ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 800px, 100vw"
                        priority={i === 0}
                    />
                    </div>
                ))}
                </div>

                {/* subtle edge fades (click-through disabled) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />

                {/* controls on top of the image */}
                <button
                aria-label="Previous image"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-3 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                aria-label="Next image"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-3 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                <ChevronRight className="h-5 w-5" />
                </button>

                {/* dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goto(i)}
                    className={`h-2.5 w-2.5 rounded-full ${
                        i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                    }`}
                    />
                ))}
                </div>
            </div>
        </div>
        // {project.image && (
        //     <div className="mt-5 relative">
        //       <div className="relative w-full h-[220px] rounded-lg overflow-hidden ring-1 ring-black/5">
        //         <Image
        //           src={project.image}
        //           alt={`${project.title} preview`}
        //           fill
        //           className="object-cover"
        //           sizes="(min-width: 768px) 800px, 100vw"
        //           priority
        //         />
        //       </div>
        //       <div className="absolute inset-0 m-auto w-full flex items-center justify-between px-5">
        //         <button 
        //         className=" p-2 items-center justify-center border-2 border-white/90 rounded-full bg-white/70 hover:bg-gray-400 hover:border-gray-400 transition-colors"><ChevronLeft/></button>
        //         <button className=" p-2 items-center justify-center border-2 border-white/90 rounded-full bg-white/70 hover:bg-gray-400 hover:border-gray-400 transition-colors"><ChevronRight/></button>
        //       </div>
        //     </div>
        //   )}
    );
}