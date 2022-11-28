import React from 'react'
import Header from '../../components/header/Header'
import watchRoute from '../../images/watchRoute.png'
import './Watch.scss'
import {AiFillApple} from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function Watch() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.5}}
     className='watch'>
    <Header/>
    <div className='watch-content'>
      <div className='watch-content-left'>
         <div className='watch-content-left-logo'>
            <div><AiFillApple/></div> 
            <h3>Watch</h3>
         </div>
 
          <h1 className='watch-content-left-title'>
          Adventure awaits.
          </h1>
          <p className='watch-content-left-subtitle'>
          From $33.29/mo. for 24 mo. or $799 before trade‑in1.
          </p>
          <button>Buy Now</button>
          <div className='watch-content-left-info'>
             <h3>Family members who don‘t have an iPhone can stay in touch with Apple Watch.</h3>
              <button>Try it Free </button>
          <button>Learn more</button>
          </div>
         
      </div>
      <div className='watch-content-right'>
          <motion.img 
         whileHover={{
          scale:1.1,
          transition: { duration: 1 },
        }}
          src={watchRoute} alt='watch' className='watch-content-right-img'></motion.img>
          <div className='watch-content-right-prices'>
              <div className='watch-content-right-prices-item first'>
                  <h3>Apple Watch Series 8</h3>
                  <p >From $399</p>
                  <button>Buy</button>
              </div>
              <div className='watch-content-right-prices-item'>
              <h3>Apple Watch SE 2022</h3>
                  <p>From $249</p>
                  <button>Buy</button>
              </div>
              <div className='watch-content-right-prices-item last'>
              <h3>Apple Watch Ultra</h3>
                  <p>From $599</p>
                  <button>Buy</button>
              </div>
          </div>
      </div>
    </div>
  </motion.div>
  )
}
