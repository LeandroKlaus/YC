import React from 'react';
import Navbar from './Navbar'; // Certifique-se de importar a navbar
import styles from '../styles/header.module.css'; // Certifique-se de que o caminho está correto

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
