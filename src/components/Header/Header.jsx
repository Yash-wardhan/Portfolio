import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {SlDocs} from 'react-icons/sl'
import {AiFillPicture} from 'react-icons/ai'
import {TbBrandTelegram} from 'react-icons/tb'

function Header() {
  return (
    <header className='sticky top-0 z-50 max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row md:px-4 md:my-1 py-1 bg-white'>
      <div className="logo flex items-center w-full justify-center  md:justify-between ">
        <a href='#Home' className='text-gray-700/100 font-bold text-2xl'>Wardhan</a>
      </div>
      <nav className='flex items-center py-4 my-2 justify-evenly w-full md:justify-end md:gap-8'>
        <a href='#Home' className='flex flex-row gap-2 items-center justify-center text-sm font-bold cursor-pointer hover:text-gray-400 ease-in-out text-gray-800 duration-100 '>
        <BiHomeAlt size={25}  className='block md:hidden' /> 
          <div className='hidden md:block'>
        Home
          </div>
          
        </a>
        <a href='#about' className='flex flex-row gap-2 items-center justify-center text-gray-600 text-sm font-bold cursor-pointer hover:text-gray-400 ease-in-out  duration-100'>
          <BsFillPersonFill size={25} className='block md:hidden'/>
          <div className='hidden md:block'>
        About
          </div>
        </a>
        <a href='#skills' className='flex flex-row gap-2 items-center justify-center text-gray-600 text-sm font-bold cursor-pointer hover:text-gray-400 ease-in-out duration-100'>
          <SlDocs size={25} className='block md:hidden' />
          <div className='hidden md:block'>
        Skills
          </div>
        </a>
        <a href='#portfilo' className='flex flex-row gap-2 items-center justify-center text-gray-600 text-sm font-bold cursor-pointer hover:text-gray-400 ease-in-out duration-100'>
          <AiFillPicture size={25} className='block md:hidden' />
          <div className='hidden md:block'>
        Portfilo
          </div>
        </a>
        <a href='#contact' className='flex flex-row gap-2 items-center justify-center text-gray-600 text-sm font-bold cursor-pointer hover:text-gray-400 ease-in-out duration-100'>
          <TbBrandTelegram size={25} className='block md:hidden' />
          <div className='hidden md:block'>
        Contact
          </div>
        </a>
      </nav>
    </header>
  )
}

export default Header