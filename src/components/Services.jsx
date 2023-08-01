import React from 'react'
import Abouts from '../assets/about1.jpg';
import { services } from './data';
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <main className='px-4 md:px-10 py-6 mt-10 text-[#6C4B3F]'>
            <div className='flex flex-col md:flex-row  justify-between'>
                <div className='flex-1 '>
                    <div className='w-full md:w-[440px] h-[440px] '>
                        <img src={Abouts} alt='' className='w-full h-full rounded-md object-cover' />
                    </div>
                </div>
                <div className='flex-1 mt-6'>
                    <div>
                        <h1 className='text-4xl text-[#6C4B3F] text-center md:text-left'>We are more than multiple services.</h1>

                        <p className='mt-6 text-xl text-[#6C4B3F] text-center md:text-left'>Food is one of the basic necessities of life. We are more than multiple services which serve the best foods and drinks. We provide the best and healthiest foods with great taste.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-x-16 gap-y-14 mt-10 text-2xl'>
                        {
                            services.map((item) => (
                                <div key={item.id} className='flex items-center gap-x-3'>
                                    <div className='flex items-center justify-center w-8 md:w-12 h-8 md:h-12 rounded-full border border-[#f2bc57] border-dotted'>
                                        <img src={item.icon} alt='' className='w-3 h-3 md:w-6' />
                                    </div>
                                    <h1 className='text-[16px]'>{item.text}</h1>
                                </div>
                            ))
                        }

                    </div>
                    <Link to='/about'>
                        <button className='flex mx-auto mt-6 px-6 py-3 bg-[#f2bc57] rounded-[10px]'>About Us
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Services