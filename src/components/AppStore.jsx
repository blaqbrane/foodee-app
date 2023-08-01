import React from 'react'
import mobile from '../assets/mobile.png'
import googlePlay from '../assets/googlePlay.png'
import apple from '../assets/apple-nb.png'
const AppStore = () => {

    return (
        <main className='px-4 md:px-10 py-5'>
            <div className='flex flex-col md:flex-row md:justify-between bg-[#FFF7EC] text-[#6C4B3F rounded-[16px] py-4 md:pt-32 px-3 md:px-28'>
                <div className='flex-1'>
                    <h1 className='text-3xl md:text-[44px] mb-6 leading-snug md:text-left text-center  ]'>Never feel hungry!
                        Download our mobile app
                        Enjoy Delicious Food</h1>
                    <p className='text-[18px] text-center md:text-left'>
                        Make online reservations,read reviews from diners and earn points towards free meals.
                    </p>
                    <div className='flex flex-col gap-y-3 md:gap-y-0 md:flex-row gap-x-3 mt-6'>
                        <div className='flex-1  flex items-center rounded-[32px] gap-x-2 py-3 px-10 md:px-6 md:py-2 bg-[#f2bc57] cursor-pointer hover:scale-105 transition duration-500 ease-in'>
                            <img className='bg-inherit w-6 md:w-10' src={apple} alt='' />
                            <div className='ml-2 md:ml-0 flex md:flex-col gap-x-1'>
                                <h4 className='text-sm'>Download on the </h4>
                                <h5 className='text-sm md:text-xl'>Apple Store</h5>
                            </div>
                        </div>
                        <div className='flex-1 flex items-center rounded-[32px] gap-x-2 px-10 md:px-6 py-3 border-2 border-[#f2bc57] cursor-pointer  hover:scale-105 transition duration-500 ease-in'>
                            <img src={googlePlay} alt='' className='w-6  md:w-10' />
                            <div className='ml-2 md:ml-0 flex md:flex-col gap-x-1'>
                                <h4 className='text-sm'>Get from </h4>
                                <h5 className='text-sm md:text-xl'>App Store</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex-1 mt-6 md:mt-0 flex justify-center -mb-[76px]'>
                    <img src={mobile} alt='' />
                </div>
            </div>
        </main >
    )
}

export default AppStore