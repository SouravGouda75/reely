import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Messaging from './Messaging'

const Hero = () => {
  return (
    <>
    
    <div className='core '>
      <Sidebar/>
      <Content/>
      <Messaging/>
    </div>
    </>
  )
}

export default Hero
