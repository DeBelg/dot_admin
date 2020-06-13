import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";

const TableHeadComponent = props => (
  <TableHead>
    <TableRow>
      {props.headRows.map(item => (
        <TableCell key={item}>{item}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

TableHeadComponent.propTypes = {
  headRows: PropTypes.array.isRequired
};

export default TableHeadComponent;
