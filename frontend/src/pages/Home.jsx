import News from '@/components/News'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <div>
              <Sidebar/>
            </div>
            <div>
              <News/>
            </div>
        </div>
    </div>
  )
}

export default Home