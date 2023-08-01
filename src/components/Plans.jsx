import React, { useEffect, useState } from 'react'
import whiteRice from '../assets/whiteRice.png'
import echi from '../assets/echiladas.png'
import elote from '../assets/elote.png'
import { motion } from 'framer-motion'
const Plans = () => {
    const [currentInd, setCurrentInd] = useState(0)
    const [rotation, setRotation] = useState(0)
    const [ishover, setIshover] = useState(false)
    const imgss = [echi, elote, whiteRice];
    useEffect(() => {
        const handleNext = () => {
            setCurrentInd(prevind => (prevind + 1) % imgss.length)
            // setRotation(prevrotat => prevrotat + 360)
        }
        const interval = setInterval(handleNext, 3000)
        return () => clearInterval(interval)
    }, [imgss.length])


    const animateImg = {

        show: {
            rotate: 360,
            transtion: {
                duration: 10,
                ease: 'linear',
                loop: Infinity
            }
        }
    }
    return (
        <main className='mt-10 py-8 px-6 md:px-10 text-[#6C4B3F] '>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='flex-1 w-full'>
                    <h1 className='text-[40px] md:text-5xl md:leading-snug text-center  md:text-left'>Do you have any <br className='hidden md:flex' /> dinner plan today? <br className='hidden md:flex' /> Reserve your table</h1>
                    <p className='mt-4 md:mt-10 text-xl text-center flex justify-center md:text-left  md:max-w-sm'>Make online reservations with great restuarant <br className='flex md:hidden' /> reviews from diners and earn points <br className='flex md:hidden' /> towards free ,meals.</p>
                    <button className='px-2 py-3 mb-6 md:mb-0 flex mx-auto md:mx-0 bg-[#f2bc57] rounded-[10px] mt-10'>Make Reservation</button>
                </div>
                <div className='flex-1 flex justify-center md:justify-start px-4'>
                    <motion.div
                        animate={{ rotate: 360 }}
                        whileHover={{ rotate: 0 }}
                        onHoverStart={() => setIshover(true)}
                        onHoverEnd={() => setIshover(false)}
                        onTap={() => setIshover(false)}
                        transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatDelay: 0 }} className='bg-[#f2bc57] relative justify-center flex items-center  w-[300px] h-[300px] md:w-[500px]  md:h-[500px] rounded-full'>
                        <img src={imgss[currentInd]} alt='' className=' absolute ' />

                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Plans