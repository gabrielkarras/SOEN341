import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as="h3">
                {product.price}
            </Card.Text>
        </Link>
    </Card>
  )
}

export default Product
