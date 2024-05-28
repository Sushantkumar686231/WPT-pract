import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    
  return (

        props.productList.length>0 ?
        props.productList.map((product,i)=>{
            return <Product
                     product={product} 
                     key={i}
                    incrementquantity={props.incrementquantity} 
                    decrementquantity={props.decrementquantity} 
                    index={i}
                    removeItem={props.removeItem}/>;
        })
        : <h1>NO ITEM FOUND</h1>
    )
}
