import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../FormContainer.js";
import CheckoutSteps from "../CheckoutSteps.js";
import {
  useNavigate,
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

function ShippingScreen(history) {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form ");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter address"
            valie={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter city"
            valie={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter postal code"
            valie={postalCode ? postalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter country"
            valie={country ? country : ""}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* The form doesn't get submitted when the onClick action is present in the code below because it syas that the form is not connected. 
            If you remove the onClick action, the form gets submitted successfully.*/}

        <Button
          type="submit"
          variant="primary"
          id="btttn"
          onClick={() => navigate("../Payments.js", {})}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
