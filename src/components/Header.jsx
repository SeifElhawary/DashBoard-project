import { useContext } from 'react'
import '../Styles/Header.css'
import { Contextt } from './Context'
import { MdMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from '../assets/ziad.jpeg'
import { FaAngleDown } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { CiSettings } from "react-icons/ci";

function Header() {
    const {activeMenu , setActiveMenu ,setting , openSetting ,theme , mode} = useContext(Contextt);
    
  return (
    <div style={activeMenu? {marginLeft:"300px" , width:"80%"} : {width:"100%"}} className={mode == 'dark'? 'header dark' : 'header'}>
       <div className="left">
        
         <span style={activeMenu ? {display:"none"} : {display:"inline"}} onClick={()=> setActiveMenu(true)}><MdMenu color={theme} size={25}/></span>
       
       <Tooltip title="Search">
          <span><IoSearch size={25} color={theme} /></span>
       </Tooltip>
      
       </div>
       <div className="right">
        <Tooltip title="Cart">
      <IconButton>
        <MdOutlineShoppingCart size={20} color={theme} />
      </IconButton>
    </Tooltip>
            <Tooltip title="Messages">
      <IconButton>
        <FaRegMessage size={18} color={theme}/>
      </IconButton>
    </Tooltip>
      
            
        <span className='noti'>
            <div className="point"></div>
        <Tooltip title="Notifcations">
      <IconButton>
        <IoIosNotificationsOutline  size={25} color={theme}/>
      </IconButton>
    </Tooltip>
        </span>
    <Tooltip title="Profile image">
         <img style={{borderColor:`${theme}`}} className='profileImg' src={Avatar} alt="Seif" />
    </Tooltip>
       <Tooltip title="Profile">
         <span className='hi'>Hi, <b>Seif</b> <FaAngleDown color={theme}/></span>
       </Tooltip>
       
       </div>
       <span onClick={()=>openSetting(!setting)}  style={{backgroundColor:`${theme}`}} className='settingBtn'><CiSettings  size={36} color='white'/></span>
    </div>
  )
}

export default Header