import React from 'react'
import {  IoSearchCircleOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    
    <div className='bg-black-50 flex justify-evenly px-10 h-10 border-b border-white/10  items-center'>
       
        <div className='nav_btn  '></div>
        <div className='nav_btn flex '>
          
            <input className='text-black rounded-lg border-none bg-cyan-400' placeholder='Search' type="text" name="" id="" />
            <IoSearchCircleOutline className='text-white' size={30}/>
        </div>
        <div className='nav_btn  '></div>
        
        
     </div>
    
  )
}

export default Navbar
