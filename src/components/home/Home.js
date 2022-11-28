import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
        <Header/>
        <Hero/>
    </div>
  )
}
