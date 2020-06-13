// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ApartmentsView from "../../views/admin/apartments/Apartments";
import * as apartmentActions from "../actions/ApartmentsActions";

const mapStateToProps = state => ({
  apartments: state.apartments
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(apartmentActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentsView);
