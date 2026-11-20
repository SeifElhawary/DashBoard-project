import { useContext } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Contextt } from './Context';
import '../Styles/Charts.css';

export default function Line() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';
  const lineColor = mode === 'dark' ? '#ff9800' : '#1976d2';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Line Chart</h2>
        <p>Inflation & Financial Growth Trend</p>
      </div>
      <LineChart
        xAxis={[
          {
            data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            tickLabelStyle: { fill: textColor },
            valueFormatter: (value) => value.toString(),
          },
        ]}
        yAxis={[{ tickLabelStyle: { fill: textColor } }]}
        series={[
          {
            data: [12, 19, 15, 27, 32, 24, 38, 45],
            label: 'Growth Rate (%)',
            color: lineColor,
          },
        ]}
        height={320}
      />
    </div>
  );
}