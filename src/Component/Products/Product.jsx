import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/ApiData'
import "../Products/Product.css"
import { Link } from "react-router-dom"

function Product() {
    const { data, addToCart } = useContext(DataContext)
    const [categories, setcategories] = useState('ALL')
    const [search, setSearch] = useState("")
    const [first, setfirst] = useState(data)
    const uniqueCategories = [
       "ALL", ...new Set(data?.map(item => item.category))
    ];
    // console.log(data)
    function valuedata(e) { 
        // console.log("data from value data ",e.target.value)
        setcategories(e.target.value)
    }

    const filterElement=data?.filter((items)=>{
         return items.title.toLowerCase().startsWith(search.trim().toLowerCase())
    })
    function clickbtn(){
        setfirst(filterElement)
    }

//    console.log(filterElement)
    return (
        <>
            <h1 className="Product_heading">Products</h1>
            <div className="search_cat">
                <input className="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search for product'></input>
                <button className='search_btn' onClick={clickbtn}>Search</button>
                <select name="cars" id="product" onChange={(e) => valuedata(e)}> 
                    {uniqueCategories.map((items, index) => {
                        return (
                            <option value={items} key={index} >{items}</option>
                        )

                    })} 
                </select>
            </div>
            <div className="product-grid">
                <div className="product-grid">
                    {first?.filter(product =>
                    
                            categories === "ALL" || product.category === categories
                        )
                        .map((product, index) => (
                            <div className="product-card" key={index}>
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={product.image}
                                        className="card-img-top w-[200px] h-[200px]"
                                        alt={product.name}
                                    />
                                </Link>

                                <div className="card-body">
                                    <h5 className="card-title">{product.title.slice(0,28)}</h5>
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

            </div>
        </>

    )
}

export default Product