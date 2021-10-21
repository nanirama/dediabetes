import React from 'react'
import HeroBox from '../components/HeroBox'

const Hero = ({ showPerson }) => {
  return <header className="max-w-full max-w-screen-xl mx-1 md:mx-4 lg:mx-8">{showPerson && <HeroBox />}<p className="hidden">DeDiabetes</p></header>
}

export default Hero
