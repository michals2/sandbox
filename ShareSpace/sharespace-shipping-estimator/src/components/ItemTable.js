import React from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Clear from "material-ui/svg-icons/content/clear";

const ItemTable = props => {
  return (
    <Table>
      <TableHeader
        displayRowCheckbox={false}
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Item #</TableHeaderColumn>
          <TableHeaderColumn>Type</TableHeaderColumn>
          <TableHeaderColumn>Dimensions</TableHeaderColumn>
          <TableHeaderColumn>Cost</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.items.map((item, index) =>
          <TableRow key={index}>
            <TableRowColumn>
              {index}
            </TableRowColumn>
            <TableRowColumn>
              {item.type}
            </TableRowColumn>
            <TableRowColumn>
              {`${item.dimL} x ${item.dimW} x ${item.dimH}`}
            </TableRowColumn>
            <TableRowColumn>$4</TableRowColumn>
            <TableRowColumn>
              <Clear />
            </TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
