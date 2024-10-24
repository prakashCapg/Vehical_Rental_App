import React, { useEffect } from "react";
import "./index.css";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";

const Tracking = ({ status, onStepChange }) => {
  const steps = [
    { id: 1, label: "Booked", icon: <BeenhereIcon /> },
    { id: 2, label: "Under Preparation", icon: <ConstructionIcon /> },
    { id: 3, label: "Ready for Delivery", icon: <AirplaneTicketIcon /> },
    { id: 4, label: "Delivered", icon: <DoneOutlineIcon /> },
    { id: 5, label: "Completed", icon: <DoneAllIcon /> },
    { id: 6, label: "Cancelled", icon: <CancelIcon /> },
  ];

  const currentStep = steps.findIndex((step) => step.label === status);

  const cancelStep =
    status === "Cancelled"
      ? steps.filter(
          (step) => step.label === "Booked" || step.label === "Cancelled"
        )
      : steps.filter((step) => step.label !== "Cancelled");

  return (
    <div className="workflow-container">
      <div className="workflow-steps-container">
        <div className="workflow-steps">
          {cancelStep.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`workflow-step-container ${
                  index < currentStep ? "completed" : ""
                } ${index === currentStep ? "active" : ""} ${
                  step.label === "Cancelled" ? "cancelled" : ""
                } ${
                  (status === "Booked" && step.label === "Booked") ||
                  (status === "Completed" && step.label === "Completed")
                    ? "completed"
                    : ""
                }`}
              >
                <button
                  className={`workflow-step ${
                    (status === "Booked" && step.label === "Booked") ||
                    (status === "Completed" && step.label === "Completed")
                      ? "completed"
                      : ""
                  }`}
                  onClick={() => onStepChange(index)}
                  disabled={index > currentStep}
                >
                  <div className="icon-container">{step.icon}</div>
                </button>
                <div className="workflow-label">{step.label}</div>
              </div>
              {index < cancelStep.length - 1 && (
                <div className="workflow-line" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
