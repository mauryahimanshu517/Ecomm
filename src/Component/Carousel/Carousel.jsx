import React, { useContext } from 'react';
import {DataContext} from "../../Context/ApiData"
import "./carouselStyle.css"
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
    const { data, setData } = useContext(DataContext)
   
    return (
        <div className="Carousel">
            <Carousel>
                {data?.slice(0, 5).map((item) => (
                    <Carousel.Item className='carouselItem' key={item.id}>
                        <img src={item.image}  alt={item.title} />

                        <Carousel.Caption>
                            <h5>{item.title}</h5>
                            <p>{item.category}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Carousels
