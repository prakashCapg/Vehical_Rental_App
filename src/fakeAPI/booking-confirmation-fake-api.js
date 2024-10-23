import BookingData from "../Data/BookingData.json";
import VehicleData from "../Data/VehicleData.json";

export const newBookingFakeAPI = (newBookingDetails) => {
  let bookingData = BookingData.Bookings;
  let vehicleData = VehicleData.VehicleData;

  const lastBookingId =
    bookingData.length > 0
      ? bookingData[bookingData.length - 1].bookingId
      : 10000;

  const newBookingNumber = lastBookingId + 1;
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
  console.log("Updated booking data clone:", bookingData);

  return newBooking;
};
