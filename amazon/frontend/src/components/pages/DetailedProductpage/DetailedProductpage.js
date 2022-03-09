import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'
import Footer from '../../Footer'
import { displayDetailedProduct } from '../../../actions/productActions'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'


function DetailedProductPage(){

  const dispatch = useDispatch()
  const detailedProduct = useSelector(state => state.detailedProduct)
  const { load, error, product } = detailedProduct

  const[qty, setQty] = useState(1)
  const params = useParams()
  const navigate = useNavigate() 
  
  useEffect(() => {

    dispatch(displayDetailedProduct(params.id))
    
  }, [dispatch, params])

  const cartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <><div>
      {load ? <Loader />
        : error ? <Message variant = "warning">{ error }</Message>
          :(
            <Row>
            <Col md={6}>
              <img
              src = {product.imageSrc}
              alt="new"
              />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h2>{product.name}</h2>
                </ListGroupItem>

                <ListGroupItem>
                  <h3>{product.category}</h3>
                </ListGroupItem>

                <ListGroupItem>
                  <h3>{product.body_location}</h3>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card> 
                <ListGroup variant='flush'>
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                      <strong>{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                          {product.numInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.numInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>Quantity</Col>
                        <Col xs = "auto" className = "my-1">
                          <Form.Control
                            as = "select"
                            value = {qty}
                            onChange = {(e) => setQty(e.target.value)}
                            >
                            {
                              [...Array(product.numInStock).keys()].map((count) => (
                                <option key = {count + 1} value = {count + 1}>
                                  {count + 1}
                                </option>
                              ))
                            }
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem>
                      <Button onClick = {cartHandler} className = "btn-block" disabled = {product.numInStock == 0} type = "button"> Add to cart</Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>      
          )
      }
        </div><Footer /></>
  )
  
}

export default DetailedProductPage



