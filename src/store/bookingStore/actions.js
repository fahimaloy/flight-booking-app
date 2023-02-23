import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

export const addBooking = (payload) => {
  return {
    type: ADDBOOKING,
    payload,
  };
};
export const deleteBooking = (id) => {
  return {
    type: DELETEBOOKING,
    payload: {
      id,
    },
  };
};
