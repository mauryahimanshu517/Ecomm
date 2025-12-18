import React, { useContext } from 'react'
import { DataContext } from '../../Context/ApiData'
import "../Products/Product.css"
import { Link } from "react-router-dom"

function Product() {
    const { data, addToCart } = useContext(DataContext)
    
    return (
        <>
            <h1 className="Product_heading">Products</h1>
            <div className="product-grid">
                {data?.map((product, index) => (
                    <div className="product-card" key={index}>
                        <Link to={`/product/${product.id}`}>
                            <img
                                src={product.image}
                                className="card-img-top w-[200px] h-[200px]"
                                alt={product.name}
                            />
                        </Link>

                        <div className="card-body">
                            <h5 className="card-title">{product.title.slice(0, 28)}</h5>
                            <p className="card-text">
                                {product.description.slice(0, 40) + "..."}
                            </p>
                            <div className="button-container">
                                <a onClick={() => addToCart(product)} className="btn btn-primary">
                                    Add to cart
                                </a>
                                <a className="btn btn-success">
                                    ${product.price}
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Product