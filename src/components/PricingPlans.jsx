import { checkIcon, pricingPlans } from '@/assets'
import Heading from './sub/Heading'
const PricingPlans = () => {
    return (
        <div className='py-20 px-48'>
            <Heading text={'Pricing Plans'} />
            <div
                className='h-full flex lg:flex-col items-center justify-between gap-8'
            >
                {pricingPlans.map((plan, index) => (
                    <div key={index}
                        className={`sm:w-[250px] bg-zinc-50 flex flex-col gap-6 p-6 border border-red-400 rounded-xl text-gray-600
            ${index === 1 ? 'w-[320px] xl:w-[280px] bg-white' : 'w-[270px] xl:w-[250px]'} hover:scale-105 transition-all`}
                       /*  initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, delay: index * 0.2, scale: { duration: 0.15 } }}
                        viewport={{ once: true }} */
                    >
                        <h1 className='text-3xl lg:text-lg font-light tracking-wide text-center'>{plan.title}</h1>
                        <span className='text-2xl lg:text-xl text-center'>{plan.pricing}</span>
                        <ul className='flex flex-col gap-y-2'>
                            {plan.features.map((feature, i) => (
                                <div className='flex items-center gap-x-3' key={i}>
                                    <span className={`text-2xl ${index === 1 ? 'text-red-500' : 'text-yellow-500'} `}>{checkIcon}</span>

                                    <li className='text-[15px] font-light tracking-wide'>{feature}</li>
                                </div>
                            ))}
                        </ul>
                        <p className='text-sm font-light text-center'>
                            <span className='font-semibold'>Ideal For: </span>{plan.recommended}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default PricingPlans