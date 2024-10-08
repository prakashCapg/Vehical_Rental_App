import bookingData from "../Data/BookingData.json";
import vehicleData from "../Data/VehicleData.json";

export async function getBookingsFakeAPI() {
  const { Bookings } = bookingData;
  const { VehicleData } = vehicleData;

  return new Promise((resolve, reject) => {
    try {
      const result = Bookings.map((booking) => {
        const vehicle = VehicleData.find(
          (vehicle) => vehicle.VehicleId === booking.vehicleIdReference
        );

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

      resolve({ success: true, bookings: result });
    } catch (error) {
      reject({ success: false, error: "Failed to fetch booking history" });
    }
  });
}
