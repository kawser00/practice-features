import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import styled from "styled-components";

const Step1 = ({ currentStep }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <StepFormContainer className="my-4">
      <Col xl={10} className="mx-auto">
        <Form className="form-inline justify-content-center">
          <span className="select-title mr-3">How much will my</span>
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            className="flex-column"
          >
            <Form.Control as="select" className="dashboard-select">
              <option>Make</option>
              <option>Scion</option>
              <option>Tesla</option>
              <option>Volvo</option>
            </Form.Control>
            <span className="select-info">Vehicle make</span>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlSelect2"
            className="mx-3 flex-column"
          >
            <Form.Control as="select" className="mx-3 dashboard-select">
              <option>Model</option>
              <option>Avalon</option>
              <option>Avalon</option>
              <option>C-HR</option>
              <option>C-HR</option>
            </Form.Control>
            <span className="select-info">Vehicle model</span>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlSelect3"
            className="flex-column"
          >
            <Form.Control as="select" className="dashboard-select">
              <option>Year</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
            </Form.Control>
            <span className="select-info">Year of manufacture</span>
          </Form.Group>
          <span className="select-title ml-3">earn?</span>
        </Form>
      </Col>
      <Col xl={8} className="mx-auto">
        <div className="rent-details my-5 pt-lg-5">
          View a list of vehciles we currently take. Maybe you may want to
          purchase a vehicle to put on ride-hailing business. To know how much
          it can generate, just pick any of the vehicle model here and insert on
          the calculater.
        </div>
        <Button className="btn viewBtn px-4">View List</Button>
      </Col>
    </StepFormContainer>
  );
};

export default Step1;

export const StepFormContainer = styled(Row)`
  .dashboard-select {
    background: transparent !important;
    border: 0 !important;
    max-width: 420px !important;
    align-self: center;
    font-size: 35px;
    color: #435cb5 !important;
    height: auto !important;
    font-weight: 700;
  }
  select:hover,
  select:focus {
    color: #435cb5 !important;
    box-shadow: none !important;
  }

  .select-title {
    font-weight: 700;
    font-size: 35px;
    color: #000000;
  }

  .select-info {
    background: #e4e1e1;
    border-radius: 3px;
    font-size: 15px;
    color: #5b5b5b;
    width: 167px;
    height: 25px;
    text-align: center;
  }

  .rent-details {
    font-size: 17px;
    color: #5b5b5b;
  }

  .viewBtn {
    color: white;
    background: #435cb5;
  }
`;
