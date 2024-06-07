import React from 'react';
import { Link } from 'react-router-dom';
//ici c'est l'importation du fichier css 
import'./header.css'
const Header = () => {
    return (
        <div className='Header'>
        <header>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link> </li>
                    <li> <Link to="/service">Service</Link> </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        </div>
    );
};

export default Header;