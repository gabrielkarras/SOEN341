import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black"
  
}

function Product({ product }) {

  return (
    <Card className="Show">
      <Link to={`/product/${product._id}`} style ={linkStyle}>
        <img
          src={product.imageSrc}
          alt="new" class="center" />
        <Card.Title as="div" class="nobox">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="h3"class="nobox">
          {product.price}
        </Card.Text>
      </Link>
    </Card>
  )
}

export default Product
