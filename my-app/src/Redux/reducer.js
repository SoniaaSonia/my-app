import { GET_DATA } from "./type";

const initialState = { users: [] };

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
