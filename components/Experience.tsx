import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
    return (

        <div className='py-20' id="work">
            <h1 className='heading'>
                My  {" "}
                <span className='text-purple'>  work experience</span>
            </h1>
            <div className='w-full mt-12 grid items-center lg:grid-cols-4 grid-cols-1 gap-10' >
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 5000}
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg=flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail}   className="lg:w-32 lg:h-32 md:w-20 md:h-20 w-16 h-16 rounded-lg" />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <div className="flex justify-between mb-3 items-center">
                                    <h2 className="text-start text-sm md:text-lg font-bold">
                                        {card.company}
                                    </h2>
                                    <h2 className="text-start text-sm md:text-lg font-bold">
                                        {card.time}
                                    </h2>
                                </div>
                                <ul className="list-disc pl-5 text-white-200">
                                    {card.desc.map((item, i) => (
                                        <li key={i} className="text-start font-semibold">
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-start mt-3 text-white-100">Tech Stack: {card.techStack}</p>


                            </div>
                        </div>

                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience
