import './index.scss'
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
    <div className='nvabar-tab'>
        <nav>
            <ul>
                
                <li><Link to="/about/projects">Projects</Link></li>
                <li><Link to="/about/resume">Resume</Link></li>
            </ul>
        </nav>
    </div>
    );

}

export default Navbar;