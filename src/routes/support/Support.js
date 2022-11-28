import React,{useRef,useState} from 'react'
import Header from '../../components/header/Header'
import './Support.scss'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci';
import emailjs from '@emailjs/browser';
import PopUp from '../../components/pop-up/PopUp';
import { motion } from 'framer-motion';

export default function Support() {
  const[name,setName] = useState('')
  const[modal,setModal] = useState(false)
  const form = useRef();
console.log(name)
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_ole3ttn', 'template_v7cvvi9', form.current, 'wSN4OZViNTlmMWEUk')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset()
    setModal(true)
    setName('')
  }
  return (
    <motion.div
       initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.5}}
     className='support'>
      <Header/> 
      <div className='support-container'>
        <h1 className='support-container-header'>
      Contact</h1>
        <div className='support-container-main'>
              <div className='support-container-main-left'>
                  <div className='support-container-main-left-number'>
                    <AiOutlinePhone size={30}/><p>+321312309</p>
                  </div>
                  <div className='support-container-main-left-mail'>
                  <AiOutlineMail size={30}/> <p> apple@gmail.com</p>
                  </div>
                  <div className='support-container-main-left-location'>
                  <CiLocationOn size={30}/><p> Washington,DC</p>
                  </div>
                  <div className='support-container-main-left-support'>
                  <h1>My Support</h1>
                  <p className='support-container-main-left-support-p'>Get up to date information about
                   your Apple products in one place
                   including repairs, tech support cases, and much more. 
                   <span><button>Sign in</button></span></p> 
                  </div>
                 
                </div>
          <form className='support-container-main-right'
            onSubmit={sendEmail}
           ref={form}>
              <label htmlFor="fname">First name:</label>
                <input placeholder='First Name' id="fname" type='text' 
                name="fname" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label htmlFor="lname">Last name:</label>
                <input placeholder='Last Name' id="lname" type='text' name="lname"></input>
                <label htmlFor="message">Your message</label>
                <textarea id='message' rows={8} placeholder='Enter your message' name='message' ></textarea>
                <button type='submit' className='support-container-main-right-button'>Send</button>
              </form>
        </div>
      </div>
      <PopUp open={modal} onClose={()=>setModal(false)} name={name}/>
    </motion.div>
  )
}
