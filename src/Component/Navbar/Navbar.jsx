import { Link } from 'react-router-dom';
import './navbarStyle.css';
import 'remixicon/fonts/remixicon.css'
import { useContext, useState } from 'react';
import { DataContext } from '../../Context/ApiData';

function Navbar() {
    const {cart}=useContext(DataContext)
    return (
        <>
            <div className="Logo">
                <Link className="link" to="/"><h1 to="/"><span style={{ color: "red" }}>Cl</span>othings</h1></Link>

                <nav className="nav_link">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/About">About</Link>
                    <Link className="link" to="/Contact">Contact</Link>
                    <Link className="link" to="/Services">Services</Link>
                </nav>
                <ul className="icon">
                  
                    <Link className="link" to="/cart"><i style={{ fontSize: '25px' }} className="ri-heart-line"></i><div className="counter">{cart.length}</div></Link>

                    <i style={{ fontSize: '25px' }} className="ri-user-line"></i>
                </ul>
            </div>

        </>

    );
}

export default Navbar;
