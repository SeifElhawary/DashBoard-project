import { DataGrid } from '@mui/x-data-grid';
import { ordersData } from '../components/Data';
import '../Styles/Orders.css';
import '../index.css'
import { Contextt } from './Context'
import { useContext } from 'react';
export default function Orders() {
     const {activeMenu} = useContext(Contextt)
  const columns = [
    {
      field: 'ProductImage',
      headerName: 'Image',
      width: 90,
      renderCell: (params) => (
        <img 
          src={params.value} 
          alt="item" 
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }} 
        />
      ),
    },
    { field: 'OrderID', headerName: 'Order ID', width: 110 },
    { field: 'CustomerName', headerName: 'Customer Name', width: 140 },
    { field: 'OrderItems', headerName: 'Item', width: 130 },
    { field: 'TotalAmount', headerName: 'Total', width: 110 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 110,
      renderCell: (params) => (
        <span style={{ 
          backgroundColor: params.row.StatusBg, 
          color: '#fff', 
          padding: '2px 6px', 
          fontSize: '12px',
          textTransform: 'capitalize'
        }}>
          {params.value}
        </span>
      ),
    },
    { field: 'Location', headerName: 'Location', width: 110 },
  ];

  const rows = ordersData.map((item, index) => ({ id: index, ...item }));

  return (
    <div  style={activeMenu?{marginLeft:"320px" , width:"78%"}: {width:'80%'}} className='ordersPage'>
      <h2>Order Page</h2>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
      </div>
    </div>
  );
}