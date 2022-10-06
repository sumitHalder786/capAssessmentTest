const initialState = {
  listData: [],
};

export default listReducers = (state = initialState, action) => {
  switch (action.type) {
    case "Update_list_data":
      return {
        ...state,
        listData: action.payload,
      };
    default:
      return state;
  }
};
