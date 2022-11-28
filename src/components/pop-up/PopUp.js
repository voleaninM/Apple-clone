import React from 'react'
import Steve from '../../images/steveJobs.png'
import './PopUp.scss'

export default function PopUp({open,onClose,name}) {
    if(!open) return  null 
  return (
    <div className='container'>
      <div className='container-modal'>
        <img src={Steve} alt='steve'></img>
        <div className='container-modal-right'>
          <p onClick={onClose } className='container-modal-right-x'>X</p>
          <div className='container-modal-right-content'>
            <h3>{name},We have received your email,Thank you!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
