import React from 'react';
import styles from '../styles/About.module.css';
import friendImage from '../assets/SM.png'; // Certifique-se de que o caminho está correto

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <img src={friendImage} alt="Minha amiga" className={styles.friendImage} />
            <div>
                <h2>Sobre Mim</h2>
                <p>
                    Sou uma <span>consultora de imagem e estilo</span> dedicada a ajudar você a descobrir seu estilo único e realçar sua beleza natural. Com uma abordagem cristã e um foco especial na <span>coloração pessoal</span>, meu objetivo é transformar a maneira como você se vê, refletindo sua <span>identidade autêntica</span> através da moda e do estilo. Vamos juntas celebrar a <span>beleza que Deus criou</span> em você!
                </p>
            </div>
        </section>
    );
}

export default About;
