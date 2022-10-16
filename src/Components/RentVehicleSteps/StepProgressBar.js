import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styled from "styled-components";

const StepProgressBar = ({ currentStep }) => {
  let stepPercentage = 0;

  if (currentStep === 1) {
    stepPercentage = 0;
  } else if (currentStep === 2) {
    stepPercentage = 20;
  } else if (currentStep === 3) {
    stepPercentage = 40;
  } else if (currentStep === 4) {
    stepPercentage = 60;
  } else if (currentStep === 5) {
    stepPercentage = 80;
  } else if (currentStep === 6) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBarContainer>
      <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep position-absolute ${
                currentStep === 1 && "stepFocused"
              } ${
                currentStep === 2 ||
                currentStep === 3 ||
                currentStep === 4 ||
                currentStep === 5 ||
                currentStep === 6
                  ? "accomplished "
                  : null
              }`}
              style={{ left: "-42px" }}
            >
              {index + 1}           
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${currentStep === 2 && "stepFocused"} ${
                currentStep === 3 ||
                currentStep === 4 ||
                currentStep === 5 ||
                currentStep === 6
                  ? "accomplished "
                  : null
              }`}
            >
              {index + 1}
            </div>
          )}
        </Step>

        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${currentStep === 3 && "stepFocused"} ${
                currentStep === 4 || currentStep === 5 || currentStep === 6
                  ? "accomplished "
                  : null
              }`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${currentStep === 4 && "stepFocused"} ${
                currentStep === 5 || currentStep === 6 ? "accomplished " : null
              }`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${currentStep === 5 && "stepFocused"} ${
                currentStep === 6 ? "accomplished " : null
              }`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep position-absolute ${
                currentStep === 6 && "stepFocused"
              } ${currentStep === 6 ? "accomplished " : null}`}
              style={{ right: "-42px" }}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </ProgressBarContainer>
  );
};

export default StepProgressBar;

const ProgressBarContainer = styled.div`
  .StepTitle {
    font-size: 15px;
    color: #969393;
  }

  .stepFocused {
    border: 3px solid #279f2c !important;
    color: #279f2c !important;
  }

  .indexedStep {
    color: #bdbcbc;
    width: 43px;
    height: 43px;
    font-size: 20px;
    background: var(--white) !important;
    border: 3px solid #bdbcbc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indexedStep.accomplished {
    color: var(--white) !important;
    background: linear-gradient(
      179.56deg,
      #1cb571 6.57%,
      rgba(22, 163, 91, 0) 150.4%
    ) !important;
    border: none !important;
  }

  .RSPBprogressBar {
    height: 3px;
  }

  .RSPBprogressBar .RSPBprogression {
    height: 3px;
    background: #279f2c !important;
  }
`;
