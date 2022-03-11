import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../FormContainer.js";
import CheckoutSteps from "../CheckoutSteps.js";
import {
  useNavigate,
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";
//import {savePaymentMethod} from '../actions/cartActions'

function Payments({ history }) {
  {
    /* ONCE CART IS CREATED AND SHIPPING ADDRESS IS SAVED:

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)

    const {shippingAddress } = cart 
    const dispatch = useDispatch()

    

    if (!shippingAddress.address){

        navigate('../ShippingScreen.js', {  })

    }
    
    */
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatchEvent(savePaymentMethod(paymentMethod))
    //navigate('../PlaceOrder.js', {  })
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <Form onSubmit={submitHandler}></Form>

      <Form.Group>
        <Form.Label as="legend">Select Payment Method</Form.Label>

        <Col>
          <Form.Check
            type="radio"
            label="PayPal or Credit Card"
            id="paypal"
            name="paymentMethod"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col>
      </Form.Group>

      <Button type="submit" variant="primary">
        Continue
      </Button>
    </FormContainer>
  );
}

export default Payments;
