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
import IconButton from "material-ui/IconButton";

const ItemTable = props => {
  const explanationText = "Item cost = $2/mi/ft^2 + Item surcharge";
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
          <TableHeaderColumn className="col-b">Dimensions</TableHeaderColumn>
          <TableHeaderColumn className="col-a">
            <div className="cost-container">
              <span>Cost</span>
              <IconButton
                tooltip={explanationText}
                tooltipPosition="bottom-left"
              >
                <Info
                  style={{
                    width: 15,
                    height: 15,
                    padding: 5
                  }}
                />
              </IconButton>
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
