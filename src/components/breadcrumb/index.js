import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Paper, Breadcrumbs } from "@material-ui/core";

const BreadCrumb = props => {
  const { pathname } = props.location;
  const urls = pathname.split("/");
  return (
    <Paper elevation={0}>
      <Breadcrumbs aria-label="Breadcrumb">
        {urls.map(item => (
          <span key={item}>
            {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
          </span>
        ))}
      </Breadcrumbs>
    </Paper>
  );
};

export default withRouter(BreadCrumb);
