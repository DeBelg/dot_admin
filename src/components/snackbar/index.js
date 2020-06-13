import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import { Warning, Close, CheckCircle } from "@material-ui/icons";
import Proptypes from "prop-types";
import clsx from "clsx";

import { withTheme } from "@material-ui/core/styles";
import styles from "./styles";

const SnackBar = ({
  open = false,
  onClose,
  type,
  message,
  classes,
  className
}) => (
  <Snackbar open={open}>
    <SnackbarContent
      className={clsx(classes[type], className)}
      message={
        <span id="client-snackbar" style={{ color: "white" }}>
          <span style={{ marginRight: 20 }}>
            {type === "success" ? <CheckCircle /> : <Warning />}
          </span>
          {message}
        </span>
      }
      action={
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <Close />
        </IconButton>
      }
      style={{
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center"
      }}
    />
  </Snackbar>
);

SnackBar.propTypes = {
  open: Proptypes.bool,
  onClose: Proptypes.func,
  type: Proptypes.oneOf(["success", "error"]),
  message: Proptypes.string
};

const SnackBarWithStyles = styles(SnackBar);

export default withTheme(SnackBarWithStyles);
