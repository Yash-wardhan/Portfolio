import React from 'react'
import { TiInputChecked } from 'react-icons/ti'

function Skills() {
  return (
    <div className='relative max-h-max md:py-20 md:px-8 py-20 px-4' id='skills'>
      <div className='flex flex-col justify-center items-center w-full px-4'>
        <h2 className='text-5xl font-extrabold py-10 px-2'>Skills</h2>
        <h4 className='text-1xl font-bold text-gray-500 px-2 py-2'>My Technical level</h4>
      </div>
        <div className='grid md:grid-cols-[500px_500px] justify-center gap-8 items-center md:mt-28 px-4 py-4'>
            {/* Frontend developer  */}
            <div className='flex flex-col justify-center items-center px-4 py-4 shadow-xl rounded-3xl border-gray-700 hover:-rotate-3 duration-300 ease-in-out hover:scale-110'>
                 <h1 className='text-2xl font-bold'>Frontend developer</h1>
                  <div className='grid grid-cols-2 md:grid-cols-[200px_200px] gap-5 place-content-center mt-10'>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>HTML5</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>CSS3/TailwindCSS</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>JavaScript/TypeScript</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>Bootstrap</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>GIT</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>React/Next</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                  </div>
            </div>

            {/* Backend developer  */}
            <div className='flex flex-col justify-center items-center px-4 py-4 shadow-xl rounded-3xl border-gray-700 hover:rotate-3 duration-300 ease-in-out hover:scale-110'>
                 <h1 className='text-2xl font-bold'>Backend developer</h1>
                  <div className='grid grid-cols-2  md:grid-cols-[200px_200px] gap-5 place-content-center mt-10'>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>Python</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>Django</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>MySql</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>C/C++</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>Java</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                      <div className='flex items-start'><TiInputChecked /><div><h4 className='font-semibold ml-2 text-[16px]'>Sql</h4><p className='font-semibold ml-2 text-gray-500 text-[14px]'>Basic</p></div></div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Skills