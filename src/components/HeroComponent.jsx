import React from 'react'
import './HeroComponent.css'
import {Link} from 'react-router-dom'
const HeroComponent = () => {
  return (
    <div className='call-to-action'>
      <div className='main-title'>
        <h1>Find your dream job today!</h1>
        <h3>A place where finding a job is as easy as a click</h3>
        <Link to="/search"><button>Get Started</button></Link>
      </div>
    </div>
  )
}

export default HeroComponent
