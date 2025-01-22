import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {

  return (
    <div className=' h-[100%] w-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' />
          <Route path='/grid' />

        </Routes>
    </div>
  )
}

export default App
