import React, { useEffect, useState } from 'react'
import bg from '../../assets/bg.jpg'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const BlogDetails = () => {
    const [blogDetailArray, setBlogDetailArray] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setBlogDetailArray(data.meals))
            .catch(err => console.log(err.message))
    }, [id])


    console.log(blogDetailArray)
    return (
        <main className='mt-20 px-4'>
            <div className=' md:px-10 relative'>
                <img src={bg} alt='' className='h-[500px] w-full object-cover ' />
                <div className='absolute h-[500px] w-full md:w-auto top-0 md:left-10 md:right-10 bg-gray-900/40 md:px-6 ' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col text-white  justify-center z-10 items-center text-center'>
                    <h1 className='text-[43px] md:text-5xl mt-10'>News And Articles</h1>
                    <p className='max-w-[314px] md:max-w-lg text-center mt-4'>
                        Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque tellus vehicula aptent dignissim.
                    </p>
                    <div className='flex px-4 mt-10 max-w-lg rounded-md border border-[#f2bc57] py-2'>
                        <input type='text' className='w-full outline-none bg-transparent placeholder:px-4' placeholder='search blog' />
                        <AiOutlineSearch size={24} className='text-[#f2bc57]' />
                    </div>
                </div>


            </div>
            <div className='py-4 px-3 gap-x-3 w-[90%] md:w-[80%] bg-[#f2bc57] flex items-center rounded-md mt-10 mx-auto'>
                <Link to='/'>
                    <div>
                        <FaHome size={26} className='text-white' />
                    </div>
                </Link>
                <Link to='/blog'>
                    <div>
                        <MdKeyboardDoubleArrowLeft size={32} className='text-white' />
                    </div>
                </Link>
                <h1 className='text-xl text-white'>{blogDetailArray[0]?.strMeal}</h1>
            </div>
            <div className='px-10 space-x-2 py-10 text-xl text-[#6C4B3F]'>
                MEAL DETAILS
                <div className='w-8 h-[4px] bg-[#f2bc57] ' />
            </div>
            <div className='px-4 md:px-10 py-4'>
                <div className='bg-white rounded-md py-10 px-3'>
                    <div className='flex flex-col md:flex-row  justify-between gap-x-10'>
                        <div className='w-full md:w-2/5'>
                            <img src={blogDetailArray[0]?.strMealThumb} alt='' className='rounded-[12px]' />
                        </div>
                        <div className='flex-1 flex flex-col '>
                            <h1 className='text-3xl border-b pb-6 border-[#6C4B3F]  text-[#f2bc57]'>{blogDetailArray[0]?.strMeal}</h1>
                            <h1 className='mt-4 text-2xl text-[#6C4B3F] font-semibold'>Category:<span className='font-light  text-md'> {blogDetailArray[0]?.strCategory}</span></h1>
                            <h1 className='mt-4 text-2xl text-[#6C4B3F] font-semibold '>Source:<span className='font-light  text-md'> {blogDetailArray[0]?.strSource}</span></h1>
                            <h1 className='mt-4 text-2xl text-[#6C4B3F] font-semibold  over'>Tags:<span className='font-light  text-md'> {blogDetailArray[0]?.strTags ? blogDetailArray[0].strCategory : 'Nill'}</span></h1>
                            <div className='rounded-md mt-3 bg-[#f2bc57] px-2 py-3'>
                                <h1 className='text-white text-xl'>Ingredients:</h1>
                                <div className='grid grid-cols-3 gap-y-8 mt-4 items-center'>

                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient1}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient2}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient3}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient4}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient5}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient6}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient7}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient8}</h1>
                                    </div>
                                    <div>
                                        <h1></h1>
                                        <h1>{blogDetailArray[0]?.strIngredient9}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* other contents */}

                    <div className='mt-4'>
                        <h1 className='text-[#6C4B3F] py-3 text-xl font-bold'>Measurements:</h1>
                        <ul className='list-disc ml-4'>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure1}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure2}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure3}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure4}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure5}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure6}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure7}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure8}</h1>
                            </li>
                            <li>
                                <h1></h1>
                                <h1>{blogDetailArray[0]?.strMeasure9}</h1>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-[#6C4B3F] py-3 text-xl font-bold'>Instructions:</h1>
                        <p>
                            {blogDetailArray[0]?.strInstructions}
                        </p>
                    </div>

                </div>
            </div>


        </main>

    )
}

export default BlogDetails