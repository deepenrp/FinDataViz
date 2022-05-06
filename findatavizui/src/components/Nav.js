import React from 'react'; // ES6 js
import { Link } from 'react-router-dom';
import logo from '../images/waves.jpg';
import '../styles/Nav.css';

function Nav() {
    return (
        <nav class="navbar justify-content-center">

            <background>
                <h3 class="navHeader"><center>Financial Data Viz</center></h3>
                <ul class="nav justify-content-center">
                    <hr size="18"></hr>
                    <li class="nav-item">
                        <Link to='/market' className="nav-item nav-link navFont">Overall Market</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/stock' className="nav-item nav-link navFont">Stock Company</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/correlations' class="nav-item nav-link navFont">Correlations</Link>
                    </li>
                    <hr size="18"></hr>
                </ul>
            </background>
        </nav>

    );
}

export default Nav;