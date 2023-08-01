import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import dot from '../assets/stones.png'
import foodmain from '../assets/foodmain.png'
import seek from '../assets/SeekPng.png'
import food1 from '../assets/food1.jpg'
import dessert2 from '../assets/dessert2.jpg'
import dessert1 from '../assets/dessert1.jpg'
import drink2 from '../assets/drink2.jpg'
const Hero = () => {
    return (
        <div className='mt-24 px-4 md:px-10 py-4'>

            <div className='flex flex-col md:flex-row '>
                <div className='flex-1'>
                    <img src={dot} alt='' className='w-24 mb-5' />
                    <h1 className='text-5xl md:text-6xl leading-snug text-center md:text-left'>We serve the food <br className='hidden md:flex' />
                        you love 😍</h1>
                    <p className='text-[#6C4B3F] my-6 text-center md:text-left'>This is the type of restuarant which typically serves the best foods and drinks</p>
                    <div className='flex justify-center md:justify-start items-center gap-x-3'>
                        <div><button className='px-6 bg-[#f2bc57] py-2 rounded-lg '>Explore food</button></div>
                        <div className='hidden md:flex px-4 flex-1 max-w-[400px] rounded-md border border-[#f2bc57] py-2'>
                            <input type='text' className='w-full outline-none bg-transparent placeholder:px-4' placeholder='search...' />
                            <AiOutlineSearch size={26} className='text-[#6C4B3F]' />
                        </div>
                    </div>
                </div>
                <div className='flex-1 mt-8 md:mt-0'>
                    <div className='relative flex-1 flex items-center justify-center w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full bg-[#fff5e9]'>
                        {/* <div className='border-green-400 border rounded-full w-[400px] h-[400px]'>
                            
                        </div> */}
                        <img src={foodmain} alt='' className='absolute -top-14 md:-top-14 mr-3' />
                        <div className='absolute border border-[#e2dbd3] w-[330px] h-[300px] md:w-[450px] md:h-[430px] left-[2px] md:left-7 rounded-full' />
                        <div className='absolute border border-[#e2dbd3] ml-1 w-[300px] h-[280px] md:w-[400px] md:h-[380px] left-[4px] md:left-7 rounded-full' />
                        <img src={seek} alt='' className='z-10 absolute -top-6 w-20 rotate-180' />
                        <div className='absolute md:-right-16 -right-8 flex flex-col gap-y-3'>
                            <div className=' ml-2 flex gap-x-4 bg-white px-2 py-3 shadow-sm shadow-[#f3f0f0] rounded-[10px]  transition duration-500 ease-in hover:scale-105 cursor-pointer'>
                                <img src={food1} alt='' className='w-6 rounded' />
                                <h1>Dishes</h1>
                            </div>
                            <div className='flex gap-x-4 bg-white px-2 py-3 shadow-sm shadow-[#f3f0f0] rounded-[10px]  transition duration-500 ease-in hover:scale-105 cursor-pointer'>
                                <img src={food1} alt='' className='w-6 rounded' />
                                <h1>Dessert</h1>
                            </div>
                            <div className='flex gap-x-4 bg-white px-2 py-3 shadow-sm shadow-[#f3f0f0] rounded-[10px]  transition duration-500 ease-in hover:scale-105 cursor-pointer'>
                                <img src={food1} alt='' className='w-6 rounded' />
                                <h1>Drinks</h1>
                            </div>
                            <div className=' ml-2 flex gap-x-4 bg-white px-2 py-3 shadow-sm shadow-[#f3f0f0] rounded-[10px]  transition duration-500 ease-in hover:scale-105 cursor-pointer'>
                                <img src={food1} alt='' className='w-6 rounded' />
                                <h1>Snacks</h1>
                            </div>
                        </div>
                    </div>
                    <img src={dot} alt='' className='w-24 absolute right-0 -bottom-4' />
                </div>
            </div>
        </div>
    )
}

export default Hero