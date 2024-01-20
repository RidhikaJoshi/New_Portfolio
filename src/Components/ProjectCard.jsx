import React from 'react'

function ProjectCard() {
  return (
    <div className='min-h-96 w-full bg-yellow-700 border-2 rounded-3xl mb-6 p-4'>

      {/* This is the heading. */}
      <p className='md:text-4xl text-3xl font-semibold text-center mb-6'>This is my project.</p>


      <div className='w[full] flex md:flex-row m-2 justify-evenly flex-col'>

              {/* This is the project-image section */}
              <img className='h-96 md:w-[45%] w-full'src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />


              {/* This is the description of project. */}
              <div className='md:w-[45%] w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci voluptates repudiandae id recusandae exercitationem voluptate maiores odio nam at numquam porro voluptas dolorum aut possimus iure voluptatem, rerum reprehenderit vitae!</div>
      </div>
    </div>
  )
}

export default ProjectCard