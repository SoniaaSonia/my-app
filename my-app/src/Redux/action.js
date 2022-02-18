import axios from "axios";
import { GET_DATA } from "./type";

const BaseUrl = "https://jsonplaceholder.typicode.com/users";

export const getData = (users) => {
  return {
    type: GET_DATA,
    payload: users,
  };
};

export const thunk_getAction = () => {
  return (dispatch) => {
    axios.get(`${BaseUrl}`).then((res) => {
      const response = res.data;
      console.log(response);
      dispatch(getData(response));
    });
  };
};
