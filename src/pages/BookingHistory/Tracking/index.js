import React, { useEffect, useState } from "react";
import Workflow from "../../../components/Workflow/index";
import { getTracking } from "../../../services/tracking.service";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";

const Tracking = ({ bookingId, status }) => {
  const baseSteps = [
    { id: 1, label: "Booked", icon: <BeenhereIcon /> },
    { id: 2, label: "Under Preparation", icon: <ConstructionIcon /> },
    { id: 3, label: "Ready for Delivery", icon: <AirplaneTicketIcon /> },
    { id: 4, label: "Delivered", icon: <DoneOutlineIcon /> },
    { id: 5, label: "Completed", icon: <DoneAllIcon /> },
  ];

  const cancelledStep = { id: 6, label: "Cancelled", icon: <CancelIcon /> };

  const [steps, setSteps] = useState(baseSteps);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    console.log("Fetching tracking data for booking ID:", bookingId);
    const trackingData = getTracking();
    const currentBooking = trackingData.find(
      (tracking) => tracking.bookingId === bookingId
    );

    if (currentBooking) {
      const { status } = currentBooking;
      // console.log("Current Booking Status:", status);
      updateStepsBasedOnStatus(status);
    }
    // else {
    //   console.warn("No booking found with ID:", bookingId);
    // }
  }, [bookingId]);

  const updateStepsBasedOnStatus = (status) => {
    const getStepIndex = (status) => {
      const normalizedStatus = status
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()
        .trim();
      // console.log("Normalized Status:", normalizedStatus);

      switch (normalizedStatus) {
        case "booked":
          return 1;
        case "under preparation":
          return 2;
        case "ready for delivery":
          return 3;
        case "delivered":
          return 4;
        case "completed":
          return 5;
        case "cancelled":
          return 6;
        default:
          // console.warn("Unknown status:", normalizedStatus);
          return 1;
      }
    };

    const newStep = getStepIndex(status);
    // console.log("New Step Index:", newStep);
    setCurrentStep(newStep);

    if (status === "cancelled") {
      setSteps([baseSteps[0], cancelledStep]);
    } else {
      setSteps(baseSteps);
    }
  };

  const handleStepChange = () => {
    return;
  };

  return (
    <div>
      <Workflow
        status={status}
        steps={steps}
        currentStep={currentStep - 1}
        onStepChange={handleStepChange}
      >
        {currentStep === 1 && <div>Your booking is confirmed.</div>}
        {currentStep === 6 && (
          <div style={{ color: "red" }}>Your order has been cancelled.</div>
        )}
        {currentStep === 2 && <div>Your order is under preparation.</div>}
        {currentStep === 3 && <div>Your order is ready for delivery!</div>}
        {currentStep === 4 && <div>Your order has been delivered.</div>}
        {currentStep === 5 && <div>Order is completed.</div>}
      </Workflow>
    </div>
  );
};

export default Tracking;
