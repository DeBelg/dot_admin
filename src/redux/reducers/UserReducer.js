import { USER } from "../../constants/apiConstants";
import InitialState from "../initialState";

const initialState = {
  token: "",
  name: "",
  first_name: "",
  last_name: "",
  email: "",
  picture: {
    data: {
      url: ""
    }
  },
  logged: false
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER.UPDATE_USER_INFO: {
      return {
        ...state,
        ...payload
      };
    }
    case USER.LOGIN: {
      return {
        ...state,
        ...payload
      };
    }
    case USER.LOGOUT: {
      return InitialState;
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
