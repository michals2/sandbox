import React from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Clear from "material-ui/svg-icons/content/clear";
import Info from "material-ui/svg-icons/action/info-outline";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

const ItemTable = props => {
  return (
    <Table>
      <TableHeader
        displayRowCheckbox={false}
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn className="col-a">Remove</TableHeaderColumn>
          <TableHeaderColumn className="col-a">Item #</TableHeaderColumn>
          <TableHeaderColumn className="col-a">Type</TableHeaderColumn>
          <TableHeaderColumn className="col-a">Dimensions</TableHeaderColumn>
          <TableHeaderColumn className="col-a">
            <div className="cost-container">
              <span>Cost</span>
              <Info
                style={{
                  width: 15,
                  height: 15,
                  padding: 5
                }}
                onClick={props.handleOpenDialog}
              />
              <Dialog
                title="Explanation of Costs"
                actions={
                  <RaisedButton
                    label="Cancel"
                    onClick={props.handleCloseDialog}
                  />
                }
                modal={false}
                open={props.dialogOpen}
                onRequestClose={props.handleCloseDialog}
              >
                <p>
                  Item Shipping Cost = (Item Area (ft^2) * Distance (mi) *
                  $2/ft^2/mi) + Item Surcharge
                </p>
                <p>
                  *Couches always use Width and Length to calculate Item Area
                </p>
                <p>
                  *All other items use the 2 smallest dimensions to calculate
                  Item Area
                </p>
                <p>*All costs are estimates</p>

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
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.items.map((item, index) =>
          <TableRow key={index}>
            <TableRowColumn className="col-a">
              <Clear onClick={() => props.handleItemRemove(index)} />
            </TableRowColumn>
            <TableRowColumn className="col-a">
              {index + 1}
            </TableRowColumn>
            <TableRowColumn className="col-a">
              {item.type}
            </TableRowColumn>
            <TableRowColumn className="col-b">
              {`${item.dimL}' x ${item.dimW}' x ${item.dimH}'`}
            </TableRowColumn>
            <TableRowColumn className="col-a">{`$${item.itemCharge}`}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
      <TableFooter adjustForCheckbox={false}>
        <TableRow>
          <TableRowColumn colSpan="4">Total Shipping Cost</TableRowColumn>
          <TableRowColumn>{`$${props.totalCharge}`}</TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ItemTable;
