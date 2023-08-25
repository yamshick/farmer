import { Box, Typography } from "@mui/material";
import { Input } from "./input";

export const sizeOptions = {
  SMALL: "small",
  MEDIUM: "medium",
  BIG: "big",
};

const widthParams = {
  [sizeOptions.SMALL]: "8ch",
  [sizeOptions.MEDIUM]: "12ch",
  [sizeOptions.BIG]: "16ch",
};

const heightParams = {
  [sizeOptions.SMALL]: "5vh",
  [sizeOptions.MEDIUM]: "10vh",
  [sizeOptions.BIG]: "15vh",
};

export const InputParam = ({
  type,
  value,
  onChange,
  size,
  label,
  leftCaption,
  rightCaption,
}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap="5">
      <Typography variant="caption">{leftCaption}</Typography>
      <Input
        value={value}
        onChange={onChange}
        label={label}
        type={type}
        width={widthParams[size]}
        height={widthParams[size]}
      />
      <Typography variant="caption">{rightCaption}</Typography>
    </Box>
  );
};
