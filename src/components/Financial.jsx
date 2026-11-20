import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Contextt } from './Context';
import '../Styles/Charts.css';

const dummyStockData = [
  { day: 'Mon', open: 150, high: 165, low: 145, close: 160 },
  { day: 'Tue', open: 160, high: 170, low: 155, close: 152 },
  { day: 'Wed', open: 152, high: 158, low: 140, close: 145 },
  { day: 'Thu', open: 145, high: 162, low: 142, close: 158 },
  { day: 'Fri', open: 158, high: 175, low: 156, close: 172 },
];

export default function Financial() {
  const { activeMenu, mode } = useContext(Contextt);
  const textColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Financial Chart</h2>
        <p>Daily Stock Price Movement (Candlestick View)</p>
      </div>
      <Box sx={{ height: 320, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', pt: 4, pb: 2 }}>
        {dummyStockData.map((item, index) => {
          const isBullish = item.close >= item.open;
          const color = isBullish ? '#00c853' : '#d50000';
          const bodyBottom = Math.min(item.open, item.close);
          const bodyHeight = Math.abs(item.close - item.open);

          return (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
              <Box sx={{ position: 'relative', width: 24, height: 200, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: `${item.low - 130}px`,
                    height: `${item.high - item.low}px`,
                    width: 2,
                    backgroundColor: color,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: `${bodyBottom - 130}px`,
                    height: `${Math.max(bodyHeight, 4)}px`,
                    width: 18,
                    backgroundColor: color,
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Typography variant="caption" sx={{ mt: 1, color: textColor, fontWeight: 600 }}>
                {item.day}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}