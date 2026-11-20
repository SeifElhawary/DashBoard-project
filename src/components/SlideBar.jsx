import { Link, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import '../Styles/SlideBar.css'
import { linkk } from './Data';
import {Contextt} from './Context'
import { useContext , useEffect} from 'react';
function SlideBar() {
    const location = useLocation();
    const {activeMenu , setActiveMenu ,theme ,mode} = useContext(Contextt)
    useEffect(()=>{
      if(screen.width < 800){
         setActiveMenu(false);  
      }
     
    },[location])
  return (
    <div style={mode == 'dark'? {backgroundColor:'black' } : null} className={activeMenu? "slideBar" : "slideBar hidden"} >
    <div className="title">
    <div className="name">
    <span><FlutterDashIcon sx={{color:`${mode === 'dark' ? 'white' : 'black'}`}}/></span>
    <Link style={{textDecoration:"none" , color:`${mode === 'dark' ? 'white' : 'black'}`}} to={'/'}><h1>Dashboard</h1></Link>
    </div>
    <div className="closeBtn">
        <span onClick={()=>setActiveMenu(false)}><CloseIcon sx={{color:`${mode === 'dark' ? 'white' : 'black'}`}}/></span>
    </div>
    </div>
    {linkk.map((item)=>{
        return(
            <div key={item.title} className="linkName">
               <span style={{color:`${mode === 'dark'? 'lightGray' : 'gray'}`}} className='linkTitle'> {item.title}</span>
               {item.links.map((link)=>{
                return(
                    <Link className={mode === 'dark' ? 'a dark' : 'a'} style={link.name === location.pathname.replace('/' , '') ? {color:theme} : null } key={link.name}  to={`/${link.name}`}>{link.icon}{link.name}</Link>
                )
               })}
            </div>
        )
    })}
    
    </div>
  )
}

export default SlideBar