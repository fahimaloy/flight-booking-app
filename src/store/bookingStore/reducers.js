import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

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
    case DELETEBOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((item) => {
          if(item.id != action.payload.id){
            return item
          }}),
      };

    default:
      return state;
  }
};
export default bookingReducer;
