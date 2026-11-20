import { DataGrid } from '@mui/x-data-grid';
import { customersData } from './Data';
import '../Styles/Orders.css';
import { Contextt } from './Context'
import { useContext } from 'react';
export default function Customers() {
     const {activeMenu} = useContext(Contextt)
  const columns = [
    {
      field: 'CustomerImage',
      headerName: 'Image',
      width: 90,
      renderCell: (params) => (
        <img 
          src={params.value} 
          alt="customer" 
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} 
        />
      ),
    },
    { field: 'CustomerID', headerName: 'Customer ID', width: 120 },
    { field: 'CustomerName', headerName: 'Customer Name', width: 150 },
    { field: 'CustomerEmail', headerName: 'Email', width: 180 },
    { field: 'ProjectName', headerName: 'Project Name', width: 160 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 110,
      renderCell: (params) => (
        <span style={{ 
          backgroundColor: params.row.StatusBg, 
          color: '#fff', 
          padding: '4px 10px', 
          borderRadius: '12px', 
          fontSize: '12px',
          textTransform: 'capitalize'
        }}>
          {params.value}
        </span>
      ),
    },
    { field: 'Weeks', headerName: 'Weeks', width: 90 },
    { field: 'Budget', headerName: 'Budget', width: 100 },
    { field: 'Location', headerName: 'Location', width: 110 },
  ];

  const rows = customersData.map((item, index) => ({ id: index, ...item }));

  return (
        <div  style={activeMenu?{marginLeft:"320px" , width:"78%"}: {width:'80%'}} className='ordersPage'>
      <h2>Customers Page</h2>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
      </div>
    </div>
  );
}