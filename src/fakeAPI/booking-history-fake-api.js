import { backendData } from "../backendData";

export function getBookingsFakeAPI() {
  return {
    carData: backendData["carData"],
    bikeData: backendData["bikeData"],
    sixSeaterData: backendData["sixSeaterData"],
  };
}

export function cancelBookingFakeAPI(bookingId) {
  const dataSources = ["carData", "bikeData", "sixSeaterData"];
  let foundBookingIndex = -1;
  let dataType = "";

  for (const dataSource of dataSources) {
    const bookingIndex = backendData[dataSource].findIndex(
      (booking) => booking.id === bookingId
    );

    if (bookingIndex !== -1) {
      foundBookingIndex = bookingIndex;
      dataType = dataSource;
      break;
    }
  }

  if (foundBookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  backendData[dataType][foundBookingIndex].status = "Cancelled";

  return { success: true, message: "Booking successfully cancelled." };
}

export function modifyBookingFakeAPI(bookingId, updatedDetails) {
  const dataSources = ["carData", "bikeData", "sixSeaterData"];
  let foundBookingIndex = -1;
  let dataType = "";

  for (const dataSource of dataSources) {
    const bookingIndex = backendData[dataSource].findIndex(
      (booking) => booking.id === bookingId
    );

    if (bookingIndex !== -1) {
      foundBookingIndex = bookingIndex;
      dataType = dataSource;
      break;
    }
  }

  if (foundBookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  backendData[dataType][foundBookingIndex] = {
    ...backendData[dataType][foundBookingIndex],
    ...updatedDetails,
  };

  return {
    success: true,
    message: "Booking successfully modified.",
    booking: backendData[dataType][foundBookingIndex],
  };
}
