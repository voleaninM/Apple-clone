import React,{useEffect, useState} from 'react'
import './Header.scss'
import {AiFillApple,AiOutlineSearch} from 'react-icons/ai'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {FaBars, FaTimes} from 'react-icons/fa'
import {TbMinusVertical} from 'react-icons/tb'
import { NavLink, useNavigate } from 'react-router-dom' 
 
export default function Header() {
    const navigate = useNavigate()
    const[windowWidth,setWindowWidth] = useState(window.innerWidth)
    const[click,setClick] = useState(false)
    const [search,setSearch] = useState(false)
    function handleClick(){
        setClick(!click)
    }
    function handleSearch(){
        setSearch(!search)
    }
    function handleInput(event){
        if(event.key==='Enter'){
            setSearch(false)
            if(event.target.value.toLowerCase() === 'mac'){
              navigate('/mac')
            } else if(event.target.value.toLowerCase() === 'watch' ){
              navigate('/watch')
            } else if(event.target.value.toLowerCase() === 'iphone' ){
              navigate('/iphone')
            } else return 
        }
    }
    useEffect(()=>{
        function watchWidth(){
            setWindowWidth(window.innerWidth)
            setSearch(false)
           }
       window.addEventListener('resize',watchWidth)
       return ()=>{
        window.removeEventListener('resize',watchWidth)
       }
    },[])
  return (
    <div className={click? 'navbar active': 'navbar'}>
        <ul className={click? 'navbar-navigation active' :'navbar-navigation'}>
            <li className='navbar-navigation-link'>
            <NavLink to='/'><AiFillApple/></NavLink>
            </li>
            <li className='navbar-navigation-link'>
            <NavLink to='/mac'>Mac</NavLink>
            </li>
            <li className='navbar-navigation-link'>
            <NavLink to='/iphone'>Iphone</NavLink>
            </li>
            <li className='navbar-navigation-link'>
            <NavLink to='/watch'>iWatch</NavLink>
            </li>
            <li className='navbar-navigation-link'>
            <NavLink to='/support'>Support</NavLink>
            </li>
        </ul>
      <div className='navbar-search'>
      {search?<input onKeyDown={handleInput} /> : <AiOutlineSearch onClick={handleSearch}/>}    
        <TbMinusVertical />
        <RiShoppingBag3Line />
      </div>
      <div className='navbar-hamburger' onClick={handleClick}>
        {click? <FaTimes/>:<FaBars/>}
        
      </div>
    </div>
  )
}
