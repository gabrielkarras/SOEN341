import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Footer from '../../Footer'
import axios from 'axios'
/*
const DetailedProductpage= () => {
    const {productID} = useParams()
    return (
        
    <>
      <div>DetailedProductpage - {productID}</div>
      <div > {Items.map((value, key) => {
        if(value._id==productID){
        return < ><p>{value.name}</p> <p>{value.price}</p> </>
      }})}</div>

      <Footer/>
      </>
    )
}
export default DetailedProductpage*/

function DetailedProductPage(){
  const params = useParams()
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    console.log("useEffect triggered")

    async function fetchProduct(){
      const { data } = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
      
    }

    fetchProduct()

  }, [])

  return (
    <><div>
      <Row>
        <Col md={6}>
          
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

              <ListGroupItem>
                  <Button className='btn-block' disabled={product.numInStock == 0} type='button'> Add to cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div><Footer /></>
  )
  
}

export default DetailedProductPage



