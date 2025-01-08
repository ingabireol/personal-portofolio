import { moonIcon, sunIcon } from '@/assets'
import { useEffect, useRef, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'

const Toggle = ({children}) => {
    useEffect(()=>{
        const darkTheme = reactLocalStorage.get('darkTheme')
        const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme)
        const systemTheme = typeof window !== undefined && window.matchMedia('(prefers-color-scheme: dark)').matches

        if(darkTheme === undefined){
            systemTheme ? addDarkTheme() :removeDarkTheme()
        }
        else{
            darkThemeParsed ? addDarkTheme() : removeDarkTheme();
        }
        
    },[])
    const mainRef =useRef(null)
    const [darkTheme,setDarkTheme] = useState(false)
    const addDarkTheme = () => {
        mainRef.current.classList.add('dark')
        setDarkTheme(true)
        reactLocalStorage.set('darkTheme', true)
    }
    const removeDarkTheme = () => {
        mainRef.current.classList.remove('dark')
        setDarkTheme(false)
        reactLocalStorage.set('darkTheme', false)
    }
  return (
    
    <main ref={mainRef}>
        <div className='bg-zinc-50 dark:bg-zinc-800'>
            <div className='max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr5 overflow-hidden '>
                <button className='fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500'
                    onClick={() => {
                        darkTheme ? removeDarkTheme() : addDarkTheme();
                    }}
                >
                    <span className={`absolute rounded-full block bg-zinc-50 p-1 text-4xl dark:bg-zinc-800`}>{darkTheme ? sunIcon : moonIcon}</span>
                    {/* <span className={`absolute rounded-full bg-zinc-50 p-1 text-4xl ${darkTheme ? 'hidden' : 'block'}`}>{sunIcon}</span> */}
                </button>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Toggle
