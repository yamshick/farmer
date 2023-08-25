import { Box, Typography } from "@mui/material";

export const Header = ({ title }) => {
  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};
