import Navigation from './components/Navigation'
import Meetup from './components/Meetup'
import React from 'react'
import NextMeetUp from './components/NextMeetUp'
import AboutMeetUp from './components/AboutMeetUp'
import Members from './components/Members'
import PastMeetUp from './components/PastMeetUp'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div>
      <Navigation />
      <Meetup />
      <NextMeetUp />
      <AboutMeetUp />
      <Members />
      <PastMeetUp />
      <Footer />
    </div>
  )
}

export default App;
