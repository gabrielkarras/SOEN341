import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from "../../Product";
import { useDispatch, useSelector } from "react-redux";
import { displayCategoryProducts } from "../../../actions/categoryActions";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

function Entertainment() {
  const dispatch = useDispatch();
  const entertainmentProductsList = useSelector(
    (state) => state.categoryProducts
  );
  const { load, error, categoryProducts } = entertainmentProductsList;

  const params = useParams();

  useEffect(() => {
    dispatch(displayCategoryProducts(params.Entertainment));
  }, [dispatch, params.Entertainment]);

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
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Entertainment;

/*{entertainmentProducts.map((value, key) => {
  if(value.category=="Entertainment"){
  return <Link to={`/product/${value._id}`}>
  <p >{value.name}</p> </Link>
}})*/
