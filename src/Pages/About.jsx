import React from 'react'
import HeroComponent from '../Components/HeroComponent'

const About = () => {

    const data = {
        name : "Gada Store",
    }

  return (
    <HeroComponent myData = {data}/>
  )
}

export default About