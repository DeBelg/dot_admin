import { APARTMENTS } from "../../constants/apiConstants";

const initialState = {
  apartments: [],
  favoriteApartments: [],
  rejectedApartments: [],
  cities: []
};

const ApartmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APARTMENTS.GET_APARTMENTS: {
      return {
        ...state,
        apartments: payload
      };
    }
    case APARTMENTS.ADD_APARTMENT_TO_FAVORITES: {
      return {
        ...state,
        favoriteApartments: payload
      };
    }
    case APARTMENTS.REJECTED_APARTMENT: {
      return {
        ...state,
        ...payload
      };
    }
    case APARTMENTS.UPDATE_APARTMENTS: {
      return {
        ...state,
        ...payload
      };
    }
    case APARTMENTS.UPDATE_DATA: {
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

export default ApartmentReducer;
