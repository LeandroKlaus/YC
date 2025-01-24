import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <p>Endereço: Rua Exemplo, 123</p>
                <p>Email: contato@consultoria.com</p>
                <p>Telefone: (99) 9999-9999</p>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;
