import  { useContext } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Contextt } from './Context';
import '../Styles/Charts.css';

export default function Area() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Area Chart</h2>
        <p>Website Traffic Over Months</p>
      </div>
      <LineChart
        xAxis={[
          {
            scaleType: 'point',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            tickLabelStyle: { fill: textColor },
          },
        ]}
        yAxis={[{ tickLabelStyle: { fill: textColor } }]}
        series={[
          {
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
            label: 'Organic Visits',
            area: true,
            color: '#00c853',
          },
          {
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
            label: 'Paid Visits',
            area: true,
            color: '#29b6f6',
          },
        ]}
        height={320}
      />
    </div>
  );
}