import { combineReducers } from "redux";

// Reducers
import ApartmentReducer from "./ApartmentReducer";
import UserReducer from "./UserReducer";
import LoadingReducer from "./LoadingReducer";

export default combineReducers({
  apartments: ApartmentReducer,
  user: UserReducer,
  loading: LoadingReducer
});
