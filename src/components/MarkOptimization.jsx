import { LineChart } from '@mui/x-charts/LineChart';
import { Contextt } from './Context';
import { useContext } from 'react';

function MarkOptimization() {
  const { mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';
  const lineColor = mode === 'dark' ? '#ff9800' : '#1976d2';

  return (
    <LineChart
      xAxis={[
        {
          data: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 93450],
          tickLabelStyle: { fill: textColor },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { fill: textColor },
        },
      ]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          color: lineColor,
        },
      ]}
      sx={{
        '.MuiChartsAxis-line': { stroke: textColor },
        '.MuiChartsAxis-tick': { stroke: textColor },
      }}
      height={200}
    />
  );
}

export default MarkOptimization;