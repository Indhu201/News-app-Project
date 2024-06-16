import { useState } from "react"

import Cart from '@/assets/comp/Cart'
import News from '@/components/News'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { CartProvider } from 'react-use-cart'


const Home = () => {
  const[category,setCategory]=useState("general");
  return (
    <div>
        <div className='flex flex-row'>
            <div>
              <Sidebar/>
            </div>
            <div>
            <CartProvider>
                <News/>
                <Cart />
            </CartProvider>
            </div>
        </div>
    </div>
  )
}

export default Home