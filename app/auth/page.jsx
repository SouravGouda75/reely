"use client"
import React from 'react'

const page = () => {

    const login=()=>
            console.log("Clicked");
            
    
  return (
    <div className=' justify-center items-center flex flex-col'>
      <button onClick={login} className='bg-gray-400 rounded-lg'>Login</button>
    </div>
  )
}

export default page
