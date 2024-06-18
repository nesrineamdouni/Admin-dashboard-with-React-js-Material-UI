import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Accordiondash() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HP Spectre x360</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Un 2-en-1 polyvalent avec un écran tactile et une batterie longue
            durée
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Apple MacBook Pro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            16 pouces avec processeur puissant et écran Retina
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Lenovo ThinkPad X1 Carbon </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Un laptop professionnel léger et durable, idéal pour les
            déplacements
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
