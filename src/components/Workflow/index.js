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
                  index === currentStep ? "cancelled" : ""
                }`}
              >
                <button
                  className="workflow-step"
                  onClick={() => onStepChange(index)}
                  disabled={index > currentStep}
                >
                  {step.label}
                </button>
              </div>
              {index < steps.length - 1 && <div className="workflow-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="workflow-content">{children}</div>{" "}
    </div>
  );
};

export default Workflow;
