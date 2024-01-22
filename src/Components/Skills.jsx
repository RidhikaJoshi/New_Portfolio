import React from 'react'

function Skills() {
  return (
   <div className='min-h-[80vh] w-full text-white bg-red-400 flex flex-col items-center justify-center font-serif'>

        {/* This divison is for the heading and gif */}
          <div className=' min-h-[90vh] w-[90%] bg-green-400 flex md:flex-row flex-col-reverse justify-evenly md:mt-4 mb-4 gap-6'>

              <h1 className='md:text-4xl text-2xl font-bold text-[#03F6FF]'>Skills & Abilities</h1>
              {/* This div conatins gif */}
              <div className='md:w-[50%] w-full  flex items-center justify-center'> 
              {/* <img className='rounded-2xl ' src={reading}/> */}

                  


              </div>
          </div>

    </div>
  )
}

export default Skills