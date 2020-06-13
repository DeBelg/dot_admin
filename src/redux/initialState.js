const initialState = {
  apartments: {
    apartments: [],
    favoriteApartments: [],
    rejectedApartments: [],
    cities: []
  },
  user: {
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
  },
  loading: false
};

export default initialState;
