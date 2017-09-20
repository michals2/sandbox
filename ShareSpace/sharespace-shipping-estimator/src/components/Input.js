import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import Add from "material-ui/svg-icons/content/add-circle";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

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
        <RaisedButton
          label="Explanation of Costs"
          onClick={props.handleOpenDialog}
        />
        <Dialog
          title="Explanation of Costs"
          actions={
            <RaisedButton label="Cancel" onClick={props.handleCloseDialog} />
          }
          modal={false}
          open={props.dialogOpen}
          onRequestClose={props.handleCloseDialog}
        >
          <p>
            Item Shipping Cost = (Item Area (ft^2) * Distance (mi) * $2/ft^2/mi)
            + Item Surcharge
          </p>
          <p>*Couches always use Width and Length to calculate Item Area</p>
          <p>
            *All other items use the 2 smallest dimensions to calculate Item
            Area
          </p>

          <Table>
            <TableHeader
              displayRowCheckbox={false}
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Surcharge</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>Box</TableRowColumn>
                <TableRowColumn>No Charge</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Couch</TableRowColumn>
                <TableRowColumn>$50</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Chair</TableRowColumn>
                <TableRowColumn>$50</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Lamp</TableRowColumn>
                <TableRowColumn>$100</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Bed</TableRowColumn>
                <TableRowColumn>$20</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Dialog>
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
