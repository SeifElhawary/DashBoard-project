import { createContext, useState } from "react";
export const Contextt = createContext(null);
export default function GlobalContext ({children}){
    const [setting , openSetting] = useState(false)
    const [theme , setTheme] = useState('blue');
    const [mode , setMode] = useState(null)
const [activeMenu , setActiveMenu] = useState(()=>{
    if(screen.width <1450){
        return false
    } 
    return true
});
return(
    <Contextt.Provider value={{activeMenu , setActiveMenu , setting , openSetting , theme , setTheme , mode , setMode}}>
        {children}
    </Contextt.Provider>
)
}