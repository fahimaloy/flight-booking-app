import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FrameIcon from "../static/img/icons/Frame.svg";
import Vector1 from "../static/img/icons/Vector (1).svg";
import Vector2 from "../static/img/icons/Vector (2).svg";
import { addBooking } from "../store/bookingStore/actions";
import DropdownField from "./DropdownField";
import PlusIcon from "./icons/PlusIcon";
import Toast from "./Toast";
const dropDownFields = {
  from: {
    fieldName: "Destination Form",
    fieldClass: "des-from",
    payload: {
      name: "from",
      id: "lws-from",
    },
    options: [
      { name: "Dhaka", value: "Dhaka" },
      { name: "Sylhet", value: "Sylhet" },
      { name: "Saidpur", value: "Saidpur" },
      { name: "Cox's Bazar", value: "Cox's Bazar" },
    ],
    iconImage: FrameIcon,
  },
  to: {
    fieldName: "Destination To",
    fieldClass: "des-from",
    payload: {
      name: "to",
      id: "lws-to",
    },
    options: [
      { name: "Dhaka", value: "Dhaka" },
      { name: "Sylhet", value: "Sylhet" },
      { name: "Saidpur", value: "Saidpur" },
      { name: "Cox's Bazar", value: "Cox's Bazar" },
    ],
    iconImage: FrameIcon,
  },
  guests: {
    fieldName: "Guests",
    fieldClass: "des-from",
    payload: {
      name: "guests",
      id: "lws-guests",
    },
    options: [
      { name: "1 Person", value: "1" },
      { name: "2 Persons", value: "2" },
      { name: "3 Persons", value: "3" },
      { name: "4 Persons", value: "4" },
    ],
    iconImage: Vector1,
  },
  ticketClass: {
    fieldName: "Class",
    fieldClass: "des-from !border-r-0",
    payload: {
      name: "ticketClass",
      id: "lws-ticketClass",
    },
    options: [
      { name: "Business", value: "Business" },
      { name: "Economy", value: "Economy" },
    ],
    iconImage: Vector2,
  },
};

export default function InputData() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [ticketClassName, setTicketClassName] = useState(null);
  const [guests, setGuests] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);
  const dispatch = useDispatch();
  const setData = (name, value) => {
    switch (name) {
      case dropDownFields.from.fieldName:
        setFrom(value);
        break;
      case dropDownFields.to.fieldName:
        setTo(value);
        break;
      case dropDownFields.ticketClass.fieldName:
        setTicketClassName(value);
        break;
      case dropDownFields.guests.fieldName:
        setGuests(value);
        break;
      default:
        break;
    }
  };
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("error");
  const bookings = useSelector((state) => state.bookings);
  const bookTicket = (event) => {
    event.preventDefault();
    let id =
      bookings.length > 0 ? parseInt(bookings[bookings.length - 1].id) + 1 : 1;
    if (!from || !to || !ticketClassName || !guests || !bookingDate) {
      setToastType("error");
      setToastMessage("Enter All Fields Correctly!");
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } else {
      const payload = {
        id,
        from,
        to,
        ticketClass: ticketClassName,
        guests,
        bookedDate: bookingDate,
      };
      dispatch(addBooking(payload));
      setToastType("success");
      setToastMessage("Successfully Added Booking");
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  };
  const handleDateChange = (event) => {
    setBookingDate(new Date(event.target.value).toLocaleDateString());
  };
  const eraseToastFromParent = () => {
    setToast(false);
  };

  return (
    <>
      {toast ? (
        <Toast
          message={toastMessage}
          type={toastType}
          eraseToastFromParent={eraseToastFromParent}
        />
      ) : (
        ""
      )}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            <DropdownField data={dropDownFields.from} setData={setData} />
            <DropdownField data={dropDownFields.to} setData={setData} />

            {/* Date  */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                onChange={handleDateChange}
                required
              />
            </div>

            {/* Guests */}
            <DropdownField data={dropDownFields.guests} setData={setData} />

            {/* Class */}
            <DropdownField
              data={dropDownFields.ticketClass}
              setData={setData}
            />

            <button
              className="addCity"
              disabled={bookings.length >= 3 ? true : false}
              onClick={bookTicket}
              type="submit"
              id="lws-addCity"
            >
              <PlusIcon />
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
