// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AddApartmentView from "./AddApartment";
import * as ApartmentsActions from "../../../redux/actions/ApartmentsActions";

const mapStateToProps = state => ({
  user: state.user,
  apartments: state.apartments
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ApartmentsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddApartmentView);
