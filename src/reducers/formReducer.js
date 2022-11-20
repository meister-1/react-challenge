import { ON_CHANGE } from "../actions/actionTypes";

export default (state = "", action) => {
  let newState;
  switch (action.type) {
    case ON_CHANGE:
      // your code here
      return newState;
    default:
      return state;
  }
};
