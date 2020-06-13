// Dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomeView from "./Home";
import * as UserActions from "../../../redux/actions/UserActions";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
