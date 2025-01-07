'use client'

import { arrowLeftIcon, experienceData } from "@/assets"
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from "next/image"
import { useRef } from "react"
import Heading from "./sub/Heading"


const Experience = () => {
    const date = new Date().getFullYear()
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 95%', 'end end'],
    })
    const springScrollY = useSpring(scrollYProgress, { damping: 5, stiffness: 2, })

    return (
        <div className="relative py-20 px-52" id="experience">
            <Heading text={'Experience & Education'} />
            <Image
                src={'/Assets/education.png'}
                alt="Experience Image"
                width={400}
                height={400}
                className="absolute -top-4 right-40 opacity-70 lg:hidden"
            />
            <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10">
                {experienceData.map((data, i) => (
                    <motion.div
                        key={`id-${i}`}
                        className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative
                 ${i % 2 === 0 ? '-left-[300px] xl:-left-[240px] lg:left-0' : 'left-[300px] xl:left-[240px] lg:left-0'}`}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, stiffness: 50, type: 'spring' }}
                    >
                        <div className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm">
                            <h1 className="text-xl sm:text-lg font-light text-gray-700">{data.title}</h1>
                            <p className="text-gray-800">
                                <span className="block font-light">Education</span>
                                <span className="block pl-2 font-extralight">{data.education}</span>
                            </p>
                            <div className="text-gray-800">
                                <span className="font-light">Experience: </span>
                                <ul className="pl-2">
                                    {data.experience.map((exp, j) => (
                                        <li key={j} className="my-1 font-extralight">{exp}</li>
                                    ))}
                                </ul>
                            </div>
                            <span className={`absolute top-20 -translate-y-1/2 text-red-300 ${i % 2 === 0 ? 'left-full rotate-180' : 'right-full'}`}>{arrowLeftIcon}</span>
                        </div>
                        <div className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light z-10 bg-white -translate-y-1/2 ${i % 2 === 0 ? '-translate-x-1/2 left-full lg:left-1/2' : 'translate-x-1/2 right-full lg:right-1/2'}`}>{date - experienceData.length + i + 1}</div>
                    </motion.div>
                ))}
                <motion.div
                    className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: springScrollY }}
                ></motion.div>
            </div>
        </div>

    )
}

export default Experience