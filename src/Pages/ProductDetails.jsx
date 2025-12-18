import React, { useContext } from 'react'
import { Link, useParams } from "react-router-dom";

import { DataContext } from '../../src/Context/ApiData'
import "../Pages/productDetails.css"

function ProductDetails() {
    const { id } = useParams();
    const { data, addToCart, handleSend, setText, text, savedText } = useContext(DataContext)


    const product = data.find(p => p.id === Number(id));
    

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h1 className="Product_heading">Product Details</h1>

            <div className="product-details-container">
                {/* LEFT: Product Image */}
                <div className="product-image-section">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                </div>

                {/* RIGHT: Product Info */}
                <div className="product-info-section">
                    <h2 className="product-title">{product.title}</h2>

                    {/* Rating */}
                    <div className="product-rating">
                        ⭐ ⭐ ⭐ ⭐ ☆
                        <span className="rating-text"> (4.2 ratings)</span>
                    </div>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <h3 className="product-price">₹{product.price}</h3>

                    <div className="button-data">
                        <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary"
                        >
                            Add to Cart
                        </button>

                        <button className="btn btn-success">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>


            <div className="text_area">
                {savedText.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
                <input className="input_field" value={text} onChange={(e) => setText(e.target.value)} ></input>
                <button onClick={handleSend} className="send_btn">Send</button>

            </div>
        </>

    )
}

export default ProductDetails