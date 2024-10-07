import bookingData from '../data/bookingData.json'
import vehicleData from '../data/vehicleData.json'

export function getBookingsIdFakeAPI(bookingId){
    const bookings=bookingData.bookings.find((bid)=>bid.bookingId.toString() === bookingId.toString());
    if(bookings){
        return{
            success:true,
            bookings
        };
    }
    else{
        return{
            success:false,
            error:'Booking id not found'
        };
    }
}

export function getAllVehicleDetails(){
    return{success:true,vehicles:vehicleData.VehicleData};
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