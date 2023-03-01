import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'
import Iphone from '../../images/front.png'
import Ipad from '../../images/ipad.png'
import Mac from '../../images/mac.png'
import Airpods from '../../images/airpods.png'
import Iwatch from '../../images/watch.png'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.5}}
     className='hero'> 
      <div className='hero-top'>
        <h1 className='hero-top-title'>Apple shopping event</h1>
        <p className='hero-top-subtitle'>From November 25 to 28,
         get an Apple Gift Card when you buy an eligible product</p>
         <button><Link to='/mac'>Get an early look</Link></button>
      </div>
      <div className='hero-bottom'>
        <div className='hero-bottom-content'>
          <img src={Iphone} alt='iphone' className='hero-bottom-content-iphone child' width={100}></img>
          <img src={Ipad} alt='ipad' className='hero-bottom-content-ipad child'  width={200}></img>
          <img src={Airpods} alt='airpods' className='hero-bottom-content-airpods child'  width={100}></img>
          <img src={Iwatch} alt='watch' className='hero-bottom-content-watch child'  width={140}></img>
          <img src={Mac} alt='mac' className='hero-bottom-content-mac child'  width={450}></img>
        </div>
      </div>
    </motion.div>
  )
}
