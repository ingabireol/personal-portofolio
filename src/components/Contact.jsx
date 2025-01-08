'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import Heading from "./sub/Heading"

const Contact = () => {
    return (
        <div className="min-h-screen py-20" id="contact">
            <Heading text={'Get In touch'} />
            <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-y gap-x-20 lg:gap-x-0 gap-y-20">
                <motion.div
                    initial={{opacity:0,y: 150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration: 0.4}}
                    viewport={{once: true}}
                >
                    <Image
                        src={'/Assets/contact.gif'}
                        alt="Contact Image"
                        width={400}
                        height={400}
                        className="w-[400px] rounded-md opacity-80"
                    />
                </motion.div>
                <motion.form
                    className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
                    initial={{opacity:0,x: 150}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration: 0.4}}
                    viewport={{once: true}}
                    >
                    <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                        <input type="text" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Your name"/>
                        <input type="email" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Your Email" />
                    </div>
                    <input type="text" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none" placeholder="Your Subject"/>
                    <textarea name="" id="" className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none " placeholder="Write to Me....."></textarea>
                    <input type="submit" className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm font-light tracking-wider text-gray-500 outline-none hover:bg-yellow-500 transition-colors cursor-pointer" value='Send Message'/>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact
