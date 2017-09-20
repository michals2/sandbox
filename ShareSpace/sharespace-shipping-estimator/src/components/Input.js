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
      <TextField
        floatingLabelText="Distance (mi)"
        floatingLabelFixed={true}
        value={distance}
        onChange={(e, i, v) => {
          const value = +e.target.value;
          console.log("value --> ", value)
          if (isNaN(+e.target.value)) return;
          props.handleDistanceChange(value);
        }}
      />
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
          <MenuItem value="Box" primaryText="Bed" />
        </SelectField>
        <TextField
          value={dimL}
          floatingLabelText="L"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            const value = +e.target.value;
            if (isNaN(value)) return;
            props.handleInputItemChange(value, "dimL");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <TextField
          value={dimW}
          floatingLabelText="W"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            console.log(typeof e.target.value);
            const value = +e.target.value;
            console.log(value);
            if (isNaN(value)) return;
            props.handleInputItemChange(value, "dimW");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <TextField
          value={dimH}
          floatingLabelText="H"
          floatingLabelFixed={true}
          onChange={(e, i, v) => {
            const value = +e.target.value;
            if (isNaN(value)) return;
            props.handleInputItemChange(value, "dimH");
          }}
          style={{ width: "50px", margin: "10px" }}
        />
        <Add onClick={props.handleItemSubmit} />
      </div>
    </div>
  );
};

export default Input;
