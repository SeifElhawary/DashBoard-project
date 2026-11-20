import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Contextt } from './Context';


export default function ColorMapping() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Color-Mapping Chart</h2>
        <p>Performance Heatmap / Threshold Ranges</p>
      </div>
      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            data: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
            tickLabelStyle: { fill: textColor },
          },
        ]}
        yAxis={[{ tickLabelStyle: { fill: textColor } }]}
        series={[
          {
            data: [15, 45, 85, 30, 95, 60],
            label: 'Score',
            colorMap: {
              type: 'piecewise',
              thresholds: [40, 75],
              colors: ['#ef5350', '#ffca28', '#66bb6a'],
            },
          },
        ]}
        height={320}
      />
    </div>
  );
}