import React, { useState } from "react";
//import { useStyles } from "./datagridCss";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    borderRadius: "10px 0 0 10px", // Set border radius here
    m: 4,
    width: "5rem",
    height: "5rem",
    overflow: `scroll`,
  },
});
const tableData = [
  {
    id: 1,
    name: "Suraj",
    age: 30,
    address: "Gujrat",
  },
  {
    id: 2,
    name: "Vir",
    age: 25,
    address: "Vihar",
  },
  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

export const DataGrid = () => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="MuiTableHead-root">
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleClick(row.id)}
                  >
                    Click me
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <style jsx>{`
        .MuiTableHead-root {
          border-left-style: solid;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      `}</style>
    </>
  );
};
