import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {lazy} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Home = lazy(()=>import('./Components/Home.jsx'));
const About = lazy (() =>  import('./Components/About.jsx'));
const Skills = lazy (() =>  import('./Components/Skills.jsx'));
const Project = lazy (() =>  import('./Components/Project.jsx'));
const Education = lazy (() =>  import('./Components/Education.jsx'));
const Contact = lazy (() =>  import('./Components/Contact.jsx'));


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
