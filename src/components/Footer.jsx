import React from 'react'
import logo from '../assets/logo.webp'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsPinterest } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className='mt-16 py-6 px-4 md:px-10 '>
            <div >
                <div className='flex border-b py-4 border-[#6C4B3F] items-center gap-x-3'>
                    <div className='w-[50px] h-[50px]  bg-[#f2bc57] rounded-full'>
                        <img src={logo} alt='' className='w-full h-full object-contain  ' />

                    </div>
                    <h1 className='text-[25px] font-[900]  text-[#313235]'>Foodie</h1>
                </div>
                <div className='grid md:grid-cols-5 mt-10'>
                    <div className='col-span-2 '>
                        <h1 className='text-[35px] text-center text-[#6C4B3F]'>Subscribe to our newletter</h1>
                        <div className='flex px-4 md:px-20 gap-x-2 items-center mt-8 text-[#6C4B3F]'>
                            <input className='border-b border-[#6C4B3F] bg-transparent w-full' type='text' placeholder='Enter your Email' />
                            <div className='w-12 flex cursor-pointer items-center justify-center text-2xl h-10 rounded-full bg-[#f2bc57] '>
                                <AiOutlineArrowRight size={28} />
                            </div>
                        </div>
                        <div className='flex text-[#6C4B3F] mt-2 justify-center items-center gap-x-2'>
                            <div className='w-10 flex items-center justify-center text-2xl h-10 rounded-full border-[#6C4B3F] border-2 cursor-pointer hover:scale-75 hover:border-none hover:bg-[#f2bc57] transition duration-500 ease-in'>
                                <BsFacebook size={20} />
                            </div>
                            <div className='w-10 flex items-center justify-center text-2xl h-10 rounded-full border-[#6C4B3F] border-2 cursor-pointer hover:scale-75 hover:border-none hover:bg-[#f2bc57] transition duration-500 ease-in'>
                                <AiFillTwitterCircle size={20} />
                            </div>
                            <div className='w-10 flex items-center justify-center text-2xl h-10 rounded-full border-[#6C4B3F] border-2 cursor-pointer hover:scale-75 hover:border-none hover:bg-[#f2bc57] transition duration-500 ease-in'>
                                <AiOutlineInstagram size={20} />
                            </div>
                            <div className='w-10 flex items-center justify-center text-2xl h-10 rounded-full border-[#6C4B3F] border-2 cursor-pointer hover:scale-75 hover:border-none hover:bg-[#f2bc57] transition duration-500 ease-in'>
                                <BsPinterest size={20} />
                            </div>
                        </div>
                    </div>

                    <ul className='hidden md:flex flex-col leading-[34px] text-[#6C4B3F] '>
                        <li className='font-bold mb-2 text-xl'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>
                    <ul className='hidden md:flex flex-col leading-[34px] text-[#6C4B3F] '>
                        <li className='font-bold mb-2 text-xl'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>
                    <ul className='hidden md:flex flex-col leading-[34px] text-[#6C4B3F]'>
                        <li className='font-bold mb-2 text-xl'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>
                    <ul className='leading-[34px] text-[#6C4B3F] md:hidden col-span-5 md:cols-span-1 flex flex-col justify-start md:justify-center items-center w-full'>
                        <li className='font-bold mb-2 text-xl mt-6 md:mt-0'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>
                    <ul className='leading-[34px] text-[#6C4B3F] md:hidden col-span-5 md:cols-span-1 flex flex-col justify-start md:justify-center items-center w-full'>
                        <li className='font-bold mb-2 text-xl'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>
                    <ul className='leading-[34px] text-[#6C4B3F] md:hidden col-span-5 md:cols-span-1 flex flex-col justify-start md:justify-center items-center w-full' >
                        <li className='font-bold mb-2 text-xl'>Service</li>
                        <li>Pre-Reservation</li>
                        <li>24/7  Services</li>
                        <li>Foodie Place</li>
                        <li>SuperChef</li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer