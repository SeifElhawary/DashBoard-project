import { createContext, useState } from "react";
export const Contextt = createContext(null);
export default function GlobalContext ({children}){
const [activeMenu , setActiveMenu] = useState(false);
return(
    <Contextt.Provider value={{activeMenu , setActiveMenu}}>
        {children}
    </Contextt.Provider>
)
}