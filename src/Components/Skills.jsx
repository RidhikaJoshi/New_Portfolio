import React from 'react'
import SkillsCard from './miscellaneous/SkillsCard';
import reacticon from '../assets/react.png'
import cplus from '../assets/cplusplus.png'
import c from '../assets/c.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/javascript.png'
import redux from '../assets/redux.png'
import git from '../assets/Git.png'
import github from '../assets/Github.png'
import vscode from '../assets/vs-code.png'
import netlify from '../assets/netlify.png'
import heroku from '../assets/heroku.png'
import tailwind from '../assets/tailwind-css.png'
import bootstrap from '../assets/Bootstrap.png'
import chakra from '../assets/chakra.png'
import firebase from '../assets/firebase.png'
import leetcode from '../assets/leetcode.png'
import codeforces from '../assets/codeforces.png'
import GFG from '../assets/GFG.png'
import codechef from '../assets/codechef.png'
import hackerrank from '../assets/hackerrank.png'
import dsa from '../assets/DSa.png'
import postman from '../assets/postman.png'
import { FaLaptopCode } from "react-icons/fa6";
import {Link } from 'react-router-dom'

function Skills() {
  return (
    <div className='min-h-[80vh] w-full text-white  flex flex-col items-center justify-center font-serif'>

     
      <div className=' min-h-[90vh] md:w-[80%] w-[95%] flex  flex-col justify-center items-center mt-8 mb-4 '>

      {/* This section contains professional skill-set. */}

        <h1 className='md:text-4xl text-2xl flex flex-row items-center gap-2 font-bold text-[#03F6FF]'><FaLaptopCode /><div>Skills & Abilities</div></h1>


        {/* This division contains tech-stack */}

          <div className=' w-full min-h-96  flex-wrap flex items-center justify-between p-10 md:gap-6 gap-3 '>


              <SkillsCard icon={cplus} name="C++" />
              <SkillsCard icon={c} name="C" />
              <SkillsCard icon={java} name="Java" />
              <SkillsCard icon={python} name="Python" />
              <SkillsCard icon={html} name="HTML" />
              <SkillsCard icon={css} name="CSS" />
              <SkillsCard icon={js} name="JavaScript" />
              <SkillsCard icon={reacticon} name="React Js" />
              <SkillsCard icon={firebase} name="Firebase" />
              <SkillsCard icon={tailwind} name="Tailwind" />
              <SkillsCard icon={bootstrap} name="Bootstrap" />
              <SkillsCard icon={chakra} name="Chakra-UI" />
              <SkillsCard icon={redux} name="Redux" />
              <SkillsCard icon={git} name="Git" />
              <SkillsCard icon={github} name="Github" />
              <SkillsCard icon={postman} name="Postman" />
              <SkillsCard icon={dsa} name="DSA" />
              <SkillsCard icon={vscode} name="VS Code" />
              <SkillsCard icon={netlify} name="Netlify" />
              <SkillsCard icon={heroku} name="Heroku" />

          </div>
          <br/>
          {/* This div contains coding profiles */}
          <p className='md:text-4xl text-2xl flex flex-row items-center gap-2 font-bold text-[#03F6FF]'><FaLaptopCode /><div>Coding Profiles</div></p>

           <div className=' w-full mt-4  flex-wrap flex items-center justify-between p-10 gap-6 '>

            <Link to="https://leetcode.com/RIDHIKA_JOSHI/" target="_blank"><SkillsCard icon={leetcode} name="LeetCode" /></Link>
            <Link to="https://codeforces.com/profile/ridhika17" target="_blank"><SkillsCard icon={codeforces} name="Codeforces" /></Link>
            <Link to="https://auth.geeksforgeeks.org/user/qmq0dxjk1xbl7bp49wz1cmicj5xcpcqfmn6vd7oe" target="_blank"><SkillsCard icon={GFG} name="GFG" /></Link>
            <Link to="https://www.codechef.com/users/ridhikajoshi17" target="_blank"><SkillsCard icon={codechef} name="Codechef" /></Link>
             <Link to="https://www.hackerrank.com/profile/ridhikasmrh" target="_blank"><SkillsCard icon={hackerrank} name="Hackerrank" /></Link>
            
           </div>
      </div>

    </div>
  )
}

export default Skills