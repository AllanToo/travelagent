import React from 'react'
import Header from './Header'
import Home from './Home'
import Reviews from './Reviews'
import Services from './Services'
import Destinations from './Destinations'
function Layout() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Destinations/>
      <Services/>
      <Reviews/>
    </div>
  )
}

export default Layout
