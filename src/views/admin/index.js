import React from "react";
// Components
import PrivateRoute from "../../components/private_route";
import Home from "./home";

class AdminView extends React.Component {
  render() {
    return (
      <PrivateRoute
        path="/admin"
        logged={this.props.user.logged}
        component={Home}
        {...this.props}
      />
    );
  }
}

export default AdminView;
