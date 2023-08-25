import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = ({
  value: valueProp,
  onChange,
  type,
  label,
  width,
  height,
}) => {
  const [value, setValue] = React.useState(valueProp);

  const onInputChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };
  return (
    <Box
      // component="form"
      sx={{
        // "& > :not(style)": { m: 1, width: width || "15ch", height:height || '10vh'},
        m: 1,
        width: width || "15ch",
        height: height || "10vh",
      }}
      // noValidate
      // autoComplete="off"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type || "text"}
        value={value}
        onChange={onInputChange}
        size={"small"}
      />
    </Box>
  );
};
