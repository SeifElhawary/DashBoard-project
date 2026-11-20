import { Contextt } from "./Context"
import { useContext } from "react"

function NotAvailable() {
  const {mode} = useContext(Contextt);

  return (
    <h3 style={{width:"100%" , marginLeft:'5px', display:'flex', alignItems:'center',
         justifyContent:"center", color:`${mode == 'dark' ? 'white' : 'black' }`, marginTop:'150px'
    }}>
       Sorry, Not available now
    </h3>
  )
}

export default NotAvailable