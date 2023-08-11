import React from 'react'
import logo from './LOGO.svg';
import dropdown from './dropdown.svg';
import search from './search.svg';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="section1">
                        <a href="#" className="brand-logo">
                            <img src={logo} alt="" />
                        </a>
                        <ul>
                            <li>
                                <div className="li-item">
                                    <p>Courses</p>
                                    <img src={dropdown} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="li-item">
                                    <p>Programs</p>
                                    <img src={dropdown} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="section2">
                        <div className="search">
                            <img src={search} alt="" />
                        </div>
                        <div className="login">
                            <p>Login</p>
                        </div>
                        <div className="joinnow">
                            <button>Join Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header