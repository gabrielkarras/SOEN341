import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4, step5}) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {/* LINKCONTAINER SHOULD HAVE A PATH TO LOGIN i.e.: to='/login' */}

        {step1 ? (
          <LinkContainer to="/Login.js">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Login</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/ordersummary">
            <Nav.Link>Order Summary</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Order Summary</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step5 ? (
          <LinkContainer to="/orderconfirmation">
            <Nav.Link>Order Confirmation</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Order Confirmation</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
