import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import TableHead from "./TableHead";

const TableComponent = ({ details }) => (
  <Paper>
    <Table size="medium">
      <TableHead
        headRows={[
          "Address",
          "Available From",
          "Bredrooms",
          "Neighbourhood",
          "Price"
        ]}
      />
      <TableBody>
        <TableRow key={details.address}>
          <TableCell component="th" scope="row">
            {details.address}
          </TableCell>
          <TableCell>{new Date(details.availableFrom).toDateString()}</TableCell>
          <TableCell>{details.bedrooms}</TableCell>
          <TableCell>{details.place.sublocality_level_1}</TableCell>
          <TableCell>{details.price}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default TableComponent;
