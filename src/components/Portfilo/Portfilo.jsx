import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'

function Portfilo() {
  return (
    <div className='max-h-max py-10' id='portfilo'>
         {/* Qualification & Personel Journey  */}
         <div className='flex flex-col justify-center items-center mt-4 py-20 px-4'>
            <h2 className='text-5xl font-extrabold'>Qualification</h2>
            <h3 className='mt-4 font-bold text-gray-600'>My Personel Journey</h3>
         </div>
         <div className='flex justify-center items-center flex-col mt-7 py-4 px-4'>
               {/* Eduction & Experience  */}
                     <div className='flex flex-row items-center justify-between gap-20'>
                        <div className='flex gap-2 justify-center items-center'>
                            {/* Education  */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="#000"
                                                    stroke="#000"
                                                    strokeWidth="0.002"
                                                    version="1.1"
                                                    viewBox="0 0 245.83 245.83"
                                                    xmlSpace="preserve"
                                                    >
                                                    <path
                                                        fill="#010002"
                                                        d="M223.336 148.384l-.137-23.527 22.628-12.662-123.251-65L0 113.495l49.144 28.216.098
                                                        16.766.01 1.339.449-.215c-.518.703-.85 1.426-.84 2.149.039 8.246 33.326 14.772 74.41 14.548
                                                        41.064-.215 74.302-7.122 74.273-15.349 0-.723-.381-1.426-.889-2.149l.449.215v-1.339l-.088-16.834 
                                                        21.309-13.258.117 20.83c-2.345 1.006-3.976 3.312-3.957 6.009a6.397 6.397 0 006.458 6.37c3.586-.02 
                                                        6.429-2.912 6.409-6.439-.02-2.697-1.661-4.983-4.016-5.97zm-100.095 22.237c-36.452.205-66.017-3.801-66.046-8.91-.029-5.11 
                                                        29.496-9.399 65.949-9.585 36.462-.205 66.017 3.781 66.037 8.881.028 5.091-29.478 9.419-65.94 9.614zm72.094-43.438c-4.934-5.188-22.618-18.886-72.426-18.602-49.877.264-67.336 14.128-72.211 
                                                        19.394l-.029-4.963s14.147-21.524 72.202-21.827c58.025-.313 72.436 21.045 72.436 21.045l.028 4.953zm20.42 
                                                        35.016l-2.511 36.433c7.767-12.203 14.255-7.66 14.255-7.66l-.156-28.832c-8.345 3.274-11.588.059-11.588.059z"
                                                    ></path>
                                                </svg>
                                                <h3 className='font-bold'>Education</h3>
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                            {/* Personal Project  */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="#000"
                                                    version="1.1"
                                                    viewBox="0 0 512 512"
                                                    xmlSpace="preserve"
                                                    >
                                                    <path d="M349.659 106.146v-31.22c0-24.1-19.607-43.707-43.707-43.707H206.05c-24.1 0-43.707 19.607-43.707 43.707v31.22H0V480.78h512V106.146H349.659zM199.805 74.927a6.251 6.251 0 
                                                    016.244-6.244h99.902a6.251 6.251 0 016.244 6.244v31.22h-112.39v-31.22zm274.732 368.39H37.463V273.646c53.668 19.108 124.105 30.487 199.805 32.102v31.422h37.463v-31.422c75.7-1.616 146.137-12.995 
                                                    199.805-32.102v169.671zm0-209.724c-50.262 20.311-122.881 32.9-199.805 34.671v-30.996h-37.463v30.995c-76.924-1.771-149.543-14.36-199.805-34.671V143.61h437.073v89.983z"></path>
                                                </svg>
                                                <h3 className='font-bold'>Perosnal Project</h3>
                        </div>

                   </div>
                   {/* Name Of Education and name of perosonal project  */}
                    {/* Name of Eductaion timeline  */}
                        <div className='flex flex-row max-w-[900px] '>
                            <div className='flex flex-col gap-3 px-2 py-2 flex-1 '>
                                <div className='gap-10 py-5 px-2'>
                                        <h4 className='text-xl font-bold'>Master of Computer Application</h4>
                                        <p className='text-xs font-semibold text-gray-500'>Dr. D.Y.Patil Pratishthans Dr.D.Y.Patil Institute <br /> of Management Studies,Pune</p>
                                        <p className='flex items-center mt-2 gap-2 text-xs font-semibold'><BsCalendarDate size={15}/>2021 - 2023</p>
                                </div>

                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-xl font-bold'>Bachelor of Computer Application</h4>
                                    <p className='text-xs font-semibold text-gray-500'>Institute of Management Studies,Noida</p>
                                    <p className='flex items-center mt-2 gap-2 text-xs font-semibold'><BsCalendarDate size={15}/>2017 - 2020</p>
                                </div>

                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-xl font-bold'>+2 Secondary,School</h4>
                                    <p className='text-xs font-semibold text-gray-500'>Patna Central School,Patna,Bihar</p>
                                    <p className='flex items-center mt-2 gap-2 text-xs font-semibold'><BsCalendarDate size={15}/>2016</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 py-2 px-2 flex-1'>
                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-sm font-bold'>Amazon Clone</h4>
                                        <ul className='text-xs  ml-5 font-semibold list-disc text-gray-500 py-4 px-4'>
                                            <li>Amazon - Clone Project in Next.js and React.js is UI/UX Web Site Clean code. Reload Time 85 % Decrease Using NextJS (SSR and SSG).</li>
                                            <li>Dynamic Price and content with Amazon API. </li>
                                            <li>Using Tailwind CSS And CSS3 Responsive Page Mobile, Desktop </li>
                                            <li>Tools: TypeScript, NextJS, ReactJS, Tailwind CSS, CSS, HTML, JavaScript.</li>
                                        </ul>
                                </div>
                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-sm font-bold'>The Urban Pacific Real Estate</h4>
                                        <ul className='text-xs ml-5 font-semibold list-disc text-gray-500 py-2 px-2'>
                                            <li>The Urban Pacific Real Estate</li>
                                            <li> Real Estate Management System project in Django is a full stack Django web
                                                 application that offer a clean , Description and Interactive user interface for viewing
                                                 and registering for Real Estate </li>
                                            <li>A User and Agent authentication feature for Login / Registration, as a user Dashboard for display.</li>
                                            <li>Tools: Django, Html5 , CSS3 , JS , SqlLite3.</li>
                                        </ul>
                                </div>
                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-sm font-bold'>NetFlex-Clone</h4>
                                        <ul className='text-xs  ml-5 font-semibold text-gray-500 list-disc py-4 px-4'>
                                            <li>NETFLEX - CLONE Project in Next.js is UI/UX Web Site Clean code. Reload Time 85 % Decrease Using NextJS (SSR and SSG).</li>
                                            <li>Dynamic Background With TMDB API. </li>
                                            <li>Using Tailwind CSS And CSS3 Responsive Page Mobile, Desktop </li>
                                            <li>Tools: TypeScript, NextJS, ReactJS, Tailwind CSS, HTML, JavaScript.</li>
                                        </ul>
                                </div>
                                <div className='gap-10 py-5 px-2'>
                                    <h4 className='text-sm font-bold'>HoIiday2Ticket:Tourism</h4>
                                        <ul className='text-xs  ml-5 font-semibold text-gray-500 list-disc py-4 px-4'>
                                            <li>Django Hotel Management system Project in Django contains different features like Login and Sign Both manager and customer. </li>
                                            <li>Customer wants added Experience by Blog post And See the booking history and
                                                edit order and responsive page and tabs for home , abouts , blog and sign/login. </li>
                                            <li> Tools: Django, html, CSS , Javascript , SqlLite3. </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                   
         </div>
    </div>
  )
}

export default Portfilo