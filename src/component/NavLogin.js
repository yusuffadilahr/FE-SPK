import React from 'react';
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
    return (
        <nav className="navbar is-white" aria-label="main navigation" style={{
            borderBottom: '1px solid #d3d3d3',
            boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
        }}>
            <div className='container'>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/#" className="navbar-item" style={{
                            fontFamily: 'Helvetica',
                            fontWeight: 'bold',
                        }}>
                            Model Rekomendasi Skincare
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button className="button is-white" style={
                                    {
                                        fontFamily: 'Helvetica',
                                        fontWeight: 'bold',
                                    }
                                }>
                                    <Link to="/" style={{
                                        color: '#000000',
                                    }}>
                                        Login
                                    </Link>

                                </button>
                                <button className="button is-black" style={
                                    {
                                        fontFamily: 'Helvetica',
                                        fontWeight: 'bold',
                                    }

                                }>
                                    <Link to="/register" style={{
                                        color: '#ffffff',
                                    }}>
                                        Register
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLogin