import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepProgressBar from "./StepProgressBar";
import styled from "styled-components";

const RentVehicleSteps = () => {

  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    let updateCurrentStep = currentStep >= 5 ? 6 : currentStep + 1;
    setCurrentStep(updateCurrentStep);
  };

  const handlePrevStep = () => {
    let updateCurrentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(updateCurrentStep);
  };

  const PreviousButton = () => {
    if (currentStep !== 1) {
      return (
        <PrevNextBtn className="" onClick={handlePrevStep}>
          Prev
        </PrevNextBtn>
      );
    }
    return null;
  };

  const NextButton = () => {
    if (currentStep < 6) {
      return <PrevNextBtn onClick={handleNextStep}>Next</PrevNextBtn>;
    }
    return null;
  };

  // const back = () => {
  //   let route = "/visit-room";
  //   history.push(route);
  // };

  return (
    <div className="m-5">
      <Form>
        <Row className="">
          <Col xl={12} className="d-flex align-items-center p-xl-0 px-4 ">
            <span style={{ minWidth: "60px" }}>{PreviousButton()}</span>
            <span className="mx-4 mr-lg-5 w-100 position-relative">
              <StepProgressBar currentStep={currentStep} />
            </span>
            {NextButton()}
          </Col>
        </Row>
        <Row className="my-5 w-100">
          <Col xl={12} className="mx-auto">
            <Step1 currentStep={currentStep} />
            <Step2 currentStep={currentStep} />
            <Step3 currentStep={currentStep} />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RentVehicleSteps;

const PrevNextBtn = styled.span`
  color: var(--light-orange);
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
`;

