import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import LandingPage from '../Screens/LandingPage/LandingPage';

const Dashboard = () => {
  const navigation=useLocation();
  console.log(navigation.pathname)
  return (
    <div>
       <Header/>
       {navigation.pathname==="/"?<LandingPage/>:<Outlet/>}
       <Footer/>
    </div>
  )
}

export default Dashboard
