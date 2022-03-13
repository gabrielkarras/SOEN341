import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../../../App.css";
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Product from '../../Product'
import { useDispatch, useSelector } from 'react-redux'
import { displayFitnessProducts } from '../../../actions/fitnessProductsActions'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'


function Fitness() {
 
  const dispatch = useDispatch()
  const fitnessProductsList = useSelector(state => state.fitnessProducts)
  const { load, error, fitnessProducts } = fitnessProductsList

  const params = useParams()
  
  useEffect(() => {
    
    dispatch(displayFitnessProducts(params.Fitness))
    
  }, [dispatch, params.Fitness])

  
  return (
    <>
    <div>
            {load ? <Loader />
                : error ? <Message variant='warning'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {fitnessProducts.map(product => (
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

export default Fitness;
