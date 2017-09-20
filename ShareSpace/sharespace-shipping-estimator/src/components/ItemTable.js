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

const ItemTable = props => {
  console.log(props.items);
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
          <TableHeaderColumn className="col-a">Cost</TableHeaderColumn>
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
