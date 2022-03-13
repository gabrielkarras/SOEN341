import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../../../App.css";
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from '../../Product'
import { useDispatch, useSelector } from 'react-redux'
import { displayMedicalProducts } from '../../../actions/medicalProductsAnimals';
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'

function Medical() {
  const dispatch = useDispatch()
  const medicalProductsList = useSelector(state => state.medicalProducts)
  const { load, error, medicalProducts } = medicalProductsList

  const params = useParams()
  
  useEffect(() => {
    
    dispatch(displayMedicalProducts(params.Medical))
    
  }, [dispatch, params.Medical])

  
  return (
    <>
    <div>
            {load ? <Loader />
                : error ? <Message variant='warning'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {medicalProducts.map(product => (
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

export default Medical;
