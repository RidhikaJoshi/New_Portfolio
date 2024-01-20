import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <div className='min-h-[90vh] w-full bg-slate-500  text-white flex flex-col items-center justify-center font-serif'>

      <p className='md:text-4xl font-bold mt-8 text-2xl'>My Recent Projects</p>
      <p>Here are a few projects I've worked on recently.</p>
      <br/>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] flex flex-wrap md:flex-row items-center justify-between flex-col m-2 gap-2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />


      </div>



    </div>


  )
}

export default Project