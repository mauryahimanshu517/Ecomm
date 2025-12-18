import React, { useContext } from 'react'
import { DataContext } from '../Context/ApiData'
import "../Component/Products/Product.css"

function Cart() {
  const { cart,Decrement , DeleteProduct, Increment  } = useContext(DataContext)

  return (
    <>
      <div>Cart</div>
      <div className="product-grid">

        {
          cart?.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.slice(0, 30) + "..."}
                </p>
                <div className="button-container">
                  <a onClick={() => DeleteProduct(product.id)} className="btn btn-primary">
                    Delete
                  </a>

                  <a className="btn btn-success d-flex align-items-center justify-content-between">
                    <button onClick={()=>Increment(product)} style={{fontSize:"15px"}} className="btn btn-warning">+</button>
                  
                    <span className="mx-2">{product.price*product.quantity}</span>
                    <button  onClick={()=>Decrement(product)}  className="btn btn-warning">-</button>
                  </a>


                </div>
              </div>
            </div>
          ))}
      </div>
    </>


  )
}

export default Cart