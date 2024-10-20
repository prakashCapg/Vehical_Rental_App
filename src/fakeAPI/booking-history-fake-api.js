import vehicleData from "../Data/VehicleData.json";

export function getBookingsFakeAPI() {
  const newBookingData = localStorage.getItem("newBookingData");
  // console.log("newBookingData:", newBookingData);

  const newDataBooking = newBookingData ? JSON.parse(newBookingData) : [];
  const { VehicleData } = vehicleData;

  try {
    const result = newDataBooking.map((booking) => {
      const vehicle = VehicleData.find(
        (vehicle) => vehicle.VehicleId === booking.vehicleIdReference
      );

      if (!vehicle) {
        console.warn(
          `No vehicle found for vehicleIdReference: ${booking.vehicleIdReference}`
        );
        return {
          bookingId: booking.bookingId,
          status: booking.status,
          bookingDate: booking.bookingDate,
          bookingTime: booking.bookingTime,
          pickupDate: booking.pickupDate,
          returnDate: booking.returnDate,
          bookingAmount: booking.bookingAmount,
          vehicleId: booking.vehicleIdReference,
          vehicleType: null,
          vehicleBrand: null,
          vehicleModel: null,
          vehicleCategory: null,
        };
      }

      return {
        bookingId: booking.bookingId,
        status: booking.status,
        bookingDate: booking.bookingDate,
        bookingTime: booking.bookingTime,
        pickupDate: booking.pickupDate,
        returnDate: booking.returnDate,
        bookingAmount: booking.bookingAmount,
        vehicleId: vehicle.VehicleId,
        vehicleType: vehicle.type,
        vehicleBrand: vehicle.brand,
        vehicleModel: vehicle.model,
        vehicleCategory: vehicle.category,
      };
    });

    return { success: true, bookings: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to fetch booking history" };
  }
}
