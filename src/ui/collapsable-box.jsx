import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { CentralizedBox } from "./centralized-box";

export const CollapsableBox = ({ title, isOpen, children }) => {
  const [expanded, setExpanded] = React.useState(isOpen || false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CentralizedBox>
      {/* <Box> */}
      <Typography variant="h3">{title}</Typography>
      <Button onClick={handleExpandClick}>
        {expanded ? "Скрыть" : "Показать"}
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
      {/* </Box> */}
    </CentralizedBox>
  );
};
