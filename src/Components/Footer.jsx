import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { Slide,Hinge, Roll } from "react-awesome-reveal";

function Footer() {
  return (
    <div className='h-36 w-full flex flex-col items-center justify-evenly border-t-[1px] border-[#03F6FF] mb-0'>

      <div>
        <Slide direction='up'>
        <ul className='flex flex-row justify-evenly items-center gap-6'>
          <li className='text-2xl border-2  p-1.5 rounded-full  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://www.linkedin.com/in/ridhika-joshi-069164221/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></Link></li>
          <li className='text-2xl  border-2   p-1.5 rounded-full  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://github.com/RidhikaJoshi" target='_blank' rel="noopener noreferrer"><FaGithub/></Link></li>
          <li className='text-2xl border-2   p-1.5 rounded-full  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://twitter.com/ridhika_joshi" target='_blank' rel="noopener noreferrer"><FaTwitter /></Link></li>
          <li className='text-2xl border-2 p-1.5 rounded-full border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://medium.com/@ridhikasmrh" target='_blank' rel="noopener noreferrer"><FaMedium /></Link></li>
        </ul></Slide>
      </div>
      <Slide direction='up'><div className='flex flex-row items-center gap-2 text-[#03F6FF]'><div>Designed with</div><FaHeart /><div>by Ridhika Joshi</div></div></Slide>
       <Slide direction='up'><div className='text-[#03F6FF]'>&copy; 2024 Ridhika Joshi. All rights reserved.</div></Slide>

    </div>
  )
}

export default Footer