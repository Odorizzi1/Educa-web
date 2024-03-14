import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Option {
  label: string;
  value: string | number;
}

interface BasicSelectProps {
  options: Option[];
}

export function CustomSelect({ options }: BasicSelectProps) {
  const [value, setValue] = React.useState<string | number>("");

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="basic-select-label"></InputLabel>
        <Select
          variant="standard"
          labelId="basic-select-label"
          id="basic-select"
          value={value}
          label="Select"
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
