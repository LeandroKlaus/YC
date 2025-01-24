import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre Mim</Link></li>
                <li><Link to="/services">Serviços</Link></li>
                <li><Link to="/colortest">Testes Interativos</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
