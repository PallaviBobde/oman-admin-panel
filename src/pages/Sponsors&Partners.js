import React, { useState } from 'react';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Link } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SponsorsAndPartners = () => {
  const [filter, setFilter] = useState('New Request');

  const rows = [
    { name: 'John Doe', email: 'john.doe@example.com', company: 'Company A', date: '2024-07-20', status: 'Accepted' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Company B', date: '2024-07-19', status: 'Pending' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', company: 'Company C', date: '2024-07-18', status: 'New Request' },
    // Add more rows as needed
  ];

  return (
    <Container style={{ marginTop: '20px' }}>
      {/* Buttons and Filter Icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <Button variant={filter === 'New Request' ? 'contained' : 'outlined'} onClick={() => setFilter('New Request')}>
            New Request
          </Button>
          <Button variant={filter === 'Accepted' ? 'contained' : 'outlined'} onClick={() => setFilter('Accepted')} style={{ marginLeft: '10px' }}>
            Accepted
          </Button>
          <Button variant={filter === 'Pending' ? 'contained' : 'outlined'} onClick={() => setFilter('Pending')} style={{ marginLeft: '10px' }}>
            Pending
          </Button>
        </div>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name of Applicant</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Date of Application</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton size="small" color="inherit">
                    <VisibilityIcon />
                  </IconButton>
                  {/* <Link href="#" variant="body2" style={{ marginLeft: '10px' }}>
                    Deactivate
                  </Link> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SponsorsAndPartners;
