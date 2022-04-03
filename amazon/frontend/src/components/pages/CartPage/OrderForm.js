{/* I'm reusing the code from CartPage.js to make this. I want to modify and build on that code. */}  

import React, { useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
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
import Message from "../../Message";
import { addToCart, removeFromCart } from "../../../actions/cartActions";
import DeleteIcon from "@material-ui/icons/Delete";

function OrderForm() {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const navigate = useNavigate();
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
    <Row>
      <Col md={8}>
        <h1>Order Summary</h1>
        
      {/*Here, we should add shipping information. I'll need some help with this since the shipping 
      information should be retrieved from the form of the payments page / the database*/}

       {/*For the order summary, should we display just the price breakdown and order total, 
       or de we show a breakdown of everything that was ordered as well? 
       
       Also, should we create order id numbers? */}


       {/*I'm not modifying the code below until we get a clear picture of what we are displaying on this page */}  
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

              {/*Can this section be altered to remove orders from the database, rather than just the item from the cart
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                  onClick={() => removeFromCartHandler(product.product)}
                >
                  Remove
                </Button>
              </Col>

              */}

            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
        
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>

              {/*Here, we have to store and display the value of the total after adding tax and shipping to the subtotal */}
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
            <Link
                to="../HomePage.js"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Return to Home
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default OrderForm;
