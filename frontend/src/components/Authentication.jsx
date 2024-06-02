import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Authentication = () => {
  return (
    <div className='max-w-screen-lg mx-auto h-screen bg-blue-500 flex justify-center items-center'>
    <div className='grid grid-cols-2 gap-2.5'>
      <div className=' bg-green-500 flex justify-center items-center'><img src="/images/Newsimgclerk.jpg"/></div>
      <div className=' bg-yellow-500 flex justify-center items-center'><SignIn/></div>
    </div>
    </div>
  )
}

export default Authentication