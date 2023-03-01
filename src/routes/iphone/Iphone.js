import React from 'react'
import Header from '../../components/header/Header'
import IphoneRoute from '../../images/iphoneRoute.png'
import './Iphone.scss'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function Iphone() {
  return (
    <motion.div
       initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.5}}
     className='iphone'>
      <Header/>
      <div className='iphone-content'>
        <div className='iphone-content-left'>
            <h3>New Iphone 14 </h3>
            <h1 className='iphone-content-left-title'>
            Big and bigger.
            </h1>
            <p className='iphone-content-left-subtitle'>
            From $33.29/mo. for 24 mo. or $799 before trade‑in1.
            </p>
            <Link to={'/shop'}><button>Shop</button></Link>
            <div className='iphone-content-left-info'>
               <h3> Get 3 months of Apple TV+ free
                when you buy an iPhone.</h3>
                <button>Try it Free </button>
            <button>Learn more</button>
            </div>
           
        </div>
        <div className='iphone-content-right'>
        <motion.img 
         whileHover={{
          scale:1.1,
          transition: { duration: 1 },
        }}
            
             src={IphoneRoute} alt='iphone' className='iphone-content-right-img'></motion.img>
            <div className='iphone-content-right-prices'>
                <div className='iphone-content-right-prices-item first'>
                    <h3>Iphone 14</h3>
                    <p>A total powerhouse.</p>
                    <p className=''>From $799</p>
                    <Link to={'/shop'}><button>Shop</button></Link>
                </div>
                <div className='iphone-content-right-prices-item'>
                <h3>Iphone 14 Pro</h3>
                    <p>The ultimate iPhone.</p>
                    <p>From $999</p>
                    <Link to={'/shop'}><button>Shop</button></Link>
                </div>
                <div className='iphone-content-right-prices-item last'>
                <h3>Iphone 13</h3>
                    <p>As amazing as ever.</p>
                    <p>From $599</p>
                    <Link to={'/shop'}><button>Shop</button></Link>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
