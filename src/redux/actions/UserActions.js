import { USER } from "../../constants/apiConstants";
import AuthHelper from "../../config/AuthHelper";

export const updateUserInfo = payload => dispatch =>
  dispatch({ type: USER.UPDATE_USER_INFO, payload });

export const login = ({ email, password, history }) => dispatch => {
  AuthHelper.firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      const { email, displayName, refreshToken } = response.user;
      const user = {
        email,
        name: displayName,
        token: refreshToken,
        logged: true
      };
      dispatch({ type: USER.LOGIN, payload: user });
      history.push("/admin");
    })
    .catch(error => {
      console.log("error", error);
    });
};

export const logout = history => dispatch => {
  AuthHelper.firebase
    .auth()
    .signOut()
    .then(response => {
      console.log("Response", response);
      dispatch({ type: USER.LOGOUT });
      history.push("/");
    })
    .catch(error => {
      console.log("error", error);
    });
};
