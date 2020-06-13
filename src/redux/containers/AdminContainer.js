// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AdminView from "../../views/admin";
import * as UserActions from "../actions/UserActions";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);
