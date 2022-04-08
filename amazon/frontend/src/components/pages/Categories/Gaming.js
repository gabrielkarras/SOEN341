import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayCategoryProducts } from "../../../actions/categoryActions";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

function Gaming() {
  const dispatch = useDispatch();
  const gamingProductsList = useSelector((state) => state.categoryProducts);
  const { load, error, categoryProducts } = gamingProductsList;

  const params = useParams();

  useEffect(() => {
    dispatch(displayCategoryProducts(params.Gaming));
  }, [dispatch, params.Gaming]);

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <>
      <div>
        {load ? (
          <Loader />
        ) : error ? (
          <Message variant="warning">{error}</Message>
        ) : (
          <div>
            <Row>
              {categoryProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Card className="Show">
                    <Link
                      to={`/product/${product._id}`}
                      style={
                        (linkStyle = {
                          margin: "1rem",
                          textDecoration: "none",
                          color: "black",
                        })
                      }
                    >
                      <img src={product.imageSrc} alt="new" class="center" />
                      <Card.Title as="div" class="nobox">
                        <strong>{product.name}</strong>
                      </Card.Title>
                      <Card.Text as="h3" class="nobox">
                        {product.price}
                      </Card.Text>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
}

export default Gaming;
