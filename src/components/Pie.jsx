import { useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Contextt } from './Context';
import '../Styles/Charts.css';

export default function Pie() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Pie Chart</h2>
        <p>Market Share Breakdown</p>
      </div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 35, label: 'React', color: '#61dafb' },
              { id: 1, value: 25, label: 'Vue', color: '#42b883' },
              { id: 2, value: 20, label: 'Angular', color: '#dd0031' },
              { id: 3, value: 20, label: 'Other', color: '#ffb74d' },
            ],
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 15,
          },
        ]}
        slotProps={{
          legend: {
            labelStyle: { fill: textColor },
          },
        }}
        height={320}
      />
    </div>
  );
}