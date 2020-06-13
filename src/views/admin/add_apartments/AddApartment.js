import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AddApartmentForm from "../../../components/add_apartmen_form";

class AddApartment extends Component {
  handleSubmit = data => {
    const { saveApartment } = this.props.actions;
    const { history } = this.props;
    saveApartment(data, history);
  };

  render() {
    return (
      <div>
        <h2>ADD APARTMENT</h2>
        <AddApartmentForm data={this.state} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default withRouter(AddApartment);
