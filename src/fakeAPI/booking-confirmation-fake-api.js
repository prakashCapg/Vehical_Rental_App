import BookingData from "../Data/BookingData.json";
import VehicleData from "../Data/VehicleData.json";
// import BookingDataClone from "../Data/BookingDataClone.json";

export const newBookingFakeAPI = (newBookingDetails) => {
  let bookingData = BookingData.Bookings;
  let vehicleData = VehicleData.VehicleData;
  // let newBookingData = BookingDataClone.BookingClone;

  const lastBookingId =
    bookingData.length > 0
      ? bookingData[bookingData.length - 1].bookingId
      : 10000;
  const newBookingNumber = lastBookingId + 1;
  // const lastBookingId = newBookingData[newBookingData.length - 1].bookingId;
  // const newBookingNumber = lastBookingId + 1;

  const vehicleReferenceId = newBookingDetails.vehicleDetails.id;

  const vehicleDetails = vehicleData.find(
    (vehicle) => vehicle.id === vehicleReferenceId
  );

  if (!vehicleDetails) {
    throw new Error("Vehicle not found for the provided vehicleIdReference.");
  }

  const currentDate = new Date();
  const bookingDate = currentDate.toISOString().split("T")[0];

  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const bookingTime = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  const newBooking = {
    bookingId: newBookingNumber,
    status: "Booked",
    bookingDate: bookingDate,
    bookingTime: bookingTime,
    vehicleIdReference: vehicleDetails.VehicleId,
    brand: vehicleDetails.brand,
    model: vehicleDetails.model,
    pickupDate: newBookingDetails.pickupDate,
    returnDate: newBookingDetails.returnDate,
    totalRent: newBookingDetails.totalRent,
  };

  const newData = {
    bookingId: newBookingNumber,
    status: "Booked",
    bookingDate: bookingDate,
    bookingTime: bookingTime,
    vehicleIdReference: vehicleDetails.VehicleId,
    pickupDate: newBookingDetails.pickupDate,
    returnDate: newBookingDetails.returnDate,
    bookingAmount: newBookingDetails.totalRent,
  };

  // let bookingDataClone = localStorage.getItem("BookingClone");
  // let BookingClone = bookingDataClone ? JSON.parse(bookingDataClone) : [];
  // newBookingData = bookingDataClone
  //   ? JSON.parse(newBookingData)
  // console.log(typeof bookingDataClone);

  // const isBookingExists = bookingData.some(
  //   (booking) => booking.bookingId === newBookingNumber
  // );

  const isBookingExists = bookingData.some(
    (booking) =>
      booking.vehicleIdReference === newData.vehicleIdReference &&
      booking.pickupDate === newData.pickupDate &&
      booking.returnDate === newData.returnDate
  );

  if (!isBookingExists) {
    bookingData.push(newData);
    localStorage.setItem("newBookingData", JSON.stringify(bookingData));
  } else {
    console.warn(`Booking with ID ${newBookingNumber} already exists!`);
  }

  // localStorage.setItem("newBookingData", JSON.stringify(bookingDataClone));
  console.log("Updated booking data clone:", bookingData);
  // return newData;

  return newBooking;
};
