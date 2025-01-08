'use client'
import { copyRightIcon, navbarData } from "@/assets"

const Navbar = ({id}) => {
    return (
        <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-5 z-10">
            <a href="#home">
                <span className="text-3xl font-semibold  text-red-400 ">I</span>.
                <span className="block w-min rotate-90 origin-bottom text-[12px] dark:text-white font-semibold">Olivier</span>
            </a>
            <div className="flex flex-col gap-y-3 sm:gap-y-2">
                {navbarData.map((data,i) => (
                    <a href={`/#${data.id}`} className="group flex flex-col items-center gap-y-2" key={i} >
                    <span className={`text-2xl group-hover:scale-125 transition-all ${id === data.id ? 'text-red-500 scale-125':'text-yellow text-yellow-600'}`}>{data.icon}</span>
                    <span className={`text-[10px] tracking-wide group-hover:translate-x-0 group-hover:opacity-100 opacity-0 transition-all duration-300 text-center dark:text-white ${i %2 ===0 ? '-translate-x-2' : 'translate-x-2'} ${data.id === id && 'opacity-100 translate-x-0'}`}>{data.name}</span>
                </a>

                ))}
                
            </div>
            <p className="flex items-center justify-center text-[13px] text-gray-500 dark: mt-6">
                <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200">{copyRightIcon} {new Date().getFullYear()} - 2024</span>
            </p>
        </div>
    )
}

export default Navbar
