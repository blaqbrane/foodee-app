import React from 'react'
import logo from '../assets/logo.webp'
import { BsFillBasketFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from '../App';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Navbar = () => {
    const [active, setActive] = useState('')
    const [isSide, setIsSide] = useState(false)
    const { isOpen, setIsOpen, cartArray } = useContext(AppContext)
    return (
        <header className='fixed w-full bg-[#fffcf7] z-20 top-0 left-0 py-6 px-4 md:px-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-3'>
                    <div className='w-[50px] h-[50px]  bg-[#f2bc57] rounded-full'>
                        <img src={logo} alt='' className='w-full h-full object-contain  ' />

                    </div>
                    <Link to='/'> <h1 onClick={() => setIsOpen(true)} className='text-[25px] font-[900]  text-[#313235]'>Foodie</h1></Link>
                </div>
                <div className='flex text-[#6C4B3F] text-lg justify-between gap-x-3 items-center shrink-0'>
                    <ul className='hidden md:flex  items-center gap-x-3 '>
                        <Link to={'/about'}> <li onClick={() => setActive('About us')} className={`${active === 'About us' && 'text-[#f2bc57]'}`}>About us</li></Link>
                        <Link to={'/menu'}> <li onClick={() => setActive('Menu')} className={`${active === 'Menu' && 'text-[#f2bc57]'}`}>Menu</li></Link>
                        <Link to={'/blog'}> <li onClick={() => setActive('Blog')} className={`${active === 'Blog' && 'text-[#f2bc57]'}`}>Blog</li></Link>
                        <Link to={'/contact'}> <li onClick={() => setActive('Contacts')} className={`${active === 'Contacts' && 'text-[#f2bc57]'}`}>Contacts</li></Link>
                    </ul>
                    <Link to='/cart'>
                        <div className='relative border-2 border-[#f2bc57] h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <BsFillBasketFill />
                            <div className='text-sm absolute -top-4 w-6 h-6 flex items-center justify-center text-white rounded-full -right-2 bg-[#f2bc57]'>
                                {cartArray.length}
                            </div>
                        </div>
                    </Link>
                    <div className='hidden md:flex'>
                        <button className='px-4 py-2 rounded-[17px] bg-[#f2bc57]'>Sign Up</button>
                    </div>
                    <div onClick={() => setIsSide(!isSide)} className='flex md:hidden cursor-pointer'>
                        {
                            isSide ? <FaTimes size={36} /> : <AiOutlineMenu size={36} />
                        }
                    </div>
                    {
                        isSide &&
                        <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className='fixed text-[#6C4B3F] rounded-sm left-0 top-0 w-[60%] h-80 bg-white md:hidden'>
                            <ul className=' flex flex-col space-y-4 py-4 items-center gap-x-3 mt-20 md:hidden'>
                                <Link to={'/about'}> <li onClick={() => {
                                    setActive('About us')
                                    setIsSide(false)
                                }} className={`${active === 'About us' && 'text-[#f2bc57]'} text-[#6C4B3F]`}>About us</li></Link>
                                <Link to={'/menu'}> <li onClick={() => {
                                    setActive('Menu')
                                    setIsSide(false)
                                }} className={`${active === 'Menu' && 'text-[#f2bc57]'} text-[#6C4B3F]`}>Menu</li></Link>
                                <Link to={'/blog'}> <li onClick={() => {
                                    setActive('Blog')
                                    setIsSide(false)
                                }} className={`${active === 'Blog' && 'text-[#f2bc57]'} text-[#6C4B3F]`}>Blog</li></Link>
                                <Link to={'/contact'}> <li onClick={() => {
                                    setActive('Contacts')
                                    setIsSide(false)
                                }} className={`pb-4${active === 'Contacts' && 'text-[#f2bc57]'} text-[#6C4B3F]`}>Contacts</li></Link>
                            </ul>
                        </motion.div>
                    }


                </div>
            </div>
        </header>
    )
}

export default Navbar