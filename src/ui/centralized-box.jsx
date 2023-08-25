import { Box } from "@mui/material";

export const CentralizedBox = ({ children, style }) => {
  return (
    <Box
      display="flex"
      // justifyContent="center"
      // alignItems="center"
      flexDirection="column"
      sx={style}
    >
      {children}
    </Box>
  );
};
