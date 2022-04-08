import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
  NavItem,
} from "react-bootstrap";
import "../../App.css";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps.js";
import { createOrderAction } from "../../actions/orderActions";
import { CREATE_ORDER_RESET } from "../../constants/constants";

function OrderSummaryPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createOrder = useSelector((state) => state.createOrder);
  const { order, success, error } = createOrder;

  const shoppingCart = useSelector((state) => state.shoppingCart);
  shoppingCart.productsPrice = shoppingCart.cartProducts
    .reduce(
      (acc, product) => acc + product.qty * Number(product.price.split("$")[1]),
      0
    )
    .toFixed(2);
  shoppingCart.shippingPrice = 19.99;
  shoppingCart.taxPrice = Number(0.1495 * shoppingCart.productsPrice).toFixed(
    2
  );
  shoppingCart.totalPrice = (
    Number(shoppingCart.productsPrice) +
    Number(shoppingCart.shippingPrice) +
    Number(shoppingCart.taxPrice)
  ).toFixed(2);

  useEffect(() => {
    if (!shoppingCart.paymentMethod) {
      navigate(`/payment`);
    }
    if (success) {
      navigate(`/orderconfirmation`);
      dispatch({ type: CREATE_ORDER_RESET });
    }
  }, [success]);

  const placeOrder = () => {
    dispatch(
      createOrderAction({
        orderProducts: shoppingCart.cartProducts,
        shippingAddress: shoppingCart.shippingAddress,
        paymentMethod: shoppingCart.paymentMethod,
        totalPrice: shoppingCart.totalPrice,
      })
    );
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="center-order">
        {/*(<CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps> */}
        <Row>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>Shipping</h2>
              <p>
                <strong>Shipping:</strong>
                {shoppingCart.shippingAddress.address},{" "}
                {shoppingCart.shippingAddress.city},{" "}
                {shoppingCart.shippingAddress.postalCode},{" "}
                {shoppingCart.shippingAddress.country}
              </p>
            </ListGroupItem>

            <ListGroupItem>
              <h2>Payment</h2>
              <p>
                <strong>Payment:</strong>
                {shoppingCart.paymentMethod}
              </p>
            </ListGroupItem>

            <ListGroupItem>
              <h2>Order Products</h2>
              {shoppingCart.cartProducts.length === 0 ? (
                <Message variant="info">Cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {shoppingCart.cartProducts.map((product, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col>{product.name}</Col>
                        <Col>
                          {product.qty} X {product.price} = $
                          {(
                            product.qty * Number(product.price.split("$")[1])
                          ).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>

            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>Price Summary</h2>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Products:</Col>
                  <Col>${shoppingCart.productsPrice}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${shoppingCart.shippingPrice}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${shoppingCart.taxPrice}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Total:</Col>
                  <Col>${shoppingCart.totalPrice}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  type="btn"
                  className="btn-block"
                  disabled={shoppingCart.cartProducts === 0}
                  onClick={placeOrder}
                >
                  Place Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </ListGroup>
        </Row>
      </div>
    </div>
  );
}

export default OrderSummaryPage;
