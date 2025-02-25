import React from 'react'
import Header from './Header'
import Home from './Home'
import Reviews from './Reviews'
import Services from './Services'
import Destinations from './Destinations'
import Footer from './Footer'
function Layout() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Destinations/>
      <Services/>
    
      <Footer/>
    </div>
  )
}

export default Layout
