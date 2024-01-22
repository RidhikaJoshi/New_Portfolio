import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoDocumentText } from "react-icons/io5";

function Home() {

   const [typetext, setTypetext] = useState("");
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    "MERN Stack Developer",
    "Open Source Enthusiast",
    "Competitive Coder",
  ];

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (textIndex === textArray[textArrayIndex].length - 1) {
        setIsDeleting(true);
      }
      if (textIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setTextArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
      if (isDeleting) {
        setTypetext((text) => text.slice(0, Math.max(0, textIndex - 1)));
        setTextIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setTypetext((text) => text + textArray[textArrayIndex][textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);
    return () => clearTimeout(typingTimeout);
  }, [typetext, textIndex, isDeleting, textArrayIndex, textArray]);

  return (
    <div className='min-h-[90vh] w-full text-white flex items-center justify-center font-serif  mb-8 '>

      <div className='md:w-[90%] w-[95%] min-h-[25rem]  flex md:flex-row items-center justify-between flex-col mt-6 gap-1'>

      {/* This div contains writing part */}
      <div className='h-96 md:w-[60%] w-[95%] flex flex-col justify-center items-center gap-7 '>
          <p className='md:text-2xl text-xl font-medium font-serif'>Hi There!</p>
            <p className='md:text-5xl text-3xl  font-bold font-serif'>I'm Ridhika Joshi</p>

            <p className='md:text-4xl  text-2xl font-semi-bold font-serif text-[#03F6FF]'> {typetext}|</p>

            <button className='border-2 rounded-xl p-2 text-lg text-[#03F6FF] flex flex-row items-center gap-2 hover:text-white hover:border-[#03F6FF]'><div>Resume</div><IoDocumentText /></button>


            <ul className='flex flex-row justify-evenly items-center gap-6'>
                  <li className='text-2xl border-2  p-1.5  rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://www.linkedin.com/in/ridhika-joshi-069164221/" target='_blank'><FaLinkedin/></Link></li>
                  <li className='text-2xl  border-2   p-1.5 rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://github.com/RidhikaJoshi" target='_blank'><FaGithub/></Link></li>
                  <li className='text-2xl border-2   p-1.5 rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://twitter.com/ridhika_joshi" target='_blank'><FaTwitter /></Link></li>
                  <li className='text-2xl border-2 p-1.5 rounded border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://medium.com/@ridhikasmrh" target='_blank'><FaMedium /></Link></li>
            </ul>

      </div>


      {/* This div contains image */}
      <div className='h-96 md:w-[40%] w-[95%] '>
           <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/f5d2d866-d25c-4873-8d82-425d2c62fc2e" width="500"></img>
      </div>

      </div>

    </div>
  )
}

export default Home