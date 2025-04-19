import React from 'react'
import Header from './Header'
import Home from './Home'
import Reviews from './Reviews'
import Services from './Services'
import Destinations from './Destinations'
import Footer from './Footer'
import Aboutus from './Aboutus'
import Promotion from './Promotion'
import LanguageSwitcher from './LanguageSwitcher'
function Layout() {
  return (
    <div className='App'>
      <LanguageSwitcher/>
      <Header/>
      <Promotion/>
      <Home/>
      
      <Destinations/>
      <Services/>
      <Aboutus/>
    
    
    </div>
  )
}

export default Layout
