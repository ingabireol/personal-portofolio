'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const Load = () => {
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])
  return (
    <motion.div 
        className="w-full fixed h-full flex items-center justify-center top-0 left-0 bg-gradient-to-t from-yellow-50 to-red-50 z-20 "
        initial={{top: 0}}
        animate={{
          top: loading ? '-100%' : 0
        }}
        transition={{
          duration: 0.6
        }}
        >
        <Image
            src={'/Assets/spinner.gif'}
            width={50}
            height={50}
            alt="Spinner Image"
        />
    </motion.div>
  )
}

export default Load
