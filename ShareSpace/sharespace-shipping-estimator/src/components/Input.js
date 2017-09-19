import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import Add from "material-ui/svg-icons/content/add-circle";

const Input = props => {
  return (
    <div className="Input-Container">
      <SelectField
        floatingLabelText="Item Type"
        value={props.inputItem.type}
        onChange={props.handleInputTypeChange}
      >
        <MenuItem value={"box"} primaryText="Box" />
        <MenuItem value={"couch"} primaryText="Couch" />
        <MenuItem value={"chair"} primaryText="Chair" />
        <MenuItem value={"lamp"} primaryText="Lamp" />
        <MenuItem value={"bed"} primaryText="Bed" />
      </SelectField>
      <TextField hintText="L" style={{ width: "20px", margin: "10px" }} />
      <TextField hintText="W" style={{ width: "20px", margin: "10px" }} />
      <TextField hintText="H" style={{ width: "20px", margin: "10px" }} />
      <Add />
    </div>
  );
};

export default Input;
