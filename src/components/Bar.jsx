import  { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Contextt } from './Context';
import '../Styles/Charts.css';

export default function Bar() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';
  const barColor = mode === 'dark' ? '#ff9800' : '#1976d2';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Bar Chart</h2>
        <p>Quarterly Revenue Comparison</p>
      </div>
      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            tickLabelStyle: { fill: textColor },
          },
        ]}
        yAxis={[{ tickLabelStyle: { fill: textColor } }]}
        series={[
          {
            data: [35000, 42000, 38000, 51000],
            label: 'Revenue ($)',
            color: barColor,
          },
        ]}
        height={320}
      />
    </div>
  );
}