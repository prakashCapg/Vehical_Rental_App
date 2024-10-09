import React, { useEffect, useState } from "react";
import Workflow from "../../../components/Workflow/index";
import { getTracking } from "../../../services/tracking.service";

const Tracking = ({ bookingId, status }) => {
  const baseSteps = [
    { id: 1, label: "Booked" },
    { id: 2, label: "Under Preparation" },
    { id: 3, label: "Ready for Delivery" },
    { id: 4, label: "Delivered" },
    { id: 5, label: "Completed" },
  ];

  const cancelledStep = { id: 6, label: "Cancelled" };

  const [steps, setSteps] = useState(baseSteps);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const trackingData = getTracking();
    const currentBooking = trackingData.find(
      (tracking) => tracking.bookingId === bookingId
    );

    if (currentBooking) {
      const { status } = currentBooking;
      updateStepsBasedOnStatus(status);
    }
  }, [bookingId]);

  const updateStepsBasedOnStatus = (status) => {
    const getStepIndex = (status) => {
      switch (status) {
        case "booked":
          return 1;
        case "UnderPreparation":
          return 2;
        case "readyForDelivery":
          return 3;
        case "delivered":
          return 4;
        case "completed":
          return 5;
        case "cancelled":
          return 6;
        default:
          return 1;
      }
    };

    const newStep = getStepIndex(status);
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
        currentStep={currentStep}
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
