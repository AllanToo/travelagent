import React from 'react'
import Header from './Header'
import Home from './Home'
import Reviews from './Reviews'
function Layout() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <Reviews/>
    </div>
  )
}

export default Layout
