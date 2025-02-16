import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id="testimonials">
            <h1 className='heading'>
                Kind words from  {" "}
                <span className='text-purple'>  satisfied clients</span>
            </h1>
            <div className='flex flex-col items-center mt-10' >

                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
                <div className='flex  flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map(({ id, img, name }) => (
                        <div key={id} className=' flex items-center md:max-w-60 max-w-32 gap-2'>
                            <img src={img} alt={name} className="md:w-20 w-16" />
                            <span className="hidden md:block md:text-2xl font-semibold italic text-white-800">
                                {name}
                            </span>

                        </div>
                    ))}

                </div>


            </div>
        </div>
    )
}

export default Clients














