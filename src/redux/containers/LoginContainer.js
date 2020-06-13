// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginView from "../../views/auth/login/Login";
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
)(LoginView);
