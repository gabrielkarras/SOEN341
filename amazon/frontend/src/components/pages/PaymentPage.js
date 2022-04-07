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
import { savePaymentMethod }  from '../../actions/cartActions'

function PaymentPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const shoppingCart = useSelector(state => state.shoppingCart)

  const { shippingAddress } = shoppingCart
  const [paymentMethod, setPaymentMethod] = useState();

  if (!shippingAddress.address){
    navigate('/shipping')
  }

  const [cc_num, setCCNum] = useState("");
  const [cc_name, setCCName] = useState("");
  const [cc_date, setCCDate] = useState("");
  const [cc_cvc, setCCcvc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/ordersummary')
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <Form onSubmit={submitHandler}>
        
      <Form.Group>
          <Form.Label as="legend">Credit Card Type:</Form.Label>
          <div className="radio">
            <label><input name="cctype" type ="radio" value="Visa" onChange={(e) => setPaymentMethod(e.target.value)} required></input>Visa</label>
          </div>
         
          <div className="radio">
            <label><input name="cctype" type ="radio" value="MasterCard" onChange={(e) => setPaymentMethod(e.target.value)}></input>MasterCard</label>
          </div>
  
      </Form.Group>



        <Form.Group>
          <Form.Label as="legend">Credit Card Number:</Form.Label>

          <Form.Control
            required
            type="text"
            pattern="[0-9]*"
            placeholder="Enter credit card number"
            value={cc_num ? cc_num : ""}
            onChange={(e) => setCCNum(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Name on Credit Card:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter name on credit card"
            value={cc_name ? cc_name : ""}
            onChange={(e) => setCCName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Date of Expiration:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter credit card expiration date"
            value={cc_date ? cc_date : ""}
            onChange={(e) => setCCDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label as="legend">Credit Card CVC:</Form.Label>

          <Form.Control
            required
            type="text"
            placeholder="Enter credit card CVC"
            value={cc_cvc ? cc_cvc : ""}
            onChange={(e) => setCCcvc(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          id="btttn"
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentPage;
