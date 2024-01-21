import React from 'react'

function FormFeild({name,type}) {
  return (
    <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      {name}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id= {name} type={type} placeholder= {name}/>
    </div>
  )
}

export default FormFeild