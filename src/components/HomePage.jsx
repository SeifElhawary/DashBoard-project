import { useContext } from 'react'
import MainImg from '../assets/welcome-bg.svg'
import '../Styles/Home.css'
import { Contextt } from './Context'
import { earningData } from './Data'
import { TbPointFilled } from "react-icons/tb";
import MarkOptimization from './MarkOptimization'
import StackBars from './StackBars'
function HomePage() {
    const {activeMenu} = useContext(Contextt)
  return (
   <div style={activeMenu?{marginLeft:"250px" , width:"80%"}: {width:'100%'}} className='Home'>
   <div className="MainCard">
    <div className="info">
        <span>Earnings</span><br />
        <p>$63,448.99</p><br />
        <button>Download</button>
    </div>
    <img src={MainImg} alt="Main img" />
   </div>
   <div className="boxes">
    {earningData.map((item , index)=>{
        return(
            <div key={index} className="card">
                <p className='icon'  style={{ backgroundColor:`${item.iconBg}` , color:`${item.iconColor}`} }>{item.icon}</p>
                <div className="infoo">
                    <h2>{item.amount}</h2>
                    <span style={{color:`${item.pcColor}`}}>{item.percentage}</span>
                </div>
                <p>{item.title}</p>
            </div>
        )
    })}
   </div>
   <div className="line">
    <div className="title">
        <h2>Revenue Updates</h2>
        <div className="right">
            <div className="rev">
                <TbPointFilled color='green'/>
                <p>Budget</p>
            </div>
            <div className="exp">
                <TbPointFilled color='red'/>
                <p>Expenses</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="left">
            <div className="bud">
                <div className="num">
                    <p>$93,450</p>
                    <span>23%</span>
                </div>
                <h3>Budget</h3>
            </div>
            <div className="expe">
                <p>$48,550</p>
                <h3>Expenses</h3>
            </div>
            <div className="lineChart">
                <MarkOptimization/>
            </div>
            <button style={{backgroundColor:'blue'}}>Download Report</button>
        </div>
        <div className="right">
        <div className="chart2">
            <StackBars/>
        </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default HomePage