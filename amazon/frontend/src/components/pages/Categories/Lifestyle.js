import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../../../App.css";
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from '../../Product'
import { useDispatch, useSelector } from 'react-redux'
import { displayLifestyleProducts } from '../../../actions/lifestyleProductsActions'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'

function Lifestyle() {
  const dispatch = useDispatch()
  const lifestyleProductsList = useSelector(state => state.lifestyleProducts)
  const { load, error, lifestyleProducts } = lifestyleProductsList

  const params = useParams()
  
  useEffect(() => {
    
    dispatch(displayLifestyleProducts(params.Lifestyle))
    
  }, [dispatch, params.Lifestyle])

  
  return (
    <>
    <div>
            {load ? <Loader />
                : error ? <Message variant='warning'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {lifestyleProducts.map(product => (
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

export default Lifestyle;
