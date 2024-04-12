import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { Toaster , toast } from 'react-hot-toast';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kcq5f8l', 'template_qabnrsd', form.current, 'HKAltfNatDH2owIvW')
      .then((result) => {
          toast.success('Sent Successful')
      }, (error) => {
          toast.error(error.text);
      });
    };

  return (
    <div className='max-h-max flex flex-col' id='contact'>
        <div className='flex flex-col justify-center items-center'>
            <Toaster />
            <h2 className='font-extrabold text-5xl'>Get in touch</h2>
            <h4 className='mt-4 font-bold text-gray-500 px-2 py-2'>Contact</h4>
        </div>
        <div className=''>
            {/* talk to me  */}
            <div className='flex md:flex-row flex-col items-center px-4 py-4'>
                <div className='flex flex-col flex-1 md:justify-center md:items-start justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-2xl font-bold px-4 py-4'>Talk to me</h3>
                        <a href="mailto:someone@example.com" className='flex flex-col justify-center items-center px-20 py-4 shadow-md duration-300 ease-in-out hover:rotate-6 hover:shadow-xl hover:scale-110 hover:border hover:border-gray-600 rounded-lg'>
                            <MdOutlineAlternateEmail size={20} />
                            <h3 className='font-bold'>Email</h3>
                            <p className='text-gray-500 font-semibold'>user@gmail.com</p>
                            <p className='mt-3 font-semibold'>Write me</p>
                        </a>
                        <a href="https://wa.me/+917543041995" className='flex flex-col justify-center items-center px-24 py-4 shadow-md rounded-lg duration-300 ease-in-out hover:-rotate-6 hover:shadow-xl hover:border hover:border-gray-600 hover:scale-110'>
                            <BsWhatsapp size={20} />
                            <h3 className='font-bold'>Whatsapp</h3>
                            <p className='text-gray-500 font-semibold'>999-888-666</p>
                            <p className='mt-3 font-semibold'>Write me</p>
                        </a>
                    </div>
                </div>
                {/* write project  */}
                <div className='flex flex-col justify-center items-center flex-1 w-full h-full   mt-6'>
                    <h2 className='py-2 px-2 text-2xl font-bold'>Write me your project</h2>
                    <form ref={form} onSubmit={sendEmail} className='md:w-[500px] sm:w-[500px] w-[300px] flex-1 mt-6'>
                        <div className='relative border border-gray-600 py-4 px-4 rounded-xl w-full' >    
                            <label className='absolute -top-4 left-5 z-10 px-1 py-1 bg-white font-semibold text-gray-500'>Name</label>                        
                            <input type="text" name='name'
                            placeholder='Insert your name' className='border-none outline-none w-full '/>
                        </div>
                        <div className='relative border border-gray-600 py-4 px-4 rounded-xl mt-4'>    
                            <label className='absolute -top-4 left-5 z-10 px-1 py-1 bg-white font-semibold text-gray-500'>Mail</label>                        
                            <input type="email" name='email'
                            placeholder='Insert your email' className='border-none outline-none w-full' />
                        </div>
                        <div className='relative border border-gray-600 py-4 px-4 rounded-xl mt-4'>    
                            <label className='absolute -top-4 left-5 z-10 px-1 py-1 bg-white font-semibold text-gray-500'>Project</label>                        
                            <textarea name="project"cols="10" rows="8" className='border-none outline-none resize-none w-full' placeholder='Write Query' ></textarea>
                        </div>
                        <button className='px-6 py-2 bg-gray-600 text-white mt-4 rounded-lg hover:border hover:border-gray-600 hover:scale-105 hover:text-gray-600 duration-300 hover:rotate-6 hover:bg-white' >Send it</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact