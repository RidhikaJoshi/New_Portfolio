import React, { useState } from 'react'
import SkillsCard from './miscellaneous/SkillsCard';
import reacticon from '../assets/react.png'
import cplus from '../assets/cplusplus.png'
import c from '../assets/c.png'
import java from '../assets/java.png'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/javascript.png'
import redux from '../assets/redux.png'
import git from '../assets/Git.png'
import github from '../assets/Github.png'
import vscode from '../assets/vs-code.png'
import netlify from '../assets/netlify.png'
import vite from '../assets/vite.png'
import tailwind from '../assets/tailwind-css.png'
import bootstrap from '../assets/Bootstrap.png'
import chakra from '../assets/chakra.png'
import appwrite from '../assets/appwrite.png'
import leetcode from '../assets/leetcode.png'
import codeforces from '../assets/codeforces.png'
import mongodb from '../assets/mongodb.png'
import express from '../assets/expressjs.png'
import nodejs from '../assets/nodejs.png'
import GFG from '../assets/GFG.png'
import codechef from '../assets/codechef.png'
import hackerrank from '../assets/hackerrank.png'
import postman from '../assets/postman.png'
import interviewbit from '../assets/interviewbit.svg'
import sql from '../assets/sql.png'
import python from '../assets/python.svg'
import { FaLaptopCode } from "react-icons/fa6";
import {Link } from 'react-router-dom'
import { BsBarChartFill } from "react-icons/bs";
import { BsBraces } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Skills() {
    const[lang,setlang]=useState(false);
    const[tech,settech]=useState(false);
    const[tools,settools]=useState(false);
    const[code,setcode]=useState(false);
  return (
    <div className='min-h-[100vh] w-full text-white  flex flex-col items-center justify-center font-serif'>

     
      <div className=' min-h-[90vh] md:w-[80%] w-[95%] flex  flex-col justify-center items-center mt-8 mb-4 gap-4 '>


        {/* This division contains Languages Known */}
        <div className='w-[95%] p-4 md:text-2xl text-xl flex flex-row bg-slate-900 items-center gap-2 font-bold text-[#03F6FF]'>
          <BsBraces />
          <div>Languages</div>
          <p
            className='ml-auto cursor-pointer'
            onClick={() => {
              setlang((prev) => !prev);
            }}
          >
            {lang ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </p>
        </div>
        <div className={`w-full ${lang ? 'hidden' : 'min-h-60'} flex-wrap flex items-center md:justify-evenly justify-between md:p-10 p-8 md:gap-6 gap-2`}>

              <SkillsCard icon={cplus} name="C++" />
              <SkillsCard icon={c} name="C" />
              <SkillsCard icon={java} name="Java" />
              <SkillsCard icon={html} name="HTML" />
              <SkillsCard icon={css} name="CSS" />
              <SkillsCard icon={js} name="JavaScript" />
              <SkillsCard icon={python} name="Python" />
              <SkillsCard icon={sql} name="SQL" />

          </div>


        {/* This division contains Technologies/Framework */}
          <div className='w-[95%] p-4 md:text-2xl text-xl  flex flex-row  bg-slate-900 items-center gap-2 font-bold text-[#03F6FF]'><BsBarChartFill /><div>Technologies/Frameworks</div><p className='ml-auto cursor-pointer' onClick={() => settech((prev) => !prev)}> {tech ? <IoIosArrowDown /> : <IoIosArrowUp />}</p></div>
           <div className={`w-full ${tech ? 'hidden' : 'min-h-60'} flex-wrap flex items-center justify-between md:p-10 p-8 md:gap-6 gap-2`}>
              <SkillsCard icon={reacticon} name="React Js" />
               <SkillsCard icon={mongodb} name="MongoDB" />
              <SkillsCard icon={nodejs} name="Node Js" />
              <SkillsCard icon={express} name="Express Js" />
              <SkillsCard icon={tailwind} name="Tailwind" />
              <SkillsCard icon={bootstrap} name="Bootstrap" />
              <SkillsCard icon={chakra} name="Chakra-UI" />
              <SkillsCard icon={redux} name="Redux" />
              <SkillsCard icon={vite} name="Vite" />
             
          </div>





          <div className=' w-[95%] p-4 md:text-2xl text-xl  flex flex-row bg-slate-900 items-center gap-2 font-bold text-[#03F6FF]'><IoSettings /><div>Developer Tools</div><p className='ml-auto cursor-pointer' onClick={() => settools((prev) => !prev)}> {tools ? <IoIosArrowDown /> : <IoIosArrowUp />}</p></div>

        <div className={`w-full ${tools ? 'hidden' : 'min-h-60'} flex-wrap flex items-center justify-between md:p-10 p-8 md:gap-6 gap-2`}>
              <SkillsCard icon={appwrite} name="Appwrite" />
              <SkillsCard icon={vscode} name="VS Code" />
              <SkillsCard icon={netlify} name="Netlify" />
              <SkillsCard icon={git} name="Git" />
              <SkillsCard icon={github} name="Github" />
              <SkillsCard icon={postman} name="Postman" />
             

          </div>
          
          {/* This div contains coding profiles */}
         <p className=' w-[95%] p-4 md:text-2xl text-xl  flex flex-row bg-slate-900 items-center gap-2 font-bold text-[#03F6FF]'><FaLaptopCode /><div>Coding Profiles</div><p className='ml-auto cursor-pointer' onClick={() => setcode((prev) => !prev)}> {code ? <IoIosArrowDown /> : <IoIosArrowUp />}</p></p>

           <div className={`w-full ${code ? 'hidden' : 'min-h-60'} flex-wrap flex items-center justify-between md:p-10 p-8 md:gap-6 gap-2`}>

            <Link to="https://leetcode.com/RIDHIKA_JOSHI/" target="_blank" rel="noopener noreferrer"><SkillsCard icon={leetcode} name="LeetCode" /></Link>
            <Link to="https://codeforces.com/profile/ridhika17" target="_blank" rel="noopener noreferrer"><SkillsCard icon={codeforces} name="Codeforces" /></Link>
            <Link to="https://auth.geeksforgeeks.org/user/qmq0dxjk1xbl7bp49wz1cmicj5xcpcqfmn6vd7oe" target="_blank" rel="noopener noreferrer"><SkillsCard icon={GFG} name="GFG" /></Link>
            <Link to="https://www.codechef.com/users/ridhikajoshi17" target="_blank" rel="noopener noreferrer"><SkillsCard icon={codechef} name="Codechef" /></Link>
             <Link to="https://www.hackerrank.com/profile/ridhikasmrh" target="_blank" rel="noopener noreferrer"><SkillsCard icon={hackerrank} name="Hackerrank" /></Link>
             <Link to="https://www.interviewbit.com/profile/ridhika-joshi" target="_blank" rel="noopener noreferrer"><SkillsCard icon={interviewbit} name="InterviewBit" /></Link>

            
           </div>
      </div>

    </div>
  )
}

export default Skills