import { DELETE } from "./type";

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id,
  };
}
