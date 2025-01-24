import React from 'react';
import styles from '../styles/About.module.css';
import friendImage from '../assets/SM.png'; // Certifique-se de que o caminho está correto

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <img src={friendImage} alt="Minha amiga" className={styles.friendImage} />
            <div>
                <h2>Sobre Mim</h2>
                <p>Sou uma consultora de imagem e estilo dedicada a ajudar você a descobrir seu estilo único e realçar sua beleza natural.</p>
            </div>
        </section>
    );
}

export default About;
