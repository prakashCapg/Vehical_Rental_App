import React, { useState } from "react";
import Workflow from "../../../components/Workflow/index";

const Tracking = () => {
  const steps = [
    "booked",
    "Under Preparation",
    "readyForDelivery",
    "Delivered",
    "completed",
    "cancelled",
  ];

  const [currentStep, setCurrentStep] = React.useState(2);

  const handleStepChange = (stepIndex) => {
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(2);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Workflow
        title="Order Processing Workflow"
        textContent="Track the progress of your order through the various stages."
        steps={steps}
        onStepChange={handleStepChange}
      >
        {currentStep === 0 && <div>Booking confirmed and in process.</div>}
        {currentStep === 1 && <div>Your order is under preparation.</div>}
        {currentStep === 2 && <div>Your order is ready for delivery!</div>}
        {currentStep === 3 && <div>Your order has been delivered.</div>}
        {currentStep === 4 && <div>Order completed successfully.</div>}
        {currentStep === 5 && <div>Order has been cancelled.</div>}
      </Workflow>
    </div>
  );
};

export default Tracking;
