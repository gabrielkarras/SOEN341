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

  const navigate = useNavigate();

  const [cc_num, setCCNum] = useState("");
  const [cc_name, setCCName] = useState("");
  const [cc_date, setCCDate] = useState("");
  const [cc_cvc, setCCcvc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatchEvent(savePaymentMethod(paymentMethod))
    //navigate('../PlaceOrder.js', {  })
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <Form onSubmit={submitHandler}>
        <h1>Accepted Payment Method: Credit Card</h1>

        <Form.Group>
          <Form.Label as="legend">Credit Card Number:</Form.Label>

          <Form.Control
            required
            type="text"
            pattern="[0-9]*"
            placeholder="Enter credit card number"
            valie={cc_num ? cc_num : ""}
            onChange={(e) => setCCNum(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Name on Credit Card:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter name on credit card"
            valie={cc_name ? cc_name : ""}
            onChange={(e) => setCCName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Date of Expiration:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter credit card expiration date"
            valie={cc_date ? cc_date : ""}
            onChange={(e) => setCCDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Credit Card CVC:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter credit card CVC"
            valie={cc_cvc ? cc_cvc : ""}
            onChange={(e) => setCCcvc(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          id="btttn"
          onClick={() => navigate("../OrderSummary.js", {})}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Payments;
