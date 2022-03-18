import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../../../App.css";
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from '../../Product'
import { useDispatch, useSelector } from 'react-redux'
import { displayCategoryProducts } from '../../../actions/categoryActions'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'

function Gaming() {
  const dispatch = useDispatch()
  const gamingProductsList = useSelector(state => state.categoryProducts)
  const { load, error, categoryProducts } = gamingProductsList

  const params = useParams()
  
  useEffect(() => {
    
    dispatch(displayCategoryProducts(params.Gaming))
    
  }, [dispatch, params.Gaming])

  
  return (
    <>
    <div>
            {load ? <Loader />
                : error ? <Message variant='warning'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {categoryProducts.map(product => (
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

export default Gaming;
