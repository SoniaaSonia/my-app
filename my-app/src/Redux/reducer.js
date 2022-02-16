import { DELETE } from "./type";

const initialState = { formValues: "" };

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        list: state.formValues.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
