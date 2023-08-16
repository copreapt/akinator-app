const user_reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
        return {
            ...state,
            username: action.payload.username
        }
    case "GET_COUNTRY_DATA":
      return {
        ...state,
      data: action.payload
      }

    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload
      }
    case "GET_ANSWERS":
      return {
        ...state,
        answers: action.payload
      }
    default:
      return state;
  }
};

export default user_reducer;
