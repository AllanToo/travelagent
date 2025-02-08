import React from 'react'
import Header from './Header'
import Home from './Home'
import Reviews from './Reviews'
import Services from './Services'
function Layout() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Services/>
      <Reviews/>
    </div>
  )
}

export default Layout
