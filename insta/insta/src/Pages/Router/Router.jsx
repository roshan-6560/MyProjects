import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Profile from '../Profile/Profile'
import Story from '../Story/Story'

const Router = () => {
  return (
    <>
      <div className='flex w-[100%]'>
        <div className='w-[20%] border border-1-slate-500'>
            <Sidebar/>
        </div>
        <div className='w-[80%] border border-1-slate-500'>
        <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/username' element={<Profile/>}></Route>
        <Route path='/story' element={<Story/>}></Route>
        </Routes>   
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default Router
