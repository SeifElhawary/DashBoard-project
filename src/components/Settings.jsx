import '../Styles/settings.css'
import { IoMdClose } from "react-icons/io";
import { Contextt } from './Context';
import { useContext, useEffect, useState } from 'react';
function Settings() {
    const {setting , openSetting , theme , setTheme , mode , setMode} = useContext(Contextt)
    const [light , setLight] =useState('light')
    setMode(light)
    useEffect(()=>{
         openSetting(false);
    
    },[theme , mode])

  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "rgb(246, 244, 244)" : "#12130F";
  }, [mode]);
  return (
    <div className={setting ? 'settings active' : 'settings'}>
        <div className="title">
            <h3>Settings</h3>
            <IoMdClose onClick={()=>openSetting(!setting)} style={{cursor:'pointer'}} size={25}/>
        </div>
        <div className="theme">
            <p>Theme Options</p>
            <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={light === 'light'}
              onChange={(e)=>setLight(e.target.value)}
        />
        Light
      </label>

      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          onChange={(e)=>setLight(e.target.value)}
        checked={light === 'dark'}
        />
        Dark
      </label>
        </div>
        <div className="colors">
            <h3>
                Theme Color
            </h3>
            <div className="color">
                <span onClick={()=>setTheme('red')} className='red'></span>
                <span onClick={()=>setTheme('blue')} className='blue'></span>
                <span onClick={()=>setTheme('orange')} className='orange'></span>
                <span onClick={()=>setTheme('purple')} className="purple"></span>
            </div>
        </div>
    </div>
  )
}

export default Settings