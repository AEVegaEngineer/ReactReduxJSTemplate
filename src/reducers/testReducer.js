import { types } from "../types/types";

const initialState = {
  testState: false,
}

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.testOnline:
      return{
        ...state,
        testState: true
      }
    case types.testOffline:
      return{
        ...state,
        testState: false
      }
  
    default:
      return state;
  }
}