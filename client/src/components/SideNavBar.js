import React from 'react';
import styles from '../styles/TechStyle.module.css';

const SideNavBar = props => {
    return (
        <div class="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>

        <div class="main">
            ...
        </div>
    )
}

export default SideNavBar;