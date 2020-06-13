// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ApartmentDetailsView from "./ApartmentDetails";
import * as apartmentActions from "../../../redux/actions/ApartmentsActions";

const mapStateToProps = state => ({
  apartments: state.apartments
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(apartmentActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentDetailsView);
