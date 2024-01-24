import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PreLoader from './Components/Preloader'


function App() {
const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <PreLoader />;
  
  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App
