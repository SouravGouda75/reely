import React from 'react'
import { MdOutlineExplore, MdAccountCircle, MdOutlineLogout, MdOutlineVideoCameraBack } from "react-icons/md";
import { IoChatboxEllipses, IoSearchCircleOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
const Sidebar = () => {

  return (
    <div className={`sidebar flex flex-col w-full items-center gap-y-20 justify-center h-full `}>
      {/* <div className="flex flex-col bg-black  items-center gap-y-20 justify-center h-full p-1"> */}
       
        <div className="btn">
          <MdOutlineVideoCameraBack size={25} />
          {/* <p>Create</p> */}
        </div>
        <div className="btn">
         
        <MdOutlineExplore size={25} />
          {/* <p>Explore</p> */}
        </div>
        

        <div className="btn">

        <IoChatboxEllipses size={25} />
          {/* <p>Chats</p> */}
        </div>
        
        <div className="btn">
          
        <MdAccountCircle size={25} />
          {/* <p>Account</p> */}
        </div>
        
        <div className="btn">
          
        <MdOutlineLogout size={25} />
          {/* <p >Log Out</p> */}
        </div>
        
      {/* </div> */}
    </div>
    
  )
}

export default Sidebar
