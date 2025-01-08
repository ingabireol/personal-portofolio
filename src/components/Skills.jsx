'use client'

import { skillsData } from "@/assets"
import { motion } from 'framer-motion'
import Image from "next/image"
import Heading from "./sub/Heading"

const Skills = () => {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 * i * 0.07,
            },
        }),
        hidden: {
            y: 30,
            opacity: 0,
        },
    }

  return (
    <div className="min-h-screen mt-4 py-20 flex flex-col items-center justify-center" id="skills">
        <Heading text={'Skills'}/>
        <div className="w-full flex flex-wrap justify-between gap-x-8 gap-y-10 lg:gap-y-6">
            {skillsData.map((skill,i) => (
                <motion.div 
                    key={`skill-${i}`} 
                    className="flex gap-x-3 gap-y-3 items-center justify-between bg-zinc-100 border border-yellow-200 rounded-xl px-5 py-2 lg:px-2"
                    variants={variants}
                    custom={i}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{once: true,margin:'50px'}}
                    whileHover={{scale: 1.1}}
                    >
                <Image
                    src={`/Assets${skill.icon}`}
                    height={100}
                    width={100}
                    alt="SKill Image"
                    className="h-auto w-[40px]"
                />
                <p className="text-sm text-gray-600">{skill.name}</p>
            </motion.div>
            ))}
            
        </div>
    </div>
  )
}

export default Skills