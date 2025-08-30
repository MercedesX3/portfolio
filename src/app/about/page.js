"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

export default function About() {
    const [showModal, setShowModal] = useState(null);
     
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

            <div>
                <div className="flex flex-row mt-32 h-[64vh] px-96 gap-16">
                    <div className="relative h-full flex-1">
                        <Image
                            src="/Rectangle 24.svg"
                            alt="Mercedes Portrait"
                            fill
                            className="object-cover rounded-3xl"
                            draggable="false"
                        />
                    </div>
                    <div className="h-full flex flex-col justify-between flex-1 space-y-4">
                        <h1 className="font-semibold text-xl">Hi! Thank's so much for coming to check me out! My name is Mercedes Xiong, a current CS major @UTD and an aspiring full stack developer!</h1>
                        <h1 className="font-semibold text-xl">I love trying to understand how companies design their websites and apps and believe that life is greater with hash tables (most of the time) </h1>
                        <h1 className="font-semibold text-xl">In my free time, you can find me reading, sketching buildings, or listening to indie music or the 80s or 70s or 60s (the list goes on and on).</h1>
                    </div>
                </div>
                <div className="mx-96 mt-16 mb-16">
                    <h1 className="font-bold text-3xl">Interests</h1>
                    <div className="flex flex-row max-h-full justify-between h-40 grid-cols-3 gap-4 mt-8">
                        <div
                        onClick={() => setShowModal('architecture')}
                        className="relative bg-[#E2DDFF] rounded-xl flex justify-center items-center p-10 hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out cursor-pointer">
                        <Image
                            src="/Classical Building.svg"
                            alt="Mercedes Portrait"
                            width={200}
                            height={200}
                            className="object-cover h-full w-full"
                            draggable="false"
                        />
                        </div>
                        <div onClick={() => setShowModal('books')} className="relative bg-[#E5E3EF] rounded-xl flex justify-center items-center p-10 hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out cursor-pointer">
                        <Image
                            src="/Books.svg"
                            alt="Mercedes Portrait"
                            width={200}
                            height={200}
                            className="object-cover h-full w-full"
                            draggable="false"
                        />
                        </div>
                        <div onClick={() => setShowModal('music')} className="relative bg-[#D8D1FF] rounded-xl flex justify-center items-center p-10 hover:shadow-[0px_6px_25px_#C5C5C5] transition-shadow duration-200 ease-in-out cursor-pointer">
                        <Image
                            src="/Headphone.svg"
                            alt="Mercedes Portrait"
                            width={200}
                            height={200}
                            className="object-cover h-full w-full"
                            draggable="false"
                        />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal moved outside of the clickable div */}
            {showModal && (
                <div 
                    className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
                    onClick={() => setShowModal(false)}
                >
                    {showModal == 'architecture' && (
                        <div className="bg-white rounded-xl px-16 py-10 max-w-[600px] w-full mx-4" onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className="text-left text-2xl font-semibold">Oh the Places I'll Go</h1>
                                <div className="flex flex-row gap-4">
                                    <Image src="/disks/Sparkler.png" alt="CD 1" width={30} height={30} draggable="false" />
                                    <Image src="/disks/Globe Showing Americas.png" alt="CD 1" width={30} height={30} draggable="false" />
                                    <Image src="/disks/Bridge At Night.png" alt="CD 1" width={30} height={30} draggable="false" />
                                </div>
                            </div>
                            <h1 className="mt-4">Work will be added soon :(</h1>
                        </div>
                    )}
                    {showModal == 'books' && (
                        <div className="bg-white rounded-xl px-16 py-10 max-w-[600px] w-full mx-4" onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row gap-4">
                                    <h1 className="text-left text-2xl font-semibold">The Book Shelf</h1>
                                    <Image
                                    src="/disks/Open Book.png"
                                    alt="Open Book"
                                    height={30}
                                    width={30}
                                    className=""
                                    draggable="false"
                                    />
                                </div>
                                <button 
                                        onClick={() => setShowModal(false)}
                                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                                    >
                                        x
                                    </button>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="">
                                    <div className="flex justify-center items-center">
                                        <Image src="/books/image 16.png" alt="Description" width={200} height={300} className="max-w-full h-auto"/>
                                    </div>
                                    <h1 className="mt-2 font-bold text-sm">The Seven Husbands of Evelyn Hugo</h1>
                                    <div className="mt-2 flex flex-row gap-2">
                                        <div className="bg-green-600 font-bold text-sm rounded-lg text-white px-4">Historical</div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex justify-center items-center">
                                        <Image src="/books/image 28.png" alt="Description" width={200} height={300} className="max-w-full h-auto"/>
                                    </div>
                                    <h1 className="mt-2 font-bold text-sm">Hamnet</h1>
                                    <div className="mt-2 flex flex-row gap-2">
                                        <div className="bg-yellow-500 font-bold text-sm rounded-lg text-white px-4">Lyrical</div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex justify-center items-center">
                                        <Image src="/books/image 1.png" alt="Description" width={200} height={270} className="max-w-full h-auto"/>
                                    </div>
                                    <h1 className="mt-2 font-bold text-sm">Astronaut</h1>
                                    <div className="mt-2 flex flex-row gap-2">
                                        <div className="bg-blue-500 font-bold text-sm rounded-lg text-white px-4">Bittersweet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {showModal == 'music' && (
                    <div 
                        className="bg-white rounded-xl px-16 py-10 max-w-[600px] w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col gap-4 items-start">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-left text-2xl font-semibold mb-4">Golden Tracks</h1>
                                <button 
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-500 hover:text-gray-700 text-xl font-bold mb-4"
                                >
                                    x
                                </button>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-row h-[100px] items-center">
                                    <Image
                                        src="/disks/1.png"
                                        alt="CD 1"
                                        width={100}
                                        height={100}
                                        draggable="false"
                                        className="mr-8"
                                    />
                                    <div >
                                        <p className="font-semibold text-xl">The Night We Met</p>
                                        <p className="font-semibold">Lord Huron</p>
                                    </div>
                                </div>
                                <div className="flex flex-row h-[100px] items-center">
                                    <div className="">
                                        <p className="font-semibold text-xl">The View Between the Villages</p>
                                        <p className="font-semibold">Noah Kahan</p>
                                    </div>
                                    <Image
                                        src="/disks/2.png"
                                        alt="CD 2"
                                        width={100}
                                        height={100}
                                        draggable="false"
                                        className="ml-8"
                                    />
                                </div>
                                <div className="flex flex-row h-[100px] items-center">
                                    <Image
                                        src="/disks/3.png"
                                        alt="CD 3"
                                        width={100}
                                        height={100}
                                        draggable="false"
                                        className="mr-8"
                                    />
                                    <div >
                                        <p className="font-semibold text-xl">Have You Ever Seen The Rain</p>
                                        <p className="font-semibold">Creedence Clearwater Revival</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            )}

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
    )
}