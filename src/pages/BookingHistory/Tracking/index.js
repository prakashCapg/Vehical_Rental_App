import React, { useEffect, useState } from "react";
import Workflow from "../../../components/Workflow/index";

const Tracking = ({ status, bookingId }) => {
  const steps = [
    { id: 1, label: "Booked" },
    { id: 2, label: "Under Preparation" },
    { id: 3, label: "Ready for Delivery" },
    { id: 4, label: "Delivered" },
    { id: 5, label: "Cancelled" },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const getStepIndex = (status) => {
      switch (status) {
        case "booked":
          return 1;
        case "UnderPreparation":
          return 2;
        case "readyForDelivery":
          return 3;
        case "Delivered":
          return 4;
        case "cancelled":
          return 5;
        default:
          return 1;
      }
    };

    const newStep = getStepIndex(status);
    setCurrentStep(newStep);
  }, [status]);

  const handleStepChange = () => {
    return;
  };

  return (
    <div>
      <Workflow
        title="Order Processing Workflow"
        bookingId={bookingId}
        status={status}
        steps={steps}
        currentStep={currentStep}
        onStepChange={handleStepChange}
      >
        {currentStep === 1 && <div>Your booking is confirmed.</div>}
        {currentStep === 2 && <div>Your order is under preparation.</div>}
        {currentStep === 3 && <div>Your order is ready for delivery!</div>}
        {currentStep === 4 && <div>Your order has been delivered.</div>}
        {currentStep === 5 && <div>Order has been cancelled.</div>}
      </Workflow>
    </div>
  );
};

export default Tracking;
