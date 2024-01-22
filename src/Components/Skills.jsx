import React from 'react'
import { FaReact } from "react-icons/fa";
import SkillsCard from './miscellaneous/SkillsCard';
import reacticon from '../assets/react.png'
import cplus from '../assets/cplusplus.png'
import c from '../assets/c.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import redux from '../assets/redux.png'

function Skills() {
  return (
   <div className='min-h-[80vh] w-full text-white  flex flex-col items-center justify-center font-serif'>

        {/* This divison is for the heading and gif */}
          <div className=' min-h-[90vh] w-[90%] bg-green-400 flex  flex-col justify-center items-center md:mt-4 mb-4 gap-6'>

              <h1 className='md:text-4xl text-2xl font-bold text-[#03F6FF]'>Skills & Abilities</h1>


              {/* This division contains tech-stack */}
            
              <div className=' w-full min-h-96  flex-wrap flex items-center justify-evenly p-4 gap-4 bg-red-800 '> 
             
                     
                       <SkillsCard icon={cplus} name="C++"/>
                       <SkillsCard icon={c} name="C"/>
                        <SkillsCard icon={java} name="Java"/>
                         <SkillsCard icon={python} name="Python"/>
                         <SkillsCard icon={html} name="HTML"/>
                          <SkillsCard icon={css} name="CSS"/>
                          <SkillsCard icon={js} name="JavaScript"/>
                          <SkillsCard icon={reacticon} name="React Js"/>
                          <SkillsCard icon={redux} name="Redux"/>



              </div>
          </div>

    </div>
  )
}

export default Skills