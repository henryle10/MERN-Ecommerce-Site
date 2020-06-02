import React from 'react';
import styles from '../styles/TechStyle.module.css';

const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg p-3">
            <a className="navbar-brand"> <span className={styles.textTech}>Navbar</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link"><span className={styles.textTech}>Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><span className={styles.textTech}>Products</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><span className={styles.textTech}>Brands</span></a>
                    </li>
                </ul>
                <div className="my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link"><span className={styles.textTech}>Login</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><span className={styles.textTech}>Cart(0)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;