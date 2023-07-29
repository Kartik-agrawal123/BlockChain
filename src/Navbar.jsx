import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
           <div className='navbar' >
           {/* <img src="/images/navstyleimg.png" alt="Nav Style Image" /> */}
                <h1>Merka</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/coins">Coins</NavLink></li>
                    <li><NavLink to="/exchange">Exchange</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;