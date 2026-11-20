import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Contextt } from './Context';
import '../Styles/Charts.css';
const revenueData = [
  { month: 'Jan', budget: 150, expense: 110 },
  { month: 'Feb', budget: 125, expense: 125 },
  { month: 'Mar', budget: 140, expense: 145 },
  { month: 'Apr', budget: 160, expense: 160 },
  { month: 'May', budget: 160, expense: 160 },
  { month: 'Jun', budget: 160, expense: 160 },
  { month: 'Jul', budget: 160, expense: 160 },
];

export default function Stack() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Stacked Bar Chart</h2>
        <p>Budget vs. Expense Breakdown</p>
      </div>
      <BarChart
        dataset={revenueData}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'month',
            tickLabelStyle: { fill: textColor },
          },
        ]}
        yAxis={[{ tickLabelStyle: { fill: textColor } }]}
        series={[
          { dataKey: 'budget', label: 'Budget', stack: 'total', color: '#00C292' },
          { dataKey: 'expense', label: 'Expense', stack: 'total', color: '#f81b1b' },
        ]}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            labelStyle: { fill: textColor },
          },
        }}
        height={320}
      />
    </div>
  );
}