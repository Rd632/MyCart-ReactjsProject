import React from 'react'
import Product from './Product';



export default function ProductList(props) {
    
  return (
    props.productList.length>0 ?
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeQuantity={props.removeQuantity}/>
    })
    :<h1> No products in the Cart</h1>
  )
}
