import SlideBar from "./components/SlideBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route ,Routes } from "react-router-dom";
import Orders from "./components/Orders";
import Employees from "./components/Employee";
import Customers from "./components/Customers";
import Calender from './components/Calender'
import NotAvailable from "./components/NotAvailable";
function App(){
  return(
    <>
    <Header/>
    <SlideBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/ecommerce" element={<HomePage/>}/> 
      <Route path="/orders" element={<Orders/>}/> 
      <Route path="/employees" element={<Employees/>}/> 
      <Route path="/customers" element={<Customers/>}/> 
      <Route path="/calendar" element={<Calender/>}/>
      <Route path="/kanban" element={<NotAvailable/>}/>
      <Route path="/color-picker" element={<NotAvailable/>}/>
    </Routes>
    </>
    
  )
}
export default App;