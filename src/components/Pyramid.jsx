import{ useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { Contextt } from './Context';
import '../Styles/Charts.css';

const pyramidData = [
  { level: 'Top Management', width: '30%', color: '#f44336' },
  { level: 'Team Leads', width: '50%', color: '#ff9800' },
  { level: 'Senior Devs', width: '70%', color: '#2196f3' },
  { level: 'Junior Staff', width: '90%', color: '#4caf50' },
];

export default function Pyramid() {
  const { activeMenu, mode } = useContext(Contextt);

  return (
    <div
      style={activeMenu ? { marginLeft: "320px", width: "78%" } : { width: '80%' }}
      className={`chart-container ${mode === 'dark' ? 'dark' : ''}`}
    >
      <div className="chart-header">
        <h2>Pyramid Chart</h2>
        <p>Organizational Structure Hierarchy</p>
      </div>
      <Box sx={{ height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1.5 }}>
        {pyramidData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: item.width,
              height: 48,
              backgroundColor: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
              {item.level}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}