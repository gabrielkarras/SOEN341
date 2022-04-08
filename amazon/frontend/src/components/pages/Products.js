import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../App.css";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displaySearch } from "../../actions/searchAction";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Searchbar from "./Searchbar";

function Products() {
  const dispatch = useDispatch();
  const Searchlist = useSelector((state) => state.Searchproduct);
  const { load, error, Searchproduct } = Searchlist;

  const params = useParams();

  useEffect(() => {
    dispatch(displaySearch(params));
  }, [dispatch, params]);
  return (
    <>
      <div>
        {load ? (
          <Loader />
        ) : error ? (
          <Message variant="warning">{error}</Message>
        ) : (
          <div className="center">
            <p className="textcenter"></p>
            <Searchbar
              placeholder="Enter Product Name..."
              data={Searchproduct}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
