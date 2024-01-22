import React from 'react'

function SkillsCard({icon,name}) {
  return (
    
    <div className='h-32 w-32 bg-black flex flex-col justify-evenly items-center text-2xl  rounded-xl'>
        <img className='h-20 w-20' src={icon}/>
        <span className='text-2xl'>{name}</span>
    </div>
  )
}

export default SkillsCard