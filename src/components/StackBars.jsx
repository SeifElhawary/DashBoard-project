
import { BarChart } from '@mui/x-charts/BarChart';

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
  return (
    <div style={{ height: '360px' }}>
      <BarChart
        dataset={revenueData}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'budget', label: 'Budget', stack: 'total', color: '#00C292' },
          { dataKey: 'expense', label: 'Expense', stack: 'total', color: '#f81b1b' },
        ]}
        height={320}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 0,
          },
        }}
        margin={{ top: 20, bottom: 50, left: 40, right: 10 }}
      />
    </div>
  );
}