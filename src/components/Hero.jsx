 'use client'
import { heroIcons } from "@/assets/index"
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from "next/image"
import { useState } from "react"

 
 const Hero = () => {
  const [windowOffset,setWindowOffset] = useState({innerWidth: 0, innerHeight:0})
  const [mouseEnter,setMouseEnter] = useState(false)
  const [buttonHover,setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const handleMouseMove = (e) => {
    // alert("mouse move")
    const {clientX, clientY} = e
    x.set(clientX)
    y.set(clientY)
    // console.log(clientX,clientY,x,y) 
    // console.log('y: '+y)
  }
  const handleMouseEnter = (e) => {
    // alert("mouse enter");
    setWindowOffset({innerWidth: window.innerWidth,innerHeight:window.innerHeight})
    setMouseEnter(true)
  }
  const  {innerWidth, innerHeight} = windowOffset
  // console.log(x,y);
  const xSpring = useSpring(x,{stiffness:800,damping: 10})
  const ySpring = useSpring(y,{stiffness:100,damping: 10})


  const rotateY = useTransform(xSpring,[0,innerHeight],[10,-50])
  const rotateX = useTransform(ySpring,[0,innerWidth],[-30,30])
  return (
    
    <div 
      id="home"
      className="h-screen flex flex-col items-center justify-center gap-2 py-10" 
      onMouseMove={handleMouseMove} 
      onMouseEnter={handleMouseEnter}>
      <motion.div 
        className=""
        style={{
          rotateX: mouseEnter ? rotateX: 0,
          rotateY: mouseEnter ? rotateY : 0,
          transition: '0.1s'
        }}

      >
          <Image src={'/Assets/person.png'}
            width={300}
            height={300}
            alt="Profile Picture"
            priority="true"
            className="h-auto w-[150px]"
          />
          <motion.span 
            className="absolute top-[20%] left-[50%] font-light text-white"
            initial={{scale: 0}}
            animate={{opacity: buttonHover ? 0: 1,
                      scale: buttonHover ? 2: 0,
                      y: buttonHover ? -40: 0
            }}
            transition={{opacity: {delay: 0.4}}}
            >Hi</motion.span>
      </motion.div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl sm:text-2xl font-bold tracking-wide text-gray-500 capitalize">My Name is Ingabire Olivier &</h1>
        <p className="text-lg text-gray-400 text-center tracking-wider capitalize">I like Creativity 🙄</p>
        <div className="flex items-center mx-auto gap-x-4 text-3xl text-yellow-600 justify-center sm:text-2xl">
          {heroIcons.map((icon,i) =>(
            <a href="#" key={icon.key} className="hover:bg-red-400 rounded-lg transition-colors hover:text-white">{icon}</a>
          ))}
        </div>
        <button 
          className="w-max px-4 py-1 bg-red-400 text-center self-center rounded-lg hover:bg-red-500 text-white capitalize transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          >Talk to me</button>
      </div>
    </div>
  )
}

export default Hero