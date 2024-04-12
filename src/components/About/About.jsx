import React from 'react'
import { AiOutlineBulb } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { BsFiletypeDoc } from 'react-icons/bs'
import { RiSuitcaseLine } from 'react-icons/ri'
import CV from '../About/CV/YashWardhanResume.pdf'
import YashWardhan from '../Header/Images/YashWardhan.jpg'

function about() {
  return (
    <div className="flex flex-col justify-center items-center mt-2 relativepx-2 py-2 " id='about'>
        <div className='py-20 px-2 flex flex-col justify-center items-center mt-8'>
            <div className='font-extrabold text-5xl'>About Me</div>
            <div className='mt-4 font-bold text-gray-500 px-2 py-2'>My introduction</div>
        </div>
        <div className='flex justify-center items-center h-full gap-12 flex-col md:flex-row relative  group'>
            <img src={ YashWardhan } alt="Yashwardhan" className='rounded-3xl shadow-2xl filter grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300 ease-in group-hover:rotate-6 md:w-[250px] w-[65%]'/>
            <div className='flex flex-col  md:w-[500px]'>
                {/* experience and completed Support  */}
                <div className='grid grid-cols-[repeat(2,minmax(auto,180px))]  md:grid-cols-[repeat(3,minmax(auto,200px))]  place-content-center w-full gap-4'>
                    {/* experience  */}
                    <div className='py-4 px-1  border-gray-700 flex flex-col justify-center items-center shadow-lg rounded-lg border-5 hover:-rotate-3 hover:scale-105 duration-300 cursor-pointer'>
                        <AiOutlineBulb size={25} />
                        <h4 className='font-bold'>Experience</h4>
                        <p className='text-1xl font-semibold text-gray-500 mt-2'> 6 Months Working</p>
                    </div>
                    {/* completed */}
                    <div className='py-4 px-2  border-gray-600 flex flex-col justify-center items-center shadow-lg rounded-lg border-5 hover:-rotate-3 hover:scale-105 duration-300 cursor-pointer'>
                        <RiSuitcaseLine size={25} />
                        <h4 className='font-bold'>Completed</h4>
                        <p className='text-1xl font-semibold text-gray-500 mt-2'>5+ Projects</p>
                    </div>
                    {/* Support  */}
                    <div className='py-4 px-2  border-gray-600 flex flex-col justify-center items-center shadow-lg rounded-lg border-5 hover:-rotate-3 hover:scale-105 duration-300 cursor-pointer'>
                        <BiSupport size={25} />
                        <h4 className='font-bold'>Support</h4>
                        <p className='text-1xl font-semibold text-gray-500 mt-2'>Online 24/7</p>
                    </div>
                </div>
                {/* self Introduction */}
                <div className='px-5 py-4 mt-6'>
                    <p className='font-semibold text-gray-600'>
                        I am a Student from the college of DY Patil Institute of Master of Computer Applications and Management.
                        Frontend developer , I Create web pages with UI/UX User Interface , I Have year of Knowleage and Many Clients are happy with the Projects Carried out 
                    </p>
                </div>
                {/* resume download button  */}
                <div className='ml-4'>
                    <a download='' href={CV} className='px-2 py-4 bg-gray-800 w-[200px] text-white flex flex-row justify-center items-center rounded-lg hover:bg-white hover:text-gray-600 hover:border hover:border-gray-600 hover:scale-110 hover:rotate-3 duration-100'>
                    Download CV
                    <BsFiletypeDoc />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about