import React from "react";
import "./index.css";

const Workflow = ({
  status,
  steps = [],
  currentStep = 0,
  children,
  onStepChange,
}) => {
  return (
    <div className="workflow-container">
      <div className="workflow-info">
        <div className="info-item">
          <span>Status: </span>
          <span>{status}</span>
        </div>
      </div>
      <div className="workflow-steps-container">
        <div className="workflow-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`workflow-step-container ${
                  index < currentStep ? "completed" : ""
                } ${index === currentStep ? "active" : ""} ${
                  step.label === "Cancelled" ? "cancelled" : ""
                } ${
                  (status === "Booked" && index === 0) ||
                  (status === "Completed" && index === steps.length - 1)
                    ? "completed"
                    : ""
                }`}
              >
                <button
                  className={`workflow-step ${
                    (status === "Booked" && index === 0) ||
                    (status === "Completed" && index === steps.length - 1)
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
              {index < steps.length - 1 && <div className="workflow-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="workflow-content">{children}</div>
    </div>
  );
};

export default Workflow;
