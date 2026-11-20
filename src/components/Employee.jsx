import { DataGrid } from '@mui/x-data-grid';
import { employeesData } from '../components/Data';
import '../Styles/Orders.css';
import { Contextt } from './Context'
import { useContext } from 'react';

export default function Employees() {
     const {activeMenu} = useContext(Contextt)
  const columns = [
    {
      field: 'EmployeeImage',
      headerName: 'Image',
      width: 90,
      renderCell: (params) => (
        <img 
          src={params.value} 
          alt="employee" 
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} 
        />
      ),
    },
    { field: 'EmployeeID', headerName: 'Employee ID', width: 120 },
    { field: 'Name', headerName: 'Name', width: 160 },
    { field: 'Title', headerName: 'Title', width: 150 },
    { field: 'HireDate', headerName: 'Hire Date', width: 130 },
    { field: 'Country', headerName: 'Country', width: 110 },
    { field: 'ReportsTo', headerName: 'Reports To', width: 120 },
  ];

  const rows = employeesData.map((item, index) => ({ id: index, ...item }));

  return (
    <div  style={activeMenu?{marginLeft:"320px" , width:"78%"}: {width:'80%'}} className='ordersPage'>
      <h2>Employees Page</h2>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
      </div>
    </div>
  );
}