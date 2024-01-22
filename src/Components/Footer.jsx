import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='h-36 w-full flex flex-col items-center justify-evenly border-t-[1px] border-[#03F6FF]'>

      <div>
        <ul className='flex flex-row justify-evenly items-center gap-6'>
          <li className='text-2xl border-2  p-1.5  rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://www.linkedin.com/in/ridhika-joshi-069164221/" target='_blank'><FaLinkedin/></Link></li>
          <li className='text-2xl  border-2   p-1.5 rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://github.com/RidhikaJoshi" target='_blank'><FaGithub/></Link></li>
          <li className='text-2xl border-2   p-1.5 rounded  border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://twitter.com/ridhika_joshi" target='_blank'><FaTwitter /></Link></li>
          <li className='text-2xl border-2 p-1.5 rounded border-[#03F6FF] hover:text-[#03F6FF] text-white'><Link to="https://medium.com/@ridhikasmrh" target='_blank'><FaMedium /></Link></li>
        </ul>
      </div>
      <div className='flex flex-row items-center gap-2 text-[#03F6FF]'><FaHeart /><div>Made By Ridhika Joshi</div></div>
      <div className='text-[#03F6FF]'>&copy; 2024 Ridhika Joshi. All rights reserved.</div>

    </div>
  )
}

export default Footer