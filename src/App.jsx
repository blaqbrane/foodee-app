
import React, { createContext, useEffect } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutPage from './components/OtherPages/AboutPage'
import { Navbar } from './components'
import Layout from './components/OtherPages/Layout'
import MenuPage from './components/OtherPages/MenuPage'

import { useState } from 'react'
import Blogpage from './components/OtherPages/Blogpage'
import BlogDetails from './components/OtherPages/BlogDetails'
import ContactPage from './components/OtherPages/ContactPage'
import MealDetails from './components/OtherPages/MealDetails'
import CartDisplay from './components/OtherPages/CartDisplay'

export const AppContext = createContext()
const App = () => {
  const [cartArray, setCartArray] = useState(JSON.parse(localStorage.getItem('cartArray')) || [])

  const [isOpen, setIsOpen] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  useEffect(() => {
    localStorage.setItem('cartArray', JSON.stringify(cartArray))
  }, [cartArray])


  const onAdd = (product) => {

    //check if item already exist 
    const checkItem = cartArray.find((itemm) => itemm?.idMeal === product?.idMeal)

    if (checkItem) {
      console.log('Already added')
      return
    }
    else {
      const price = 15
      const quantity = 1
      const newitem = { price, quantity, ...product }
      setCartArray([...cartArray, newitem])
    } return


  }
  const handleDelete = (id) => {
    const filteredItem = cartArray.filter(item => item?.idMeal !== id)
    setCartArray(filteredItem)
  }

  const handleAdd = (id) => {
    const newquantity = cartArray.map((item) => {
      return item?.idMeal === id ? { ...item, quantity: item?.quantity + 1 } : item
    })
    setCartArray(newquantity)
  }
  const handleMinus = (id) => {

    const newquantity = cartArray.map((item) => {

      return item?.idMeal === id ? {
        ...item, quantity: item?.quantity - 1,

      } : item
    })
    setCartArray(newquantity)

  }

  const handlePrice = () => {
    let update_price = 0
    let item_quantity = 0
    cartArray.map((item) => {
      update_price += item?.quantity * item?.price
      item_quantity += item?.quantity
    })
    setTotalPrice(update_price)
    setTotalQuantity(item_quantity)
  }

  useEffect(() => {
    handlePrice()
  })
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen, totalPrice, totalQuantity, cartArray, onAdd, handleAdd, handleMinus, handleDelete }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/menu' element={<MenuPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/blog' element={<Blogpage />} />
            <Route exact path='/cart' element={<CartDisplay />} />
            <Route exact path='/blog/:id' element={<BlogDetails />} />
            <Route exact path='/mealdetails/:id' element={<MealDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App