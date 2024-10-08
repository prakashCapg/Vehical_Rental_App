import { useContext } from "react";
import VehicleData from "../Data/VehiclesData.json";
import Bookings from "../Data/BookingData.json";
import VehicleContext from "../context/VehicleContext";

export function GetVehicleDataFakeAPI() {
  const { pickupDate, returnDate } = useContext(VehicleContext);
  const vehicles = VehicleData.VehicleData;
  const bookings = Bookings.Bookings;

  // Convert pickupDate and returnDate to Date objects for comparison
  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);

  const vehiclesNotBooked = vehicles.filter((vehicle) => {
    // Check if the vehicle is booked in any of the bookings
    const isBooked = bookings.some((booking) => {
      const bookingPickup = new Date(booking.pickupDate);
      const bookingReturn = new Date(booking.returnDate);

      // Check if the booking overlaps with the requested dates
      return (
        booking.vehicleIdReference === vehicle.VehicleId &&
        bookingPickup <= returnD &&
        bookingReturn >= pickup
      );
    });

    // If not booked, keep the vehicle
    return !isBooked;
  });

  console.log(vehiclesNotBooked);
  return vehiclesNotBooked;
}
