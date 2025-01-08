'use client'

import { arrowIcons, reviewsData, starIcons } from "@/assets"
import { animate, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"

const Reviews = () => {
    const [index,setIndex] = useState(0)
    const [direction,setDirection] = useState(false)
    const prevIndex = useRef(0)
    const slides = useRef([])
    const myLeftHandler = () => {
        animate(slides.current[index],{x: 0,},{delay:0.2})
        animate(slides.current[prevIndex.current],{x: "-100%"})
    }
    const myRightHandler = () => {
        animate(slides.current[index],{x: 0,},{delay:0.2})
        animate(slides.current[prevIndex.current],{x: "100%"})
    }
    const rightClickHandler = () => {
        animate(slides.current[index],{x: 0}, {delay: .3})
        animate(slides.current[prevIndex.current],{
            scale: index === 0 ? 1 : 0.4,
            rotate: index ===0 ? 0 : index % 2 === 0 ? 10 : -10
        })
    }
    const leftClickHandler = () => {
        animate(slides.current[index],{scale: 1, rotate: 0},{delay: 0.2})
        animate(slides.current[prevIndex.current], {x: '100%'})
    }
    useEffect(() => {
        // direction ? leftClickHandler() : rightClickHandler()
        direction ? leftClickHandler() : rightClickHandler()
        prevIndex.current = index
    },[index])
    // const 
    return (
        <div className="my-20" id="reviews">
            <Heading text={'Reviews'}/>
            <div className="flex flex-col items-center justify-center">
                <motion.div className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1,x: 0,}}
                    viewport={{once:true}}
                    transition={{duration: 0.4}}
                >
                    {reviewsData.map((review,i) => (
                        <motion.div key={i}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 dark:bg-zinc-700 p-14 lg:p-5 rounded-xl"
                            ref={(el) => {slides.current.push(el)}}
                            initial={{x: '100%'}}
                            >

                        <Image src={`/Assets${review.image}`}
                            alt="Review Image"
                            height={100}
                            width={100}
                            className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
                        />
                        <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">{review.name}</h1>
                        <p className="text-lg md:text-sm text-justify font-extralight tracking-wide dark:text-gray-200 text-gray-600 first-letter:pl-2">{review.comment}</p>
                        <div className="flex flex-col gap-y-2">
                            <span className="text-lg text-yellow-600 text-center">{review.stars.reduce((acc,n) => acc+ n,0)}</span>
                            <div className="flex gap-x-2 items-center justify-center text-2xl text-yellow-500">
                                {review.stars.map((star,i) => star ===1 ? (<span key={i}>{starIcons[0]}</span> ) : (<span key={i}>{starIcons[1]}</span>))}
                            </div>
                        </div>
                    </motion.div>
                    ))}
                    
                </motion.div>
                <div className="flex gap-x-4 mt-5 text-yellow-500 text-4xl">
                    <button onClick={() => {
                        setDirection(true)
                        setIndex(index - 1)
                    }}
                        disabled = {index === 0}
                        className='disabled:text-gray-400 disabled:scale-100 hover:scale-150'
                        // className={`${index===0 ? 'text-gray-400':'hover:scale-150'}`}
                    >{arrowIcons[0]}</button>
                    <button onClick={() => {
                        setDirection(false)
                        setIndex(index+1)
                    }}
                        // className={`${index===slides.current.length -1 ? 'text-gray-400':'hover:scale-150'}`}
                        className='disabled:text-gray-400 disabled:scale-100 hover:scale-150'
                        disabled={index === slides.current.length -1}
                    >{arrowIcons[1]}</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews