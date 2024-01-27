import React from 'react'
import photo from '../assets/photo.jpg'
import { IoBookSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { Slide,Zoom} from "react-awesome-reveal";

function About() {
  return (
    <div className='min-h-[90vh] w-full text-white flex items-center justify-center font-serif mt-8 mb-8 '>

      <div className='md:w-[90%] w-[95%] min-h-[25rem] flex md:flex-row items-center justify-between flex-col m-2 gap-2'>
          {/* This div is for the text part */}
          <div className='md:w-[55%] flex flex-col justify-between w-[90%] '>
              <Slide direction='up'><p className='md:text-2xl font-bold text-center text-xl text-[#03F6FF]'>LET ME INTRODUCE MYSELF</p></Slide>
              <br/>
              <Slide direction='up' delay={0.5} ><p>I am Ridhika Joshi from Rishra, West Bengal, India. Currently, I’m pursuing my B.Tech. in Computer Science and Engineering from Academy of Technology, Adisaptagram.</p></Slide>
               <br/>
              <Slide direction='up'><p>I'm a dedicated individual with a passion for learning and problem-solving. I'm committed to excellence and always seeking opportunities to improve my skills. My focused work ethic and efficiency-driven mindset contribute to simplifying complexities and improving overall quality of life.</p></Slide>
               <br/>
              <Slide direction='up'><p>In addition to my passion for Coding and Development, my interests extend into various realms:</p></Slide>
               <br/>
              <ul>
                <Slide direction='up'><li className='flex items-center gap-1.5'> <div className='text-[#03F6FF]'><IoBookSharp /></div><div>Nourishing my mind through self-help Books.</div></li></Slide>
                <Slide direction='up'><li className='flex items-center gap-1.5'><div className='text-[#03F6FF]'><FaPaintBrush /></div><div>Expressing my creativity with a paintbrush in hand.</div></li></Slide>
                <Slide direction='up'><li className='flex items-center gap-1.5'><div className='text-[#03F6FF]'><FaPlane /></div><div>Embarking on journeys to new horizons.</div></li></Slide>
              </ul>
               <br/>
              <Slide direction='up'><p >“Endeavoring to create impactful contributions that bring about meaningful change.”</p></Slide>

          </div>



          {/* This div is for the image part */}
         
            <div className='md:w-[40%] h-[30rem] w-[90%] rounded-xl '><Zoom ><img className='h-[30rem] w-[90%] rounded-xl 'src={photo} loading="lazy" alt="My-photo"/></Zoom></div>
          

      </div>

    </div>
  )
}

export default About