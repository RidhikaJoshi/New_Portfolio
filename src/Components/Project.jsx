import React from 'react'
import ProjectCard from './ProjectCard'
import quickexchange from '../assets/quickexchange.png'
import passwordgenerator from '../assets/passwordgenerator.png'
import anagram from '../assets/anagram.png'
import { FaHtml5,FaCss3Alt ,FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import project from '../assets/projects.gif'
import Tilt from 'react-parallax-tilt';

function Project() {
  return (
    <div className='min-h-[90vh] w-full bg-black  text-white flex flex-col items-center justify-center font-serif gap-10'>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] mt-10 flex md:flex-row flex-col-reverse items-center justify-evenly gap-6'>
        <Tilt className='h-96 md:w-[40%] w-full'><img className='rounded-2xl' src={project}/></Tilt>
        <div className=' md:w-[40%] w-full flex flex-col gap-4'>
          <h1 className='md:text-4xl font-bold mt-8 text-2xl text-center' >My Recent Projects</h1>
          <p className='text-center'>I engage in diverse projects encompassing a wide array of technologies, showcasing my proficiency as a full-stack developer. </p>
        </div>

      </div>
      {/* <p className='md:text-4xl font-bold mt-8 text-2xl'>My Recent Projects</p>
      <p>Here are a few projects I've worked on recently.</p> */}
      <br/>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] flex flex-wrap md:flex-row items-center justify-between flex-col m-2 gap-4'>

        <ProjectCard name="Password Generator" photo={passwordgenerator} description="Empower your online security with our Simple Password Generator application. Craft strong and customizable passwords effortlessly, adjusting length and including uppercase, lowercase, numbers, and special characters. With a user-friendly design, generating and copying secure passwords is just a click away. Stay protected with style." github="https://github.com/RidhikaJoshi/Password_Generator"  live="https://ridhikajoshi-password-generator.netlify.app/" icons={[<FaReact key='react' />,<SiTailwindcss key='tailwindcss' />]} />


        <ProjectCard name="QuickExchange" photo={quickexchange} description="Created a user-friendly currency converter web app that integrates real-time exchange rates through a third-party API. Users can effortlessly input values and choose both source and target currencies for conversion. The app boasts a responsive design, ensuring a seamless experience on different devices, making currency conversion simple and accessible."
        github="https://github.com/RidhikaJoshi/QuickExchange"  live="https://ridhikajoshi-quickexchange.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]}/>



        <ProjectCard name="Anagram Quest Game" photo={anagram} description="Dive into the world of language and fun with Anagram Quest—an engaging word puzzle game that challenges your brain! Unscramble jumbled letters to discover meaningful words, track your scores, and race against time with the built-in timer for an added thrill. Enjoy the game's interactive sound effects, and experience the ultimate word-solving adventure with responsive design across various screen sizes." github="https://github.com/RidhikaJoshi/Anagram_Quest"  live="https://anagram-quest.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]} />


      </div>



    </div>


  )
}

export default Project