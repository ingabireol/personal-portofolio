'use client'

import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "@/assets"
import Image from "next/image"
import Achievements from "./sub/Achievements"
import Heading from "./sub/Heading"

const About = () => {
  return (
    <div className="min-h-screen px-52 flex flex-col items-center justify-center py-10" id="about">
        <Heading text={'About Me'}/>
        <div className="w-full flex items-center justify-between md:justify-center">
            <Image src={'/Assets/about-me.png'}
                alt="About Image"
                width={400}
                height={400}
                className="w-[300px] lg:w-[200px] md:hidden"
                />
            <div className="relative max-w-[800px]  bg-zinc-100 rounded-xl p-5 text-justify">
                <span className="absolute -left-6 top-36 text-2xl scale-[2.5] text-zinc-100">{arrowLeftIcon}</span>
                <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text[16px] sm:text-[14px]">{aboutText}</p>
                <a href="/nick-cv.pdf" download="" className="flex items-center border border-gray-300 text-zinc-100 bg-red-400 gap-x-2 px-2 py-2 rounded-3xl mt-3 w-max hover:bg-red-500 transition-colors">
                    <span>Download cv</span>
                    <span>{downloadIcon}</span>
                </a>
            </div>
        </div>
        <div className="flex w-full mt-20  items-center justify-between gap-x-7 gap-y-10 flex-wrap">
            {aboutData.map((item,i) => (
                <Achievements key={i} title={item.title} amount={item.amount}>{item.icon}</Achievements>
            ))}
        </div>
    </div>
  )
}

export default About