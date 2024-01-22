import React from 'react'

function SkillsCard({icon,name}) {
  return (
    
    <div className='h-[8.5rem] w-[8.5rem] bg-black flex flex-col border-[1px] hover:shadow-lg hover:shadow-cyan-500/50 border-[#03F6FF] justify-evenly items-center text-2xl  rounded-xl'>
        <img className='h-20 w-20' src={icon}/>
        <span className='text-2xl'>{name}</span>
    </div>
  )
}

export default SkillsCard