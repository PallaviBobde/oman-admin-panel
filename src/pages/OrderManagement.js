import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DropdownComponent from "../components/Dropdown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TextNumberDiv } from "../components/TextNumberDiv";
import AddIcon from '@mui/icons-material/Add';
import SearchComponent from "../components/SearchComponent";

const Order = ({ title, content }) => {
  const tableData = [
    {
      project: "Project Alpha",
      establishedDate: "2024-01-15",
      location: "Location A",
      type: "Type 1",
      targetedTrees: 1000,
      currentTrees: 950,
      lostTrees: 50,
      totalOMR: 50000,
      createdBy: "User A",
      operatedBy: "Operator A",
      lastUpdate: "2024-07-15",
      status: "Active",
      actions: "Edit | Delete | View",
    },
    {
      project: "Project Beta",
      establishedDate: "2024-02-20",
      location: "Location B",
      type: "Type 2",
      targetedTrees: 2000,
      currentTrees: 1900,
      lostTrees: 100,
      totalOMR: 100000,
      createdBy: "User B",
      operatedBy: "Operator B",
      lastUpdate: "2024-07-16",
      status: "Pending",
      actions: "Edit | Delete | View",
    },
    {
      project: "Project Gamma",
      establishedDate: "2024-03-10",
      location: "Location C",
      type: "Type 3",
      targetedTrees: 1500,
      currentTrees: 1400,
      lostTrees: 100,
      totalOMR: 75000,
      createdBy: "User C",
      operatedBy: "Operator C",
      lastUpdate: "2024-07-17",
      status: "Completed",
      actions: "Edit | Delete | View",
    },
    // Add more rows as needed
  ];
  return (
    <Container>
      <Box padding="16px" style={{display:"flex",flexWrap:"wrap"}}>
        <TextNumberDiv text="Total orders" number={1} />
        <TextNumberDiv text="Total Companies" number={2} />
        <TextNumberDiv text="Total individual" number={3} />
         <TextNumberDiv text="Pending orders" number={1} />
        <TextNumberDiv text="Planted orders" number={2} />
        <TextNumberDiv text="Total trees" number={3} />
         <TextNumberDiv text="Total OMR" number={1} bgred/>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Project
        </Button>
      </Box>
      <SearchComponent/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Name of applicant</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Company or user</TableCell>
              <TableCell>Date of Application</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Phone no</TableCell>
              <TableCell>No of trees</TableCell>
              <TableCell>OMR Amount</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>last updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                }}
              >
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.establishedDate}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.targetedTrees}</TableCell>
                <TableCell>{row.currentTrees}</TableCell>
                <TableCell>{row.lostTrees}</TableCell>
                <TableCell>{row.totalOMR}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.operatedBy}</TableCell>
                <TableCell>{row.lastUpdate}</TableCell>
                <TableCell>{row.operatedBy}</TableCell>
                <TableCell>{row.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Order;
