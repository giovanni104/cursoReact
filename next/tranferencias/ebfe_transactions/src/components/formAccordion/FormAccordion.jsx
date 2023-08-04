import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/FormAccordion.module.css";
export const FormAccordion = ({ children, index }) => {
  return (
    <>

<style jsx>{`
  
      `}</style>

      <Accordion
        defaultExpanded={true}
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
          sx={{ background: "#F5F5F5" }}
        >
          <Typography
            fontFamily={"Nunito"}
            fontSize={"20px"}
            color={"#DB0032"}
            fontWeight={"700"}
            fontStyle={"normal"}
          >
            Transacción {index + 1}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
  
    </>
  );
};
