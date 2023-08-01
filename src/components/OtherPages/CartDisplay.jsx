import React from 'react'
import { AppContext } from '../../App';
import { useContext } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const CartDisplay = () => {
    const { cartArray, handleAdd, handleMinus, handleDelete, totalPrice, totalQuantity } = useContext(AppContext);
    console.log(cartArray)
    return (
        <main className='mt-24  md:px-10 py-4'>
            {
                cartArray.length < 1 ? (
                    <div>
                        <h1 className='text-4xl text-center text-[#6C4B3F]'>No Item Added</h1>
                    </div>
                ) :
                    (
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex-1 px-2 h-[50vh] overflow-y-scroll flex flex-col shrink-0'>
                                {
                                    cartArray.map((item) => (
                                        <div key={item?.idMeal} className='flex-1 w-full mt-3 shrink-0 flex items-center justify-between md:justify-around '>
                                            <img src={item?.strMealThumb || item?.imgs} alt='' className='w-16 h-16 rounded-md' />
                                            <h1 className='w-20 truncate'>{item?.strMeal || item?.name}</h1>
                                            <h1 className='w-20'>${item?.price}</h1>
                                            {
                                                item?.quantity === 1 ? (
                                                    <button className='w-10' onClick={() => handleDelete(item?.idMeal)} >
                                                        <FaArrowDown className='text-[#6C4B3F]' />
                                                    </button>
                                                ) :
                                                    (
                                                        <button className='w-10' disabled={item?.quantity === 0} onClick={() => handleMinus(item?.idMeal)} >
                                                            <FaArrowDown className='text-[#6C4B3F]' />
                                                        </button>
                                                    )
                                            }
                                            <h1 className='bg-white px-6 shadow-sm shadow-[gray] py-2 rounded-md'>{item?.quantity}</h1>

                                            <button className='w-4 md:w-10 ml-4 md:ml-0' onClick={() => handleAdd(item?.idMeal)}>
                                                <FaArrowUp className='text-[#6C4B3F]' />
                                            </button>
                                            <button onClick={() => handleDelete(item?.idMeal)} className=' p-3 md:px-6 py-2 rounded-md text-[#f2bc57]'><MdDelete size={28} /></button>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* <div className='md:hidden flex w-full mb-0 fixed bottom-0 text-white bg-black  px-10 py-12 '>
                                <h1 className='text-3xl'>CART TOTAL</h1>
                                <h3 className='mt-6'>Subtotal: ${totalPrice}.00</h3>
                                <h3 className='mt-3'>Total items: {totalQuantity}</h3>
                                <h3 className='mt-3'>Total: ${totalPrice}.00</h3>
                                <button className='mt-6 mx-auto px-20 flex  py-2 rounded-md bg-[#f2bc57] text-[#6C4B3F]'>CHECKOUT NOW!</button>

                            </div> */}
                            <div className='md:w-[400px] w-full bottom-0 md:relative fixed text-white bg-black px-10 py-12 '>
                                <h1 className='text-3xl'>CART TOTAL</h1>
                                <h3 className='mt-6'>Subtotal: ${totalPrice}.00</h3>
                                <h3 className='mt-3'>Total items: {totalQuantity}</h3>
                                <h3 className='mt-3'>Total: ${totalPrice}.00</h3>
                                <button className='mt-6 mx-auto px-20 flex  py-2 rounded-md bg-[#f2bc57] text-[#6C4B3F]'>CHECKOUT NOW!</button>

                            </div>
                        </div>
                    )
            }
        </main>
    )
}

export default CartDisplay