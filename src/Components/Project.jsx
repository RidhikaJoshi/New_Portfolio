import React from 'react'
import ProjectCard from './ProjectCard'
import quickexchange from '../assets/quickexchange.png'
import passwordgenerator from '../assets/passwordgenerator.png'
import anagram from '../assets/anagram.png'
import { FaHtml5,FaCss3Alt ,FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

function Project() {
  return (
    <div className='min-h-[90vh] w-full bg-slate-500  text-white flex flex-col items-center justify-center font-serif'>

      <p className='md:text-4xl font-bold mt-8 text-2xl'>My Recent Projects</p>
      <p>Here are a few projects I've worked on recently.</p>
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