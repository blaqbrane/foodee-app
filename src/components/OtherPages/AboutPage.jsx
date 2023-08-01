import React from 'react'
import Navbar from '../Navbar';
import about3 from '../../assets/about3.jpg'
import about5 from '../../assets/about5.jpg'
import Services from '../Services';

const AboutPage = () => {
    return (
        <main className=' mt-28 px-4 md:px-16'>
            <div>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>About Us</h1>
                <p className='text-center text-[#6C4B3F] mt-5'>
                    We are more than multiple services. Food is one of the basic necessities of life. We are more than multiple services which serve the best foods and drinks. We provide the best and healthiest foods with great taste.
                </p>
                <h1 className='text-center text-4xl mt-10 text-[#6C4B3F]'>Our Story</h1>
            </div>
            <div className='mt-6  relative '>
                <img src={about3} alt='' className='h-[500px] w-full object-cover rounded-[14px]' />

                <div className='bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f2bc57] '>
                    <p className='text-center px-10 py-8'>
                        Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes. Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor donec donec, primis arcu penatibus nascetur.
                    </p>
                </div>
            </div>
            <div className='mt-40'>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>Our Mission</h1>
            </div>
            <div className='mt-6  relative '>
                <img src={about5} alt='' className='rounded-[14px] h-[500px] w-full object-cover' />

                <div className='bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f2bc57] '>
                    <p className='text-center px-10 py-8'>
                        Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes. Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor donec donec, primis arcu penatibus nascetur.
                    </p>
                </div>
            </div>
            <div className='mt-40'>
                <h1 className='text-center text-4xl text-[#6C4B3F]'>Why Choose Us</h1>
            </div>
            <Services />

        </main>
    )
}

export default AboutPage