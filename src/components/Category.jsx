import React, { useState, useEffect, useRef } from 'react'
import whiteRice from '../assets/whiteRice.png'
import { popular } from './data'
import { Link } from 'react-router-dom'
import { AppContext } from '../App';
import { useContext } from 'react';
const Category = () => {
    const { isOpen, setIsOpen, onAdd } = useContext(AppContext)
    const [category, setCategory] = useState([])
    const [categoryArray, setCategoryArray] = useState([])
    const [activeC, setActiveC] = useState('Breakfast')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(data => setCategory(data.meals))
    }, [])
    useEffect(() => {
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeC}`)
            .then(res => res.json())
            .then(data => {
                setCategoryArray(data.meals)
                setLoading(false)
            
            })
    }, [activeC])
    console.log(categoryArray)
    return (
        <main className='py-10 px-4 md:px-10 rounded-md'>
            {
                isOpen &&
                <div className='flex items-center justify-between text-xl'>
                    <h1 className='text-xl md:text-3xl  text-[#6C4B3F]'>Our Regular <br className='flex md:hidden' /> Menu Pack</h1>
                    <Link to='/menu' ><div onClick={() => setIsOpen(false)} className=' gap-x-3' >
                        <button className='flex mx-auto mt-6 px-3 md:px-6 py-3 bg-[#f2bc57] rounded-[10px]'>See Menu</button>
                    </div>
                    </Link>
                </div >
            }

            <div className='mt-4 overflow-x-scroll'>
                <div className='whitespace-nowrap flex items-center gap-x-4'>

                    {/* <button onClick={() => setActiveC('All')} className={`${activeC === 'All' ? 'bg-[#f2bc57] border-none outline-none' : ''} px-6 border border-[#f2bc57] py-3 rounded-[13px]  hover:bg-[#f2bc57]`}>
                        All
                    </button> */}
                    {
                        category.map((item, index) => (
                            <button key={index + 1} onClick={() => setActiveC(item.strCategory)} className={`${activeC === item.strCategory ? 'bg-[#f2bc57] border-none outline-none' : ''} px-6 border border-[#f2bc57] py-3 rounded-[13px] hover:bg-[#f2bc57]`}>
                                {item.strCategory}
                            </button>
                        ))
                    }
                </div>

            </div>
          {
            loading ? (
                <div className='text-center text-3xl text-[#6C4B3F]'>
                    Loading...
                </div>
            ) : (
                <div className='flex flex-col md:flex-row md:flex-wrap gap-x-2'>
                {
                    categoryArray.slice(0, 12).map((item) => (
                        <Link to={`/mealdetails/${item.idMeal}`}>
                            <div key={item.idMeal} className='mt-4 px-4 md:px-6 py-3 rounded-[14px] bg-white w-full md:w-[300px]'>
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
            )
          }
        </main>
    )
}

export default Category