import React, { useState, useEffect, useRef } from 'react'
import chefImg from '../assets/chefImg.png'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
//replace the popular data with another later
import { popular } from './data'
const TeamChef = () => {
    const [cI, setCI] = useState(1)
    const containerRef = useRef(null);
    const handleNext = () => {
        const container = containerRef.current;
        const cardWidth = container.querySelector('.cards').offsetWidth;
        // container.scrollLeft += cardWidth * 4
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft) {
            container.scrollLeft = 0;

        } else {
            container.scrollLeft += cardWidth;
        }
    }
    const handlePrev = () => {
        const container = containerRef.current;
        const cardWidth = container.querySelector('.cards').offsetWidth;
        // container.scrollLeft += cardWidth * 4
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft === 0) {
            container.scrollLeft = maxScrollLeft;

        } else {
            container.scrollLeft -= cardWidth;
        }
    }
    //for mobile device
    const handleN = () => {
        setCI(cI === popular.length - 1 ? 1 : cI + 1)
    }
    useEffect(() => {
        const Ints = setInterval(() => {
            setCI(cI === popular.length - 1 ? 1 : cI + 1)
        }, 4000)
        return () => {
            clearInterval(Ints)
        }
    })
    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval = null;
        const scrollImages = () => {
            const imageWidth = container.querySelector('.cards').offsetWidth;

            // container.scrollLeft += imageWidth
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScrollLeft) {
                container.scrollLeft = 0;

            } else {
                container.scrollLeft += imageWidth;
            }

        }
        const intervalId = setInterval(scrollImages, 4000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <main className='py-10 px-4 md:px-10 rounded-md'>
            <div className='flex items-center justify-between text-xl'>
                <h1 className='text-xl md:text-3xl  text-[#6C4B3F]'>Meet our Chefs</h1>
                <div className='flex items-center gap-x-3'>

                    <div onClick={handlePrev} className='w-8 flex items-center justify-center text-[#313235] text-2xl h-8 rounded-full border-2 border-[#f2bc57]'>
                        <AiOutlineArrowLeft size={22} />
                    </div>
                    <div onClick={handleNext} className='w-8 flex items-center justify-center text-[#313235] text-2xl h-8 rounded-full border-2 border-[#f2bc57]'>
                        <AiOutlineArrowRight size={22} />
                    </div>

                </div>
            </div >
            {/* style={{ width: "calc(4 * 400px)" }} */}
            <div ref={containerRef} className='image-container mt-4 overflow-x-scroll card'>
                <div className='whitespace-nowrap gap-y-4 flex md:gap-x-10'>

                    {
                        popular.map((item) => (
                            <div key={item.id} className='w-[320px] md:w-[600px] cards px-4 py-4 rounded-[14px] bg-white '>


                                <div className='px-6 w-72 md:w-80 h-52 bg-slate-100 rounded-[14px]'>
                                    <img src={chefImg} alt='' className=' w-full h-full object-cover mt-3 rounded-md ' />


                                </div>
                                <h1 className=' mx-auto py-4 text-2xl'> Marvin Flores</h1>
                            </div>
                        ))
                    }

                </div>
            </div>


            <div className='block md:hidden mt-4 overflow-x-scroll'>
                <div className='whitespace-nowrap flex items-center gap-x-10 md:hidden'>

                    {
                        popular.map((item) => (
                            <div key={item.id} className={`${cI === item.id ? 'w-full px-12 py-4 rounded-md bg-white scroll-snap-align-center' : 'hidden'}`}>

                                <div className='justify-center items-center flex'>
                                    <img src={item.imgs} alt='' className='w-40 h-40 ' />
                                </div>

                                <h1 className='text-center text-2xl py-4'>{item.name}</h1>
                                <p className='text-center '>
                                    This is a meal that has the <br /> best ingredients.
                                </p>
                                <div className='flex py-4 items-center justify-between'>
                                    <h1>
                                        ${item.price}
                                    </h1>
                                    <button className='px-2 py-2 bg-[#f2bc57] rounded-[10px]'>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </main>
    )
}

export default TeamChef;