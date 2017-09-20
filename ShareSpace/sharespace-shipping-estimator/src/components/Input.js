import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import Add from "material-ui/svg-icons/content/add-circle";

const Input = props => {
  console.log("props.inputItem -->", props.inputItem);
  return (
    <div className="Input-Container">
      <SelectField
        floatingLabelText="Item Type"
        value={props.inputItem.type}
        onChange={(e, i, v) => {
          props.handleInputItemChange(v, "type");
        }}
      >
        <MenuItem value="Box" primaryText="Box" />
        <MenuItem value="Couch" primaryText="Couch" />
        <MenuItem value="Chair" primaryText="Chair" />
        <MenuItem value="Lamp" primaryText="Lamp" />
        <MenuItem value="Bed" primaryText="Bed" />
      </SelectField>
      <TextField
        onChange={(e, i, v) => {
          props.handleInputItemChange(+e.target.value, "dimL");
        }}
        hintText="L"
        style={{ width: "20px", margin: "10px" }}
      />
      <TextField
        onChange={(e, i, v) => {
          props.handleInputItemChange(+e.target.value, "dimW");
        }}
        hintText="W"
        style={{ width: "20px", margin: "10px" }}
      />
      <TextField
        onChange={(e, i, v) => {
          props.handleInputItemChange(+e.target.value, "dimH");
        }}
        hintText="H"
        style={{ width: "20px", margin: "10px" }}
      />
      <Add onClick={props.handleItemSubmit} />
    </div>
  );
};

export default Input;
