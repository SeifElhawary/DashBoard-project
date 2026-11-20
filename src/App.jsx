import SlideBar from "./components/SlideBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route ,Routes } from "react-router-dom";
import Orders from "./components/Orders";
import Employees from "./components/Employee";
import Customers from "./components/Customers";
import Calender from './components/Calender'
import NotAvailable from "./components/NotAvailable";
import Settings from "./components/Settings";
import Line from "./components/Line";
import Stack from "./components/Stack";
import Pyramid from "./components/Pyramid";
import Pie from "./components/Pie";
import Bar from "./components/Bar";
import ColorMapping from "./components/ColorMapping";
import Financial from "./components/Financial";
import Area from "./components/Area";

function App(){
  return(
    <>
    <Header/>
    <SlideBar/>
    <Settings/>
    <Routes>
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/ecommerce" element={<HomePage/>}/> 
      <Route path="/orders" element={<Orders/>}/> 
      <Route path="/employees" element={<Employees/>}/> 
      <Route path="/customers" element={<Customers/>}/> 
      <Route path="/calendar" element={<Calender/>}/>
      <Route path="/kanban" element={<NotAvailable/>}/>
      <Route path="/color-picker" element={<NotAvailable/>}/>
      <Route path="/line" element={<Line/>}/>
      <Route path="/area" element={<Area/>}/>
      <Route path="/bar" element={<Bar/>}/>
      <Route path="/pie" element={<Pie/>}/>
      <Route path="/financial" element={<Financial/>}/>
      <Route path="/color-mapping" element={<ColorMapping/>}/>
      <Route path="/pyramid" element={<Pyramid/>}/>
      <Route path="/stacked" element={<Stack/>}/>
    </Routes>
    </>
    
  )
}
export default App;