import React from 'react'
import { IoHeartCircleOutline } from 'react-icons/io5'
import { MdMessage } from 'react-icons/md'
import { RiHeartLine, RiMoreFill, RiShareLine } from 'react-icons/ri'

const Card = () => {
  return (
    <div className="card">
      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg" alt="pic" />
      <div className="flex-grow gap-y-4 border-red-500  text-white">

        <div className="card__info ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in ad aliquid commodi quidem excepturi ea. Cum beatae repellat impedit .... <a src="google.com" className="text-blue-400 cursor-pointer">read more</a></div>
        <div className="flex justify-between px-2 relative mt-10 ">

          <ul className="flex gap-x-4">
            <RiHeartLine size={32} />
            {/* <li>Like</li> */}
            <RiShareLine size={32} />
          </ul>


          <div className="">
            <ul className="flex gap-x-4">
              <MdMessage size={32} />
              <RiMoreFill size={32} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
