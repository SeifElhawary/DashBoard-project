import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Contextt } from './Context';

const revenueData = [
  { month: 'Jan', budget: 150, expense: 110 },
  { month: 'Feb', budget: 125, expense: 125 },
  { month: 'Mar', budget: 140, expense: 145 },
  { month: 'Apr', budget: 160, expense: 160 },
  { month: 'May', budget: 160, expense: 160 },
  { month: 'Jun', budget: 160, expense: 160 },
  { month: 'July', budget: 160, expense: 160 },
];

export default function StackBars() {
  const { mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';
  const axisStrokeColor = mode === 'dark' ? '#555555' : '#cccccc';

  return (
    <div style={{ height: '360px' }}>
      <BarChart
        dataset={revenueData}
        height={320}
        margin={{ top: 20, bottom: 50, left: 40, right: 10 }}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'month',
            tickLabelStyle: { fill: textColor },
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fill: textColor },
          },
        ]}
        series={[
          { dataKey: 'budget', label: 'Budget', stack: 'total', color: '#00C292' },
          { dataKey: 'expense', label: 'Expense', stack: 'total', color: '#f81b1b' },
        ]}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 0,
            labelStyle: { fill: textColor },
          },
        }}
        sx={{
          '.MuiChartsAxis-line': { stroke: axisStrokeColor },
          '.MuiChartsAxis-tick': { stroke: axisStrokeColor },
        }}
      />
    </div>
  );
}