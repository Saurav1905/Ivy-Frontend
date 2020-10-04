import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("Frontend");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Categories</FormLabel>
      <RadioGroup
        aria-label="Category"
        name="Category"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="UX Design"
          control={<Radio />}
          label="UX Design"
        />
        <FormControlLabel
          value="Frontend"
          control={<Radio />}
          label="Frontend"
        />
        <FormControlLabel value="Backend" control={<Radio />} label="Backend" />
      </RadioGroup>
    </FormControl>
  );
}
