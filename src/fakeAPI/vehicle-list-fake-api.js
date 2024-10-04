import { useContext } from "react";
import VehicleData from "../data/VehicleData.json";
import Bookings from "../data/BookingData.json";
import VehicleContext from "../context/VehicleContext";

export function GetVehicleDataFakeAPI() {
  const { pickupDate, returnDate } = useContext(VehicleContext);
  const vehicles = VehicleData.VehicleData;
  const bookings = Bookings.Bookings;

  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);

  const vehiclesNotBooked = vehicles.filter((vehicle) => {
    const isBooked = bookings.some((booking) => {
      const bookingPickup = new Date(booking.pickupDate);
      const bookingReturn = new Date(booking.returnDate);

      return (
        booking.vehicleIdReference === vehicle.VehicleId &&
        bookingPickup <= returnD &&
        bookingReturn >= pickup
      );
    });

    return !isBooked;
  });

  console.log(vehiclesNotBooked);
  return vehiclesNotBooked;
}
