import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#home" className={styles.link}>Home</a></li>
                <li><a href="#about" className={styles.link}>Sobre Mim</a></li>
                <li><a href="#services" className={styles.link}>Serviços</a></li>
                <li><a href="#colortest" className={styles.link}>Testes Interativos</a></li>
                <li><a href="#contact" className={styles.link}>Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
