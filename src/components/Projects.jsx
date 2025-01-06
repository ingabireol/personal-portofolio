'use client'

import { projectsButton, projectsData } from "@/assets"
import { animate, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"
import Project from "./sub/Project"


const Projects = () => {
    const [tech,setTech] = useState('All')
    const [index,setIndex] = useState(0)
    const prevIndex = useRef(0)
    const buttonRef = useRef([])
    const handleButtonClick = () => {
        animate(buttonRef.current[prevIndex.current],{opacity: 0.5,scale: 1})
        animate(buttonRef.current[index],{opacity: 1, scale: 1.2})
    }
    useEffect(() => {
        handleButtonClick()
        prevIndex.current = index
    },[index])
  return (
    <div className="min-h-screen py-20 px-38">
        <Heading text={'Projects'}/>
        <div className="flex flex-wrap items-center justify-center gap-4 py-10">
            {projectsButton.map((text,i) => (
                <motion.button
                    ref={(el) => {buttonRef.current.push(el)}} key={i}
                    className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
                    initial={{opacity: i === 0 ? 1 : 0.5, scale: i ===0 ? 1.2 : 1}}
                    onClick={() => {
                        setIndex(i)
                        setTech(text)
                    }}
                    >
                    {text}
                </motion.button>
            ))}
        </div>
        <motion.div className="flex flex-wrap items-center justify-center gap-5" layout>
            {projectsData.filter((project) => project.tech.some((item) => tech === 'All' ? true : item === tech) ).map((data, index) => (
                <Project key={index} data={data} index={index}  />
            ))}
        </motion.div>
    </div>
  )
}

export default Projects