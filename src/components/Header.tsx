import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Your Color</h1>
            <nav>
                <Navbar />
            </nav>
        </header>
    );
}

export default Header;
