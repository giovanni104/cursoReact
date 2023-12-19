import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/FormAccordion.module.css";
export const FormAccordion = ({ children, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion
        defaultExpanded={false}
        key={index}
        sx={{
          paddingBottom: "10px",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel{index}a-content"
          id="panel{index}a-header"
          sx={{
            background: expanded ? "#E9E9E9" : "#FFFFFF",
            border: "1px solid #8A8A8A",
            borderRadius: "4px",
          }}
          style={{ height: "100px" }}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <Typography
            fontFamily={"Nunito"}
            fontSize={"14px"}
            color={"#0067B1"}
            fontWeight={"600"}
          >
            Transacción {index + 1}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};
