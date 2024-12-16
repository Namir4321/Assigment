import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Userlists from '@/components/Userlist/Userlists'
const HomePage = () => {
  return (
    <div className='mt-0 '>
    <Navbar/>
    <Userlists/>
    </div>
  )
}

export default HomePage