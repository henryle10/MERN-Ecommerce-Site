import React from 'react';
import styles from '../styles/TechStyle.module.css';
import { Link } from "@reach/router";

const SideNavBar = props => {
    return (
        <div className={`col-md-2 ${styles.sideNavContainer} p-2`} >
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            <hr />
        </div >
    )
}

export default SideNavBar;