import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Contato</h1>
            <form className={styles.form}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message"></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
