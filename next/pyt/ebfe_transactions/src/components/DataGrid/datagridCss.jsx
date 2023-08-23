import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  table: {
    minWidth: 350,
    borderRadius: "10px 0 0 10px", // Set border radius here
    m: 4,
    width: "5rem",
    height: "5rem",
    overflow: `scroll`,
  },
  thead: {
    backgroundColor: "lightgray",
    "& th:first-child": {
      borderRadius: "1em 0 0 1em",
    },
    "& th:last-child": {
      borderRadius: "0 1em 1em 0",
    },
  },
  resumenTable: {
    borderCollapse: "separate",
    borderSpacing: "0 11px",
    margin: "0 auto",
    "& td:first-child": {
      borderLeft: "solid",
      borderRadius: "8px !important",
    },
    "& td:first-child": {
      borderRight: "solid",
      borderRadius: "8px !important",
    },
  },
});
