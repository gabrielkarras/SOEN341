import React, { useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../../../components/Message";
import { addToCart, removeFromCart } from "../../../actions/cartActions";
import "../../../App.css";

function CartPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const location = useLocation();
  const navigate = useNavigate();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.shoppingCart);
  const { cartProducts } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate(`/shipping`);
  };

  return (
    <div className="center-page">
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartProducts.length === 0 ? (
            <Message variant="info">
              Cart is Empty <Link to="/">Back to HomePage</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartProducts.map((product) => (
                <ListGroupItem key={product.product}>
                  <Row>
                    <Col md={2}>
                      <img src={product.imageSrc} alt="new" />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${product.product}`}>
                        {product.name}
                      </Link>
                    </Col>
                    <Col md={2}>{product.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as="select"
                        value={product.qty}
                        onChange={(e) =>
                          dispatch(addToCart(product.product, e.target.value))
                        }
                      >
                        {[...Array(product.numInStock).keys()].map((count) => (
                          <option key={count + 1} value={count + 1}>
                            {count + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(product.product)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  Subtotal (
                  {cartProducts.reduce((acc, product) => acc + product.qty, 0)})
                  Products
                </h2>
                $
                {cartProducts
                  .reduce(
                    (acc, product) =>
                      acc + product.qty * Number(product.price.split("$")[1]),
                    0
                  )
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartProducts.length === 0}
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;
