import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Project from './Components/Project.jsx'
import Education from './Components/Education.jsx'
import Contact from './Components/Contact.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
    {
      path:"",
      element:<Home/>
    },
   {
        path:"about",
        element:<About/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"projects",
        element:<Project/>
      },
      {
        path:"education",
        element:<Education/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
