const initialState = {
  searchQuerry: {
    searchedCity: "Kyiv",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      return {
        searchQuerry: {
          searchedCity: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
