import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import Add from "material-ui/svg-icons/content/add-circle";

const Input = props => {
  const { distance } = props;
  const { dimL, dimH, dimW, type } = props.inputItem;

  return (
    <div>
      <div className="Item-Input-Container">
        <TextField
          floatingLabelText="Distance (mi)"
          floatingLabelFixed={true}
          value={distance}
          onChange={(e, i, v) => {
            if (isNaN(+e.target.value)) return;
            props.handleDistanceChange(e.target.value);
          }}
        />
      </div>
      <div className="Item-Input-Container">
        <SelectField
          floatingLabelText="Item Type"
          value={type}
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
          value={dimL}
          floatingLabelText="L (ft)"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            if (isNaN(+e.target.value)) return;
            props.handleInputItemChange(e.target.value, "dimL");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <TextField
          value={dimW}
          floatingLabelText="W (ft)"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            if (isNaN(+e.target.value)) return;
            props.handleInputItemChange(e.target.value, "dimW");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <TextField
          value={dimH}
          floatingLabelText="H (ft)"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            if (isNaN(+e.target.value)) return;
            props.handleInputItemChange(e.target.value, "dimH");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <Add onClick={props.handleItemSubmit} />
      </div>
    </div>
  );
};

export default Input;
