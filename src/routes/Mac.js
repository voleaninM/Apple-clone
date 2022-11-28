import React from 'react'
import Header from '../components/header/Header';
import './Mac.scss'
import MacBook from '../images/mac.png';
import { motion } from 'framer-motion';

export default function Mac() {
  return (
    <motion.div 
      initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.4}}
    className='mac'>
      <Header/>
      <div className='mac-content'>
        <div className='mac-content-left'>
        <h3>MacBook Air</h3>
            <h1 className='mac-content-left-title'>
            Don’t take it lightly.
            </h1>
            <p className='mac-content-left-subtitle'>
                From $1199
            </p>
            <button>Buy Now</button>
        </div>
        <div className='mac-content-right'>
        <motion.img 
        transition={{
  delay: 0.5,
  x: { duration: 1 },
  default: { ease: "linear" }
}}
         whileHover={{
          scale:1.1,
          transition: { duration: 1 },
        }} src={MacBook} alt='mac' className='mac-content-right-img'></motion.img>
            <div className='mac-content-right-prices'>
                <div className='mac-content-right-prices-item first'>
                    <h3>MacBook Air</h3>
                    <p>M1 Chip</p>
                    <p className=''>From 999$</p>
                    <button>Buy</button>
                </div>
                <div className='mac-content-right-prices-item'>
                <h3>MacBook Air</h3>
                    <p>M2 Chip</p>
                    <p>From 1209$</p>
                    <button>Buy</button>
                </div>
                <div className='mac-content-right-prices-item last'>
                <h3>MacBook Pro 13</h3>
                    <p>M1 Chip</p>
                    <p>From 1299$</p>
                    <button>Buy</button>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
