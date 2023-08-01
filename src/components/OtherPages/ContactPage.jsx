import React from 'react'

const ContactPage = () => {
    return (
        <main className='mt-32 px-4 md:px-20 text-[#6C4B3F]'>
            <h1 className='text-center font-bold text-3xl text-[#6C4B3F]'>Get in touch today!</h1>
            <div className='md:max-w-[760px] gap-y-3 mx-auto md:gap-x-10 flex flex-col md:flex-row justify-between mt-6'>
                <div className='flex w-full md:w-[350px] items-center h-24 gap-x-3 bg-white rounded-[13px] shadow-md shadow-[#d3d1d1] px-5 py-4'>
                    <div className='px-4 py-4 rounded-md bg-[#7428DF]'>

                    </div>
                    <h1 className='text-md font-bold'>Mail Us</h1>
                    <h1 className='ml-4'>test@gmail.com</h1>
                </div>
                <div className='flex w-full md:w-[350px] items-center h-24 gap-x-3 bg-white rounded-[13px] shadow-md shadow-[#d3d1d1] px-5 py-4'>
                    <div className='px-4 py-4 rounded-md bg-[#E01Ac9]'>

                    </div>
                    <h1 className='text-md font-bold'>Contact Us</h1>
                    <h1 className='ml-4'>+234 000 567 812</h1>
                </div>
            </div>
            <div className='py-10 px-3 bg-white rounded-[14px] md:max-w-[760px] md:mx-auto mt-6'>
                <h1 className='text-center font-bold text-3xl text-[#6C4B3F]'>Please Fill In Your Details.</h1>
                <div className='mt-6 flex flex-col md:flex-row justify-between md:items-center md:gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-2'>
                        <label className='font-semibold'>Full Name</label>
                        <input className='border rounded-[10px] py-2 px-3 outline-[#f2bc57]' type='text' placeholder='Enter name ...' />
                    </div>
                    <div className='flex-1 flex flex-col gap-y-2 mt-3 md:mt-0'>
                        <label className='font-semibold'>Email</label>
                        <input className='border rounded-[10px] py-2 px-3 outline-[#f2bc57]' type='email' placeholder='Enter email ...' />
                    </div>

                </div>
                <div className='mt-6 flex flex-col md:flex-row justify-between md:items-center md:gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-2'>
                        <label className='font-semibold'>Address</label>
                        <input className='border rounded-[10px] py-2 px-3 outline-[#f2bc57]' type='text' placeholder='Enter address ...' />
                    </div>
                    <div className='flex-1 flex flex-col mt-3 md:mt-0 gap-y-2'>
                        <label className='font-semibold'>About</label>
                        <input className='border rounded-[10px] py-2 px-3 outline-[#f2bc57]' type='text' placeholder='Enter about ...' />
                    </div>

                </div>
                <div className='flex flex-col mt-6 gap-y-2'>
                    <label className='font-semibold'>Message</label>
                    <textarea className='border rounded-[10px] h-32 md:h-24 py-2 px-3 outline-[#f2bc57]' type='text' placeholder='Enter address ...' />
                </div>
                <button className='px-4 py-3 flex mx-auto mt-6 rounded-[13px] bg-[#f2bc57]'>Send Message</button>
            </div>

        </main>
    )
}

export default ContactPage;