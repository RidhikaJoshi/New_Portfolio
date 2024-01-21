import React from 'react'
import ProjectCard from './ProjectCard'
import quickexchange from '../assets/quickexchange.png'
import passwordgenerator from '../assets/passwordgenerator.png'
import anagram from '../assets/anagram.png'
import { FaHtml5,FaCss3Alt ,FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import project from '../assets/projects.gif'
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";

function Project() {
  return (
    <div className='min-h-[90vh] w-full bg-black  text-white flex flex-col items-center justify-center font-serif gap-6'>
      <div className='md:w-[90%] w-[90%]  min-h-[25rem] mt-10 flex md:flex-row flex-col-reverse items-center justify-evenly gap-6'>
        <div className=' md:w-[40%] w-full flex items-center justify-center'>
       <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" id="ku" width="90%" baseProfile="tiny" class="svgmate" version="1" viewBox="300 150 550 570">

                <g id="wall">
                  <path fill="#03F6FF" d="M674 333c0 2-2 4-4 4H553c-2 0-4-2-4-4V203c0-2 2-4 4-4h117c2 0 4 2 4 4v130z">
                  </path>
                  <path id="Layer_33" fill="#7348a7" d="M639 240c-4-4-10-4-13 0l-77 77v15l5 5h116c2 0 4-2 4-4v-58l-35-35z"></path>
                </g>
                <g id="light">
                  <circle id="bulb" cx="550" cy="230" r="9" fill="#c2c0c5"></circle>
                  <path fill="#52057B" d="M550 201l-27 29h55z"></path>
                </g>
                <g id="Woman__x2F__Chair__x2F__Screen">
                  <g id="backleg_1_">
                    <path id="backlegpath" fill="#39065A" d="M651 521l47-90 24-16 12 11-29 44-46 56z"></path>
                    <path fill="#BCBCBD" d="M639 549l20-23-8-5s-8 6-14 6-26-7-26-7v10l28 19z"></path>
                  </g>
                  <g id="Chair_1_">
                    <g id="legs_1_">
                      <path fill="#34363E" d="M782 461l-65 36v-5l68-38v5z"></path>
                      <path fill="#34363E" d="M726 459l65 36v-4l-65-37z"></path>
                      <path fill="#52057B" d="M779 441l19 108 5 1-10-112zM729 440l-10 3-9 107h4l18-108z"></path>
                    </g>
                    <g id="seat_1_">
                      <path fill="#03F6FF" d="M804 360c15 0 18-2 19 20s-13 42-17 48-6 15-24 15h-70l-2-9s73 0 80-8 16-22 18-36 6-21 2-23-6-7-6-7z">
                      </path>
                      <path fill="#52057B" d="M796 359h8c7-1 13 2 12 17s-9 34-13 42-9 17-32 17h-64s16-8 35-8 22-11 26-21 11-28 13-37 6-10 15-10z">
                      </path>
                      <path id="womanshdow" fill="#413C69" d="M803 407c0-10-13-23-15-31s4-14 9-17h-4c-8 0-11 2-12 10l-5 17v3c3 8 6 16 6 24s-15 17-15 17l-5 5h9c22 0 27-9 31-17l1-11z">
                      </path>
                    </g>
                  </g>
                  <g id="back-arm">
                    <path fill="#F68E5A" d="M737 386l48-55s-4-25-17-7-35 54-35 54l4 8z"></path>z
                    <path id="lowervackarm" fill="#F68E5A" d="M669 361c4 1 13 4 15 2s8-4 11-2l42 25v-15s-46-22-51-19l-17 9z"></path>
                  </g>
                  <g id="womanscreen" class="womscreenmove">
                  </g>
                  <g id="Woman">
                    <g id="Front_leg">
                      <path id="leg" fill="#413C69" d="M737 435h-20s-2 1-1 2l26 78-11 1-42-74c-1-2-5-13 1-16l29-13 18 22z"></path>
                      <path fill="#BCBCBD" d="M750 537c-1 1-17 13-23 13s-13 0-14-2c0-5 4-2 7-4s11-8 12-15l-2-15 11-2 7 21 2 4z">
                      </path>
                    </g>
                    <g id="hairback">
                      <path id="shaded" fill="#585268" d="M809 308c11 4 11 23 2 32s-31-14-35-29-3-27 4-20c13 13 21 13 29 17z"></path>
                      <path id="main" fill="#585268" d="M784 364c6-3 32-21 30-34s-18-16-26-29-21 2-13 11 11 33 7 36c-16 17 2 16 2 16z"></path>
                    </g>
                    <g id="dress">
                      <path fill="#c4c1f7" d="M755 315c-4 5-29 31-18 39s19 13 16 31-33 28-42 31l20 19h28c11 0 29-7 29-24s-7-19-7-27l5-21c1-4 3-32-2-39-8-10-17-19-29-9z">
                      </path>

                    </g>
                    <g id="womanhead">
                      <g id="headbase">
                        <path fill="#F89F71" d="M768 321c-3 2-9 8-11-1s-4-8-6-7-18-22-15-30 31-34 34-7-2 24 3 29 2 5 0 8l-5 8z">
                        </path>
                        <path fill="#F89F71" d="M733 281c-6 9 9 32 15 32 4 0 6-3 5-4-4-1-15-23-15-28 1-6-5 0-5 0z">
                        </path>
                        <path fill="#F89F71" d="M767 321c1-1 2-1 1-2l-3-5c-1-6-9-7-12-3l-1 1c2 0 4 1 5 8 2 8 7 4 10 1z"></path>
                      </g>
                      <g id="hairbase">
                        <path id="tophairmain" fill="#585268" d="M764 285c-7-7-13-2-28-2-8 0-23-12-13-15 8-3 5-12 16-17s22-4 32 7 13 33 14 38 5 8 9 13c0 0-4 14-9 12s-7 2-13-4-4-5-5-8 1-16-1-20l-2-4z">
                        </path>
                        <path id="botshadehar" fill="#585268" d="M767 297c-2 10-7 34 11 26 20-8-9 3-11-26z"></path>
                        <path fill="#585268" d="M725 266c-7 4-13 5-12 9s9 8 25 8c-8-2-18-9-13-17z"></path>
                      </g>
                      <g id="glasses_1_">
                        <g id="glassshadow" fill="#F89F71">
                          <path d="M760 281l-16 8 2 3 2 4 3-8c0-2 10-6 10-6l-1-1zM737 297c-1-3-3-3-3-3l5-3-2 6z">
                          </path>
                        </g>
                        <g id="galssbody" fill="#FFF">
                          <path d="M762 278l-29 13-3 1v2h4l29-14-1-2"></path>
                          <path d="M746 298c3-2 1-5 0-6-1-2-2-4-5-3-3 2-1 5 0 6s4 4 5 3zM732 294c2-1 4 1 5 3s2 3 0 5-4-1-5-3-2-3 0-5z">
                          </path>
                        </g>
                      </g>
                    </g>
                    <g id="Front_arm">
                      <g id="lowerarm">
                        <path fill="#F89F71" d="M751 386h-2c-5 0-36-13-39-14s-10-1-12 1l-6 7h-14l11-13c2-2 7-4 13-3l46 6s7 14 3 16z">
                        </path>
                        <path id="highlights" fill="#F68E5A" d="M702 365c-6-1-11 1-13 3l-11 12h7l8-8c4-5 14-7 14-7h-5z"></path>
                      </g>
                      <path fill="#F89F71" d="M788 319c16 7 0 20-4 25l-25 33c-2 3-4 7-8 9l-3-16 19-41c4-8 10-15 21-10z"></path>
                      <path fill="#F68E5A" d="M788 319c-11-5-17 2-21 10l-9 19s12-22 22-26c3-1 5-3 8-3z"></path>
                    </g>
                  </g>
                </g>
                <g id="Laptop">
                  <path fill="#86858B" d="M647 339h7c2 0 3 1 4 3l15 38h38s-1 6-10 6h-31l-23-47z"></path>


                </g>
                <g id="Desk">
                  <path fill="#52057B" d="M369 386h178v10H369zM547 386h220v10H547z"></path>
                  <path fill="#e4d0fc" d="M548 396h9v154h-9z"></path>
                </g>
                <g id="flowerpot">
                  <g id="plants">

                  </g>

                </g>
                <g id="Man__x2F__chair__x2F__screen">
                  <path id="chairbackbar" fill="#52057B" d="M368 468h10v76h-10z"></path>
                  <path id="keyboard" fill="#D2D2D3" d="M507 380c3 0 4 2 1 4l-3 2h-55s4-6 9-6h48z"></path>
                  <g id="man">
                    <g id="man-body">
                      <g id="legs">
                        <g id="backleg">
                          <path id="foot" fill="#BCBCBD" d="M365 513l18-4 6 12s-1 15 6 22l10 5c-1 2-18 2-20 2l-14-9c-6-6-10-22-6-28z">
                          </path>
                          <path id="bottombackleg" fill="#413C69" d="M384 509s45-10 45-16c0-4-7-7-6-10 5-9 24-13 30-3 5 8 0 27-9 29l-55 12-5-12z">
                          </path>
                          <path id="topbbackleg" fill="#413C69" d="M415 474l-26-34c1 0-10-11 12-11s33 4 40 10 14 53 11 60-21-4-28-14l-9-11z"></path>
                        </g>
                        <g id="Front-leg">
                          <path id="frontfoot" fill="#BCBCBD" d="M446 529v21l40-1 2-9s-12 1-20-3-9-8-9-8h-13z">
                          </path>
                          <g id="bot">
                            <path fill="#39065A" d="M459 529c5-15 21-89 20-95s-8-18-18-8-19 0-18 26l3 77h13z">
                            </path>
                            <path id="shade_1_" fill="#39065A"  d=" M444 488c7-15 19-35 11-42-5-4-13-2-13-2l2 44z"></path>
                          </g>
                          <g id="top">
                            <path fill="#39065A" d="M410 408c19 3 62 9 67 18s0 14 0 20-11-2-23-2l-99-2c-7 0-12-4-9-18 7-39 64-16 64-16">
                            </path>
                            <path id="shade" fill="#39065A"  d=" M397 417c66 10 80 9 80 9s-6-14-70-18c-13 1-10 9-10 9z"></path>
                          </g>
                        </g>
                      </g>
                      <g id="head">
                        <g id="face">
                          <path fill="#F89F71" d="M411 281c0-12-8-25-19-16s-21 23-18 31 2 24 2 24c0 9 25 18 23 0s6-10 9-10 2 0 2-5l1-24z">
                          </path>
                          <path id="faceglow" fill="#eda682" d="M411 264c5 5 6 23 3 32s-6 5-5 1c1-2 3-23-2-29-5-5 4-4 4-4z"></path>
                        </g>
                        <g id="hair">
                          <path fill="#585268" d="M396 287c-2-9-1-14 3-15s15-21-1-22c-17 0-26-14-33 0s4 19 4 19-10 2-9 14 9 12 12 15c5 7 2 8 4 11 0 0 11-2 11-10s-4-15-1-18 8 1 7 19c-1 13 4 20 7 21s15 5 16 1 0-12-3-18c-1-3 2-9 0-11-3-2-4 6-8 5s-7-5-9-11z">
                          </path>
                          <path fill="#585268" d="M399 272c4-1 10-1 14-8s7-19 2-22-1 9-17 8c-27-1-3 23 1 22z" class="mankauf"></path>
                        </g>
                      </g>
                      <g id="torso">
                        
                        <path id="shirt" fill="#c4c1f7" d="M357 340l19-19h11c40 0 40 7 30 64-7 35-13 32-32 39-12 5-22 5-35 4s7-88 7-88z"></path>
                      </g>
                      <g id="arm">
                        <g id="Bluearmbot">
                          <path fill="#F68E5A" d="M487 380c-5-4-11-12-16-10-7 3-6 10 3 10h13z"></path>
                          <path fill="#F68E5A" d="M437 384l34-14-4 6-27 19z"></path>
                          <path fill="#F89F71" d="M440 395s20-16 26-19c4-2 10 1 11 4h-7c-5 6-14 20-22 23-1 1-8-8-8-8z"></path>
                        </g>
                        <path id="Bluearmtop" fill="#F89F71" d="M404 360l31 40c5 4 9 4 10 4 10-1-4-5-5-11l-10-54c-28-6-26 21-26 21z">
                        </path>
                        <path id="armhighlight" fill="#F68E5A" d="M439 386l-15-37 7-7z"></path>
                        <path id="toparm" fill="#c2bff5" d="M406 322c22-5 26 18 24 21-3 8-26 19-26 19l-8-15c-8-18 10-25 10-25z">
                        </path>
                        <path id="toparmshade" fill="#c2bff5" d="M418 334c-5-7-10-13-13-11-8 2-15 14-8 27 4 9 7 12 7 12s15-7 19-12c3-3-3-13-5-16z">
                        </path>
                      </g>
                    </g>
                  </g>
                  <g id="Chair">
                    <path id="foot_1_" fill="#52057B" d="M337 550h73l-10-13h-52z"></path>
                    <g id="seat">
                      <path fill="#52057B" d="M371 442l53 1c3 0 6 0 6 7 0 5-3 6-6 6h-22s-2 6-4 7h-14l-4 12h-15l-5-12-3-8 14-13z">
                      </path>
                      <path fill="#03F6FF" d="M326 449c0 4 3 7 11 7h47s-5-1-5-6c0-3 0-8 5-8h-48c-7 0-10 2-10 7z">
                      </path>
                    </g>
                    <g id="backrest">
                      <path fill="#52057B" d="M349 340c12 0 19-2 20 8l7 41c2 14 4 29-18 29 7-5 12-7 12-10 0 0-6-56-12-61l-9-7z">
                      </path>
                      <path fill="#03F6FF" d="M318 340c-8 0-12 5-10 17l8 48c2 8 5 13 14 13h29s14-2 12-19-6-32-8-45-7-14-14-14h-31z">
                      </path>
                      <path fill="#dbd9fa" d="M332 376c-6 0-12-1-9 11l5 24c1 5 1 6 8 6h19s7 1 5-8l-5-25c-1-5-1-8-9-8h-14z"></path>
                      <path fill="#36474A" d="M345 395l2 1 9 49c1 6 5 11 7 12s2 6 2 6-8-2-10-3-7-25-7-25l-3-28-2-11 2-1z"></path>
                      <path fill="#52057B" d="M332 395l9 51c1 8 3 16 13 17h11s-7-3-9-6c-4-4-7-28-7-28l-4-34h-13z">
                      </path>
                    </g>
                  </g>
                  <g id="Man_screen">
                    <g className="redskmove">
                      <path fill="#a995ce" d="M574 360c0 2-2 4-4 4h-89c-2 0-4-2-4-4v-69c0-2 2-4 4-4h89c2 0 4 2 4 4v69z" className="redscreen"></path>
                    </g>
                    <g className="greenscrmove">
                      <g className="greenscreen">
                        <path fill="#9562d3" d="M523 337c0 2-2 4-4 4h-68c-2 0-4-2-4-4v-46c0-2 2-4 4-4h68c2 0 4 2 4 4v46z"></path>
                        <path fill="#F7FCFB" d="M517 307c0 2-2 4-4 4h-51c-2 0-4-2-4-4v-4c0-2 2-4 4-4h51c2 0 4 2 4 4v4z"></path>
                        <path fill="#3B064D" d="M492 326c0 2-2 4-4 4h-26c-2 0-4-2-4-4v-2c0-2 2-4 4-4h26c2 0 4 2 4 4v2z"></path>
                      </g>
                    </g>
                    <g className="screenbutton">

                      <circle cx="523" cy="314" r="18" fill="#52057B"></circle>
                      <path fill="#bb86fc" d="M523 309l-4 8h8z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
        <div className=' md:w-[40%] w-full flex flex-col gap-4'>
          <h1 className='md:text-4xl font-bold mt-8 text-2xl text-center text-[#03F6FF]' >My Recent Projects</h1>
         <p className='text-center'>I engage in diverse projects encompassing a wide array of technologies, showcasing my proficiency as a full-stack developer. </p>
        </div>

      </div>
      {/* <p className='md:text-4xl font-bold mt-8 text-2xl'>My Recent Projects</p>
      <p>Here are a few projects I've worked on recently.</p> */}
      <br/>
      <div className='md:w-[90%] w-[90%] min-h-[25rem] flex flex-wrap md:flex-row items-center justify-between flex-col m-2 gap-4'>

        <ProjectCard name="Password Generator" photo={passwordgenerator} description="Empower your online security with our Simple Password Generator application. Craft strong and customizable passwords effortlessly, adjusting length and including uppercase, lowercase, numbers, and special characters. With a user-friendly design, generating and copying secure passwords is just a click away. Stay protected with style." github="https://github.com/RidhikaJoshi/Password_Generator"  live="https://ridhikajoshi-password-generator.netlify.app/" icons={[<FaReact key='react' />,<SiTailwindcss key='tailwindcss' />]} />


        <ProjectCard name="QuickExchange" photo={quickexchange} description="Created a user-friendly currency converter web app that integrates real-time exchange rates through a third-party API. Users can effortlessly input values and choose both source and target currencies for conversion. The app boasts a responsive design, ensuring a seamless experience on different devices, making currency conversion simple and accessible."
        github="https://github.com/RidhikaJoshi/QuickExchange"  live="https://ridhikajoshi-quickexchange.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]}/>



        <ProjectCard name="Anagram Quest Game" photo={anagram} description="Dive into the world of language and fun with Anagram Quest—an engaging word puzzle game that challenges your brain! Unscramble jumbled letters to discover meaningful words, track your scores, and race against time with the built-in timer for an added thrill. Enjoy the game's interactive sound effects, and experience the ultimate word-solving adventure with responsive design across various screen sizes." github="https://github.com/RidhikaJoshi/Anagram_Quest"  live="https://anagram-quest.netlify.app/" icons={[<FaHtml5 key='html5' />, <FaCss3Alt key='css3' />,<IoLogoJavascript key='javascript' />]} />


      </div>



    </div>


  )
}

export default Project