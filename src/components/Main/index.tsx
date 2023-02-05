import React from 'react'
import Navbar from '../UI/Navbar'
import "./index.css"
import SearchBar from '../UI/SearchBar'
import BottomNavbar from '../UI/BottomNavbar'
import EventMain from '../MainUI/EventMain'
import Destinations from '../MainUI/Destinations'
import Experience from '../MainUI/Experience'
import Footer from '../MainUI/Footer'

const Index = () => {
  return (
    <div>
      <div className='container'>
        <div className="layout"></div>
        <Navbar />
        <div className="content">
          <h1>Enjoy Your Vacation With Us</h1>
        </div>
        <SearchBar />
        <BottomNavbar />
    </div>
    <div className='event'>
      <div className="layout"></div>
      <EventMain  />
    </div>
    <div className="destination">
      <Destinations />
    </div>
    <div className="event__soon">
      <EventMain />
    </div>
    <div className="experience">
      <Experience />
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default Index
