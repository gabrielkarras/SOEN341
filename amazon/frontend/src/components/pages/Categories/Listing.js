import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";
function Listing({value}) {
  return (
    <Col key={value._id} sm={12} md={6} Lg={4} xL={3}>
                <Card className="my-3 p-3 rounded">
                  <Link to={`/product/${value._id}`}>
                    <img
                      src={value.imageSrc}
                      alt="new"
                    /></Link>

                  <Card.Body>
                    <Link to={`/product/${value._id}`}>
                      <Card.Title as="div"><bold>{value.name}</bold></Card.Title>
                    </Link>

                    <Card.Text as ="h3">
                      {value.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
  )
}

export default Listing