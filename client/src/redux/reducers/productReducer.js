const initialState = {
  clothes: null,
};

export const clothesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CLOTHES":
      return {
        ...state,
        clothes: action.payload,
      };

    default:
      return state;
  }
};

export const clothesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        clothes: action.payload,
      };

    default:
      return state;
  }
};
