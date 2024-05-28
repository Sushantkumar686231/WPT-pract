import React from 'react'

export default function Product(props) {
   
  return (
        <div className='row'>
            <div className='col-4'>
                <h2>{props.product.phone} <span className="badge text-bg-secondary">₹{props.product.price}</span></h2>
            </div>

            <div className='col-3'>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={()=>{props.decrementquantity(props.index)}}>-</button>
                <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                <button type="button" className="btn btn-success" onClick={()=>{props.incrementquantity(props.index)}}>+</button>
                </div>
            </div>

            <div className='col-2'>
                <div>{props.product.quantity*props.product.price}</div>
            </div>

            <div className='col-2'> 
                <button className='btn btn-danger' onClick={()=>{
                    props.removeItem(props.index)
                }}>REMOVE</button>
            </div>
        
        </div>
  
  )
}
