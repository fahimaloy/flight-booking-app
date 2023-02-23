import { ADDBOOKING } from "./actionTypes";

const currentBookingState = {
  bookings: [],
};

const bookingReducer = (state = currentBookingState, action) => {
  switch (action.type) {
    case ADDBOOKING:
      let newState = {
        ...state,
        bookings: state.bookings.map((item) => item),
      };
      newState.bookings.push(action.payload);
      return newState;
    default:
      return state;
  }
};
export default bookingReducer;
