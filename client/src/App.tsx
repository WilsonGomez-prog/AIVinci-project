import React from 'react'
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';

import { logo, AiVinciLogo } from './assets/index';
import { Home, CreatePost } from './pages/index';

const App = () => {
  return (
  <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] shadow-md'>
      <Link to="/" className='flex flex-row items-center gap-1 group'>

        <img src={AiVinciLogo} alt='logo' className='w-14 object-cover' />

        <div className='flex overflow-hidden flex-row flex-nowrap items-center gap-1 h-14 pt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out'>
          <p className='sm:text-xs lg:text-lg font-semibold'>Powered by</p>
          <img src={logo} alt='logo' className='w-24 object-contain' />
        </div>

      </Link>
      <Link to="/create-post"
        className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
      >
        Create
      </Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App