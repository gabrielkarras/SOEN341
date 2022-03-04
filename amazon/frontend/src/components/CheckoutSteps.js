import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function CheckoutSteps({step1, step2, step3, step4}) {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {/* LINKCONTAINER SHOULD HAVE A PATH TO LOGIN i.e.: to='/login' */}

            {step1 ? (
                <LinkContainer to='/Login.js'>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Login</Nav.Link>
            )}
            
        </Nav.Item>

        <Nav.Item>
            {step2 ? (

                <LinkContainer to='./components/pages/ShippingScreen.js'>
                    <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
            
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/Payments.js'>
                    <Nav.Link>Payment</Nav.Link>  
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
            
        </Nav.Item>
        
        <Nav.Item>
            {step4 ? (
                <LinkContainer to='/PlaceOrder.js'>
                    <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
            
        </Nav.Item>

    </Nav>
  )
}

export default CheckoutSteps