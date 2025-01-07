'use client'
import { QuestionArrow } from "@/assets"
import { motion } from "framer-motion"
import { useState } from "react"
const Question = ({question,index}) => {
    const variants =  {
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i* 0.07
            }
        }),
        hidden: {
            opacity: 0,
            x: -30
        }
    }
    const [show,setShow] = useState(false)
  return (
    <motion.li 
        className="border border-yellow-500 p-1 rounded-lg"
        onClick={() => {setShow(!show)}}
        custom={index}
        viewport={{margin: '50px',once: true}}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        >
        <h1 className={`flex items-center text-xl font-extralight text-yellow-600 tracking-wide cursor-pointer hover:text-yellow-500 ${show ? 'border-b border-gray-100 text-yellow-500 ':'text-gray-700'}`}>
        <motion.span
            animate={{
                rotate: show ? 180: 0,
            }}
        >{QuestionArrow}
        </motion.span>
        <span>{question.question}</span>
        </h1>
      <motion.p
        className="box-border origin-top pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3"
        animate={{
            opacity: show ? 1: 0,
            height: show ? 'auto' : 0,
            scaleY: show ? 1: 0,
        }}
        transition={{
            duration: 0.1,
            type: 'spring',
            stiffness: show ? 200 : 50,
            opacity:{delay: show ? 0.2 : 0}

        }}
        >
        {question.answer}
        </motion.p>
    </motion.li>
  )
}

export default Question
