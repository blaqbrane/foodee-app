import React, { useEffect, useState } from 'react'
import bg from '../../assets/bg.jpg'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { useContext } from 'react';
const MealDetails = () => {
    const { onAdd } = useContext(AppContext)
    const [blogDetailArray, setBlogDetailArray] = useState([])
    const [categoryArray, setCategoryArray] = useState([])
    const activeC = blogDetailArray[0]?.strCategory
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setBlogDetailArray(data.meals)

            })
            .catch(err => console.log(err.message))
    }, [id])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeC}`)
            .then(res => res.json())
            .then(data => setCategoryArray(data.meals))

    }, [activeC])


    console.log(activeC)
    return (
        <main className='mt-20 px-4'>
            <div className='md:px-10 relative'>
                <img src={bg} alt='' className='h-[500px] w-full object-cover ' />
                <div className='absolute h-[500px] w-full md:w-auto top-0 md:left-10 md:right-10 bg-gray-900/40  px-6 ' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col text-white  justify-center z-10 items-center text-center'>
                    <h1 className='text-5xl mt-10'>
                        Food Details</h1>
                    <p className='max-w-[280px] md:max-w-lg text-center mt-4'>
                        Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque tellus vehicula aptent dignissim.
                    </p>
                    {/* <div className='flex px-4 mt-10 max-w-lg rounded-md border border-[#f2bc57] py-2'>
                        <input type='text' className='w-full outline-none bg-transparent placeholder:px-4' placeholder='search blog' />
                        <AiOutlineSearch size={24} className='text-[#f2bc57]' />
                    </div> */}
                </div>


            </div>
            <div className='py-4 px-3 gap-x-3 w-[80%] bg-[#f2bc57] flex items-center rounded-md mt-10 mx-auto'>
                <Link to='/'>
                    <div>
                        <FaHome size={26} className='text-white' />
                    </div>
                </Link>
                <Link to='/menu'>
                    <div>
                        <MdKeyboardDoubleArrowLeft size={32} className='text-white' />
                    </div>
                </Link>
                <h1 className='text-xl text-white'>{blogDetailArray[0]?.strMeal}</h1>
            </div>
            <div className='px-4 md:px-10 space-x-2 py-10 text-xl text-[#6C4B3F]'>
                MEAL DETAILS
                <div className='w-8 h-[4px] bg-[#f2bc57] ' />
            </div>
            <div className='px-4 md:px-10 py-4'>
                <div className='bg-white rounded-md py-10 px-3'>
                    <div className='flex flex-col md:flex-row justify-between gap-x-10'>
                        <div className='w-full md:w-2/5'>
                            <img src={blogDetailArray[0]?.strMealThumb} alt='' className='rounded-[12px]' />
                        </div>
                        <div className='flex-1 flex flex-col '>
                            <h1 className='text-3xl border-b pt-6 pb-6 border-[#6C4B3F]  text-[#f2bc57]'>{blogDetailArray[0]?.strMeal}</h1>
                            <p className='mt-4 text text-[#6C4B3F] font-semibold'>Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque tellus vehicula aptent dignissim.Mollis varius nullam elementum aliquet ligula mus taciti morbi tincidunt, ut nam elit. Taciti imperdiet arcu sagittis. Class accumsan in. Semper augue vitae sit. Nisl sociosqu sodales sociis egestas consequat, facilisi duis, augue neque tellus vehicula aptent</p>
                            <p className='mt-4 text-xl text-[#6C4B3F] font-semibold'>Price: <span className='text-md'>$20</span></p>

                            <button onClick={() => onAdd(blogDetailArray[0])} className='rounded-md outline-none mt-28 bg-[#f2bc57] px-6 py-3'>

                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>

                <div>
                    <h1 className=' text-[#6C4B3F] text-3xl'>Food You May Also Like</h1>
                </div>
                {/* <div className='flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-x-2'>
                    {
                        categoryArray?.slice(0, 12).map((item) => (
                            <Link to={`/mealdetails/${item.idMeal}`}>
                                <div key={item.idMeal} className='mt-4 px-4 md:px-6 py-3 rounded-[14px] bg-white w-[300px] md:w-[300px]'>
                                    <img src={item.strMealThumb
                                    } alt='' className='rounded-[13px] w-full' />

                                    <h1 className={`${item.strMeal.length > 10 && 'truncate'} mt-8 text-4xl text-[#6C4B3F] text-center`}>{item.strMeal}</h1>
                                    <p className=' mt-6 text-center mb-4 text-[#6C4B3F]'>
                                        This is a meal that has the <br /> best ingredients.
                                    </p>
                                    <div className='flex py-4 items-center justify-between'>
                                        <h1>
                                            $20
                                        </h1>
                                        <button onClick={() => onAdd(item)} className='px-2 py-2 bg-[#f2bc57] rounded-[10px]'>Add to Cart</button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div> */}
                <marquee behavior='alternate' className='px-20'>
                    <div className='flex items-center justify-center md:flex-row  gap-x-2'>
                        {
                            categoryArray?.slice(0, 12).map((item) => (
                                <Link to={`/mealdetails/${item.idMeal}`}>
                                    <div key={item.idMeal} className='mt-4 px-4 md:px-6 py-3 rounded-[14px] bg-white w-[300px] md:w-[300px]'>
                                        <img src={item.strMealThumb
                                        } alt='' className='rounded-[13px] w-full' />

                                        <h1 className={`${item.strMeal.length > 10 && 'truncate'} mt-8 text-4xl text-[#6C4B3F] text-center`}>{item.strMeal}</h1>
                                        <p className=' mt-6 text-center mb-4 text-[#6C4B3F]'>
                                            This is a meal that has the <br /> best ingredients.
                                        </p>
                                        <div className='flex py-4 items-center justify-between'>
                                            <h1>
                                                $20
                                            </h1>
                                            <button onClick={() => onAdd(item)} className='px-2 py-2 bg-[#f2bc57] rounded-[10px]'>Add to Cart</button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </marquee>

            </div>


        </main>

    )
}

export default MealDetails