import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <p><Link to="/dogs">Dog List</Link></p>
        </nav >
    )
}

export default Nav
