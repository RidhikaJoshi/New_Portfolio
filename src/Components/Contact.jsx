import React from 'react'
import contact from '../assets/contact.gif'
import FormFeild from './FormFeild'
import { IoMdContacts } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <div className='min-h-[90vh] flex items-center justify-center font-serif mt-6 mb-6'>

      <div className='w-[90%] md:w-[80%] min-h-[28rem] bg-white rounded-2xl flex md:flex-row flex-col '>
        {/* This is for the image-part */}
        <div className='md:w-[50%] w-full flex items-center justify-center'>
            <img className='rounded h-[25rem]' src={contact} alt="contact-img"/>
          
        </div>


        {/* this will be the form */}
        <div className='md:w-[50%] w-full h-[30rem] flex flex-col items-center justify-center '>
          <p className='md:text-4xl text-2xl font-semibold flex flex-row items-center gap-2'><IoMdContacts /><div>Get in Touch</div></p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%]">
                  {/* This div is for name field */}
                  <FormFeild name="Name" type="text" />
                  <FormFeild name="Email Address" type="email"/>
                  <FormFeild name="Your Message" type="text"/>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 flex flex-row items-center gap-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      <div>Submit</div> <BsFillSendFill />
                    </button>
                  
                  </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact