import { LOADING } from "../../constants/apiConstants";

export const changeLoadingState = state => dispatch =>
  dispatch({ type: LOADING.UPDATE_LOADING, payload: { loading: state } });
