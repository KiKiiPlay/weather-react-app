const initialState = {
  searchQuerry: {
    searchedCity: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      return {
        ...state,
        searchQuerry: {
          ...state.searchQuerry,
          searchedCity: [...state.searchQuerry.searchedCity, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
