import React from 'react'
import {  BsLinkedin, BsQuora } from 'react-icons/bs'
import {  FiGithub } from 'react-icons/fi'
import {  FaTelegramPlane } from 'react-icons/fa'
import YashWardhan from '../Header/Images/YashWardhan.jpg'

function Home() {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center md:items-end  px-4' id="Home">
            <div className='h-screen md:gap-5 px-4 mt-28 grid md:grid-cols-5 justify-center items-center'>
                <div className=' flex gap-2 md:flex-col md:gap-6 md:items-center md:justify-center'>
                <a href='https://www.linkedin.com/in/yash-wardhan-0151a7225/' className='duration-200 hover:scale-105 group'><BsLinkedin size={28} className="group-hover:text-[#0072b1] group-hover:-rotate-3" /></a>
                <a href='https://github.com/Yash-wardhan' className='duration-200 hover:scale-105 group'><FiGithub size={28} className="group-hover:text-[#171515] group-hover:-rotate-3" /></a>
                <a href='https://www.quora.com/profile/Yash-Wardhan-16' className='duration-200 hover:scale-105 group'><BsQuora size={28} className="group-hover:text-[#b92b27] group-hover:-rotate-3"/></a>
                </div>
                <div className='mt-4 md:col-span-2 flex flex-col md:justify-center group'>
                    <div className='flex flex-row items-center'>
                    <h1 className='text-6xl font-extrabold text-gray-800 '>Yash Wardhan</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg" alt="Hand" className='h-14 ml-2 group-hover:-rotate-45 cursor-pointer duration-300'/>
                    </div>
                        <h2 className='font-bold mt-4 text-gray-700'>Full Stack Developer / Frontend Developer</h2>
                        <p className='mt-4 font-semibold text-gray-600'>As a <span className='font-bold underline'>Front-End Developer</span>, my goal is to create intuitive and engaging user interfaces that bring websites and applications to life.</p>
                    <div className='flex bg-black text-white justify-center items-center gap-2 w-[120px] h-[50px] mt-10 rounded-2xl hover:text-white hover:bg-gray-600 duration-100 ease-out '>
                        <p className='font-semibold'>Say Hello</p>
                        <FaTelegramPlane size={20}/>
                    </div>
                </div>
                <div className='md:col-span-2 flex justify-center mt-20'>
                    <img src={ YashWardhan } className='shadow-md rounded-full max-w-full h-auto align-middle border-gray-600 hover:shadow-2xl hover:scale-110 cursor-pointer ease-in-out transition duration-300  sm:w-[250px] hover:rotate-6 w-[75%]'/>
                </div>
            </div>
    </div>
  )
}

export default Home