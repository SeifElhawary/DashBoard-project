import { Link, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import '../Styles/SlideBar.css'
import { linkk } from './Data';
import {Contextt} from './Context'
import { useContext , useEffect} from 'react';
function SlideBar() {
    const location = useLocation();
    const {activeMenu , setActiveMenu } = useContext(Contextt)
    useEffect(()=>{
      setActiveMenu(false);  
    },[location])
  return (
    <div className={activeMenu? "slideBar" : "slideBar hidden"} >
    <div className="title">
    <div className="name">
    <span><FlutterDashIcon/></span>
    <Link style={{textDecoration:"none" , color:'black'}} to={'/'}><h1>Dashboard</h1></Link>
    </div>
    <div className="closeBtn">
        <span onClick={()=>setActiveMenu(false)}><CloseIcon/></span>
    </div>
    </div>
    {linkk.map((item)=>{
        return(
            <div key={item.title} className="linkName">
               <span className='linkTitle'> {item.title}</span>
               {item.links.map((link)=>{
                return(
                    <Link style={link.name === location.pathname.replace('/' , '') ? {color:'blue'} : null} key={link.name} className='a' to={`/${link.name}`}>{link.icon}{link.name}</Link>
                )
               })}
            </div>
        )
    })}
    
    </div>
  )
}

export default SlideBar