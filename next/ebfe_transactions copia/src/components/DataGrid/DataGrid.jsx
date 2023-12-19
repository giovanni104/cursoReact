import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Button } from "@mui/material";
import DataGridStyle from "./DataGridStyle";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const titleData = [
  "Cuenta a debitar",
  "Cuenta/Teléfono a abonar",
  "Nombre",
  "Beneficiario",
  "Monto",
  "Concepto",
  "Fecha valor",
  "Acción",
];

const rowsData = [
  [
    1,
    "Cupcake",
    "04241355299",
    3.7,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    2,
    "Donut",
    "04241355299",
    25.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    3,
    "Eclair",
    "04241355299",
    16.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    4,
    "Frozen yoghurt",
    "04241355299",
    6.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    5,
    "Gingerbread",
    "04241355299",
    16.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    6,
    "Honeycomb",
    "04241355299",
    3.2,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    7,
    "Ice cream sandwich",
    "04241355299",
    9.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    8,
    "Jelly Bean",
    "04241355299",
    0.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    9,
    "KitKat",
    "04241355299",
    26.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    10,
    "Lollipop",
    "04241355299",
    0.2,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    11,
    "Marshmallow",
    "04241355299",
    0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    12,
    "Nougat",
    "04241355299",
    19.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
  [
    13,
    "Oreo",
    "04241355299",
    18.0,
    "Cupcake",
    "04241355299",
    3.7,
    "04241355299",
  ],
];

export const DataGrid = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setrows] = useState(rowsData);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleDelete = (postIndex) => {
    let newArray = rows.filter(function (el) {
      return el[0] != postIndex;
    });
    setrows(newArray);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer>
      <Table
        className="resumenTable"
        sx={{ width: 1064 }}
        aria-label="custom pagination table"
      >
        <TableBody>
          <TableRow sx={{ padding: "0px 10px 0px 10px" }}>
            {titleData.map((title, index) => (
              <TableCell
                key={index}
                style={{ width: 144, height: 38, background: "#D9D9D9" }}
                className="fontTitle"
              >
                {title}
              </TableCell>
            ))}
          </TableRow>

          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row[0]}>
              {row.map((data, i) => {
                return i > 0 ? (
                  <TableCell
                    style={{ width: 144, height: 35 }}
                    className="fontBody"
                  >
                    {data}
                  </TableCell>
                ) : (
                  <></>
                );
              })}

              <TableCell align="center">
                <Button onClick={() => handleDelete(row[0])}>
                  <img
                    className="deleteRow"
                    style={{ height: "36px", width: "36px" }}
                    src={process.env.NEXT_PUBLIC_BASIC_URL + "/delete.svg"}
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {/*emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )*/}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelRowsPerPage="Registro por página"
              labelDisplayedRows={({ from, to, count }) => {
                return `${from}–${to} de ${
                  count !== -1 ? count : `más que ${to}`
                }`;
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>

      <style jsx>{DataGridStyle}</style>
    </TableContainer>
  );
};
