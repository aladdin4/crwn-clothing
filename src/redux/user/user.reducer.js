// reducer is a function that takes the currenrt state + action object and returns the new state

const INIT_STATE = { currentUser: "null" };

// state should be default out, because if undef. value will return exception
// action is an object that comes from action-creators, it contais 2 properties
// // A- action.type    B-action.payload
export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
