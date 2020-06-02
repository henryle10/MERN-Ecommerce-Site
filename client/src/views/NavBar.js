import React from 'react';
import styles from '../styles/TechStyle.module.css';
import { Redirect, Router, Link, navigate } from "@reach/router";
import axios from 'axios';

const NavBar = props => {
    const logout = () => {
        axios
          .post(
            "http://localhost:8000/api/logout",
            {},
            {
              // need to send the cookie in request so server can clear it
              withCredentials: true
            }
          )
          .then(res => {
            console.log(res);
          })
          .catch(console.log);
    
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg p-3">
            {/* <Router> */}
                <h1 className="navbar-brand m-0"> <span className={styles.textTech}>Navbar</span></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"><Link to="/"><span className={styles.textTech}>Home</span></Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/all/products"><span className={styles.textTech}>Products</span></Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><span className={styles.textTech}>Brands</span></a>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" onClick={logout}><span className={styles.textTech}>Login</span></a>
                            </li>                            
                            <li className="nav-item">
                                <a className="nav-link"><Link to="/product/new"><span className={styles.textTech}>Sell</span></Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><span className={styles.textTech}>Cart(0)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </Router> */}
        </nav >
    )
}

export default NavBar;