import React from 'react';
import ProjectCard from './ProjectCard';
import quickexchange from '../assets/quickexchange.png';
import passwordgenerator from '../assets/passwordgenerator.png';
import anagram from '../assets/anagram.png';
import touristNest from '../assets/TouristNest.png';
import musicAcademy from '../assets/musicAcademy.png';
import { FaHtml5,FaCss3Alt ,FaReact} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Tilt from 'react-parallax-tilt';
import { Slide } from "react-awesome-reveal";
import { SiAppwrite } from "react-icons/si";
import videotweets from '../assets/VideoTweets.png'
import blog from '../assets/blogSphere.png'

function Project() {
  return (
    <div className='min-h-[100vh] w-full bg-black  text-white flex flex-col items-center justify-center font-serif gap-4'>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] mt-10  flex md:flex-row-reverse flex-col-reverse items-center justify-evenly gap-6 '>
        <div className='md:w-[50%] w-full flex items-center justify-center '> 

              <Tilt><img className='' src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif"></img></Tilt>
            </div>
        <div className='  md:w-[50%] w-full flex flex-col items-center md:justify-center gap-4'>
          <Slide direction='up'><h1 className='md:text-4xl font-bold mt-8 text-2xl text-center text-[#03F6FF]' >My Recent Projects</h1></Slide>
          <Slide direction='up'><p className='text-center'>I engage in diverse projects encompassing a wide array of technologies, showcasing my proficiency as a full-stack developer. </p></Slide>
        </div>

      </div>
      {/* <p className='md:text-4xl font-bold mt-8 text-2xl'>My Recent Projects</p>
      <p>Here are a few projects I've worked on recently.</p> */}
      <br/>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] flex flex-wrap md:flex-row items-center justify-between flex-col m-2 gap-4'>

      <ProjectCard name="VideoTweets" photo={videotweets} description="VideoTweets offers seamless sharing and discovery of multimedia content, including videos and tweets. Users can comment, like, and engage with content, create playlists, manage profiles, and subscribe to channels. Built on Node.js with Express.js, MongoDB, and Mongoose, it ensures secure authentication and authorization for users." github="https://github.com/RidhikaJoshi/VideoTweets"  live="https://documenter.getpostman.com/view/18992770/2sA2xpR8nu" icons={[<FaNodeJs key='NodeJs'/>,<SiExpress key='Express' />,<SiMongodb  key='Mongodb' />]} />

      <ProjectCard name="TouristNest" photo={touristNest} description="TouristNest offers secure user authentication for signing up, logging in, and logging out. Users can browse hotels, view details, make bookings, and manage their reservations seamlessly. The platform also supports Stripe for secure payment processing and is designed to provide an optimal experience across all devices." github="https://github.com/RidhikaJoshi/TouristNest"  live="https://touristnest.onrender.com/" icons={[<FaNodeJs key='NodeJs'/>,<SiExpress key='Express' />,<SiMongodb  key='Mongodb' />,<FaReact key='react' />,<SiTailwindcss key='tailwindcss' />]} />

      <ProjectCard name="BlogSphere" photo={blog} description="BlogSphere is a web application crafted for users to articulate their thoughts and ideas through published articles. It seamlessly incorporates user authentication, a robust rich text editor, and Appwrite as the backend, ensuring a smooth and secure experience for writers and readers." github="https://github.com/RidhikaJoshi/Blog"  live="https://blogsphere-swf7.onrender.com/" icons={[<SiAppwrite key='Appwrite'/>,<FaReact key='react' />,<SiTailwindcss key='tailwindcss' />]} />

      <ProjectCard name="MusicAcademy" photo={musicAcademy} description="The Music Academy website, built with Next.js, offers a comprehensive list of music courses, allowing users to explore various genres and instruments. The site features a responsive design to ensure an optimal user experience across all devices." github="https://github.com/RidhikaJoshi/music"  live="https://music-xi.vercel.app/" icons={[<RiNextjsFill key='NextjsFill'/>,<SiTailwindcss key='tailwindcss' />]} />

      <ProjectCard name="Password Generator" photo={passwordgenerator} description="Empower your online security with our Simple Password Generator application. Craft strong and customizable passwords effortlessly, adjusting length and including uppercase, lowercase, numbers, and special characters. With a user-friendly design, generating and copying secure passwords is just a click away. Stay protected with style." github="https://github.com/RidhikaJoshi/Password_Generator"  live="https://ridhikajoshi-password-generator.netlify.app/" icons={[<FaReact key='react' />,<SiTailwindcss key='tailwindcss' />]} />


      <ProjectCard name="QuickExchange" photo={quickexchange} description="Created a user-friendly currency converter web app that integrates real-time exchange rates through a third-party API. Users can effortlessly input values and choose both source and target currencies for conversion. The app boasts a responsive design, ensuring a seamless experience on different devices, making currency conversion simple and accessible."
      github="https://github.com/RidhikaJoshi/QuickExchange"  live="https://ridhikajoshi-quickexchange.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]}/>


      <ProjectCard name="Anagram Quest Game" photo={anagram} description="Dive into the world of language and fun with Anagram Quest—an engaging word puzzle game that challenges your brain! Unscramble jumbled letters to discover meaningful words, track your scores, and race against time with the built-in timer for an added thrill. Enjoy the game's interactive sound effects, and experience the ultimate word-solving adventure with responsive design across various screen sizes." github="https://github.com/RidhikaJoshi/Anagram_Quest"  live="https://anagram-quest.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]} />


      </div>



    </div>


  )
}

export default Project