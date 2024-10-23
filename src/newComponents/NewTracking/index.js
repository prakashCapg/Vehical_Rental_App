import React from "react";
import "./index.css";

const Tracking = ({ status, steps = [], currentStep = 0, onStepChange }) => {
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
