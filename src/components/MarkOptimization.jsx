import { LineChart } from '@mui/x-charts/LineChart';
function MarkOptimization() {
  return (
    <LineChart
      xAxis={[{ data: [0,10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 93450] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8]
         
        },
      ]}
      height={200}
    />
  );
}
export default MarkOptimization;