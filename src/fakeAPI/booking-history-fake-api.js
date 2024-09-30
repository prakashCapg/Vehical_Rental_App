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

export function contactSupportFakeAPI({ name, email, issueType, message, id }) {
  if (!name || !email || !issueType || !message) {
    return { success: false, message: "All fields are required." };
  }

  const supportRequest = {
    name,
    email,
    issueType,
    message,
    id: id || "N/A",
    timestamp: new Date().toISOString(),
  };

  console.log("Support request submitted:", supportRequest);

  return {
    success: true,
    message: "Your support request has been submitted successfully.",
  };
}
