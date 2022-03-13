import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../../../App.css";
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from '../../Product'
import { useDispatch, useSelector } from 'react-redux'
import { displayPetsProducts } from '../../../actions/petsProductsActions';
import Loader from '../../Loader'
import Message from '../../Message'
function Pets() {

  const dispatch = useDispatch()
  const petsProductsList = useSelector(state => state.petsProducts)
  const { load, error, petsProducts } = petsProductsList

  const params = useParams()
  
  useEffect(() => {
    
    dispatch(displayPetsProducts(params.Pets))
    console.log(params);
  }, [dispatch, params.Pets])

  
  return (
    <>
    <div>
            {load ? <Loader />
                : error ? <Message variant='warning'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {petsProducts.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        
                    </div>
            }
        </div>
    <Footer />
    </>
  )
}

export default Pets;
