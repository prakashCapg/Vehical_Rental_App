import BookingData from "../Data/BookingData.json";
import VehicleData from "../Data/VehicleData.json";

export const newBookingFakeAPI = (newBookingDetails) => {
  let bookingData = BookingData.Bookings;
  let vehicleData = VehicleData.VehicleData;

  const newBookingNumber =
    Math.max(...bookingData.map((booking) => booking.bookingId)) + 1;

  const vehicleDetails = vehicleData.find(
    (vehicle) => vehicle.vehicleId === newBookingDetails.vehicleReferenceId
  );

  if (!vehicleDetails) {
    throw new Error("Vehicle not found for the provided vehicleReferenceId.");
  }

  const newBooking = {
    bookingId: newBookingNumber,
    bookingStatus: "Booked",
    bookingDate: new Date().toISOString(),
    vehicleReferenceId: newBookingDetails.vehicleReferenceId,
    vehicleDetails: {
      type: vehicleDetails.type,
      brand: vehicleDetails.brand,
      model: vehicleDetails.model,
      rentPricePerHour: vehicleDetails.rentPricePerHour,
    },
    pickupDate: newBookingDetails.pickupDate,
    returnDate: newBookingDetails.returnDate,
    totalHours: newBookingDetails.totalHours,
    totalRent: newBookingDetails.totalRent,
  };

  bookingData.push(newBooking);

  return newBooking;
};
