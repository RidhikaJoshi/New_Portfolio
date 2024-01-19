import React from 'react'
import icon from '../assets/icon.ico'
import { Link,NavLink } from 'react-router-dom'
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className='w-full h-14 bg-slate-300 flex justify-around items-center'>
      <Link to='/'><img className='h-8 w-10' src={icon} /></Link>
      <div>
        <ul className='md:flex  hidden justify-evenly items-center font-semibold font-serif text-xl'>
          <li className='m-4 flex'><NavLink  to="/" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><IoHome />Home</NavLink></li>
          <li className='m-2'><NavLink  to="/about" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><FaUser />About</NavLink></li>
          <li className='m-2'><NavLink  to="/skills" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><RiUserStarFill />Skills</NavLink></li>
          <li className='m-2'><NavLink  to="/projects" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><AiOutlineFundProjectionScreen />Projects</NavLink></li>
          <li className='m-2'><NavLink  to="/education" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><BsFillMortarboardFill />Education</NavLink></li>
          <li className='m-2'><NavLink  to="/contact" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}><MdContactMail />Contact</NavLink></li>
        </ul>
      </div>
      <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between font-semibold font-serif text-xl">
             <li className='m-2'><NavLink  to="/" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>Home</NavLink></li>
          <li className='m-2'><NavLink  to="/about" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>About</NavLink></li>
          <li className='m-2'><NavLink  to="/skills" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>Skills</NavLink></li>
          <li className='m-2'><NavLink  to="/projects" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>Projects</NavLink></li>
          <li className='m-2'><NavLink  to="/education" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>Education</NavLink></li>
          <li className='m-2'><NavLink  to="/contact" className={({isActive})=>
                ` ${isActive ? "text-slate-500" : "text-red-900" }`}>Contact</NavLink></li>
            </ul>
          </div>
        </section><style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}

export default Header