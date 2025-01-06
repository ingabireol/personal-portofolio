import { motion, useMotionValue } from "framer-motion";

const Achievements = ({title,amount,children}) => {
    const number = useMotionValue(0)
    const count = (amount) => {
        let i = 0;
        const updateCount = () => {
            let timeOut
            if(i <= amount){
                number.set(i++)
                timeOut = setTimeout(updateCount, 0)
            }
            else {
                clearTimeout(timeOut)
            }
        }
        updateCount()
    }
  return (
    <div className="flex gap-x-3 items-end">
        <span className="flex text-4xl lg:text-2xl text-gray-300 ">{children}</span>
        <div className="flex flex-col gap-y-2">
            <motion.span
                className="text-yellow-500 text-2xl lg:text-xl tracking-wide"
                whileInView={() => count(amount)}
                viewport={{once: true}}

            >{number}</motion.span>
            <span className="text-sm text-gray-700">{title}</span>
        </div>
    </div>
  )
}

export default Achievements