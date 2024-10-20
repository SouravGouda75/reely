
"use client"

import React from 'react'
import ReactPlayer from 'react-player'

import { IoSearchOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import Slider from './Slider';
import Card from './Card';
// import video from '../assets/video.mp3'
const Content = () => {
  return (
    <div className=' gap-y-1 flex-grow flex flex-col w-full h-full   text-white overflow-y-auto'>
        {/* <div className="h-[400px] border border-red-700"> */}
       
      <Slider/>
    {/* </div> */}
    <div className="posts">
      <Card/>
      <Card/>
      
    </div>
    </div>
  )
}

export default Content
