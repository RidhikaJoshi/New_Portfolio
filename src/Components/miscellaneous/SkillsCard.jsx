import React from 'react'

function SkillsCard({icon,name}) {
  return (
    
    <div className='md:h-[7.5rem] md:w-[7.5rem]  h-[6.5rem] w-[6.5rem] bg-black flex flex-col border-[1px] hover:shadow-lg hover:shadow-cyan-500/50 border-[#03F6FF] justify-evenly items-center  rounded-xl'>
        <img className=' md:h-16 md:w-16 h-12 w-12' src={icon} alt="Skills"/>
        <span className='md:text-lg text-md'>{name}</span>
    </div>
  )
}

export default SkillsCard