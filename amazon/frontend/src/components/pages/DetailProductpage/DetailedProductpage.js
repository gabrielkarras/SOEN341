import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import Items from '../items.json'
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
export default DetailedProductpage