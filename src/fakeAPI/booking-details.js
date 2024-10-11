import bookingData from '../Data/BookingData.json'
import vehicleData from '../Data/VehicleData.json'
export function getBookingsIdFakeAPI(bookingId) {
    const booking = bookingData.Bookings.find(
      (b) => b.bookingId.toString() === bookingId.toString()
    );
  
    if (booking) {
      return { success: true, bookings: booking };
    } else {
      return { success: false, error: 'Booking ID not found' };
    }
  }
  
export function getAllVehicleDetails(){
    return{success:true,vehicles:vehicleData.VehicleData};
}
export function getAllBookingDetails(){
  return {
    success:true,
    booking:bookingData.Bookings
  }
}
export function getVehicleDetailsById(vehicleRef){
    const vehicle = vehicleData.VehicleData.find(
        (vehicle) =>vehicle.VehicleId.toString() === vehicleRef.toString()
    );
    if(vehicle){
        return{
            success:true,
            vehicle,
        }
    }
    else{
        return{
            success:false,
            error:'vehicle id not found'
        }
    }
}
export function getBookingByDateFakeAPI(date){
  const bookingDate = bookingData.Bookings.filter(
    (booking)=>booking.bookingDate=== date
  )
  if(bookingDate.length > 0){
    return {
      success : true,
      bookings:bookingDate,
    }
  }
  else{
     return{
      success:false,
      error:'no bookings availabe for the specified date',
     }
  }
}
