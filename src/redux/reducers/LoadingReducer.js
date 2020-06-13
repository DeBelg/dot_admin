import { LOADING } from "../../constants/apiConstants";
const initialState = {
  loading: true
};

const LoadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING.UPDATE_LOADING: {
      return {
        ...state,
        ...payload
      };
    }
    default: {
      return state;
    }
  }
};

export default LoadingReducer;
