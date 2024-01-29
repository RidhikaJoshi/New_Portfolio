import React from 'react'
import contact from '../assets/contact.gif'
import FormFeild from './FormFeild'
import { IoMdContacts } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_octcxim', 'template_3nzsuie', form.current, 'qxwRJ6pnkruT0VJBe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      form.current.reset();

  };
  return (
    <div className='min-h-[90vh] flex items-center justify-center font-serif mt-6 mb-6'>

      <div className='w-[90%] md:w-[80%] min-h-[28rem] bg-slate-900 rounded-2xl flex md:flex-row flex-col '>
        {/* This is for the image-part */}
        <div className='md:w-[50%] w-full flex items-center justify-center'>
            <img className='rounded h-[25rem]' src={contact} alt="contact-img"/>
          
        </div>


        {/* this will be the form */}
        <div className='md:w-[50%] w-full h-[30rem] flex flex-col items-center justify-center '>
          <p className='md:text-4xl text-2xl font-semibold flex flex-row items-center gap-2 text-[#03F6FF]'><IoMdContacts /><div>Get in Touch</div></p>
           <form className="bg-slate-900 flex flex-col gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%]" ref={form} onSubmit={sendEmail}>
              <label className='text-[#03F6FF]'>Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900  text-white leading-tight focus:outline-none focus:shadow-outline" required type="text" name="user_name" />
              <label className='text-[#03F6FF]'>Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900  text-white leading-tight focus:outline-none focus:shadow-outline" required  type="email" name="user_email" />
              <label className='text-[#03F6FF]' >Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-900  text-white leading-tight focus:outline-none focus:shadow-outline" required name="message" />
              <input className="bg-[#03F6FF] hover:bg-[#4cced3]  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center" type="submit" value="Send" /> 
            </form>
        </div>
      </div>

    </div>
  )
}

export default Contact