import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup(props) {
  // const [value, setValue] = React.useState(props.value);

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Categories</FormLabel>
      <RadioGroup
        aria-label="Category"
        name="Category"
        value={props.value}
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
        <FormControlLabel
          value="General"
          control={<Radio />}
          label="General"
        />
        <FormControlLabel value="Backend" control={<Radio />} label="Backend" />
      </RadioGroup>
    </FormControl>
  );
}
