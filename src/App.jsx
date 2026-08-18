import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import AboutUs from './component/AboutUs'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <Contact />
    </div>
  )
}

export default App