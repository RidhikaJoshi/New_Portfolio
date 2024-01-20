import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

function ProjectCard({name,photo,description,icons,live,github}) {
  return (
    <div className='md:min-h-96 min-h-[50rem] w-full bg-yellow-700 border-2 rounded-3xl mb-6 p-4'>

      {/* This is the heading. */}
      <p className='md:text-4xl text-3xl font-semibold text-center mt-6 mb-6'>{name}</p>


      <div className='w[full] flex md:flex-row m-2 justify-evenly flex-col'>

              {/* This is the project-image section */}
              <img className='h-96 md:w-[45%] w-full'src={photo} />

             
              {/* This is the description of project. */}
              <div className='md:w-[45%] w-full text-lg flex flex-col gap-5 md:justify-around '>
                {description}
                <div>
                    <p className='text-2xl font-medium'>Tech Stack: </p>
                    <div className='flex flex-row justify-start text-4xl gap-3'>
                                {icons.map((icon, index) => (
                                <div key={index}>{icon}</div>))}
                    </div>
                </div>

                <div className='flex flex-row justify-start text-xl font-medium gap-4'>
                  <button className='border-2 rounded-xl  flex flex-row items-center gap-2  p-2'><div><Link to={live} target="_blank">Live</Link></div> <RiLiveFill /></button>
                  <button className='border-2 rounded-xl flex flex-row items-center gap-2 p-2'><div><Link to={github} target="_blank">Github</Link></div> <FaGithub /></button>
                </div> 
              </div>

               
      </div>
    </div>
  )
}

export default ProjectCard