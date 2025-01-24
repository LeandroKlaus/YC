import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/Home.module.css';
import DNImage from '../assets/DN.jpeg'; // Certifique-se de que o caminho da imagem está correto
import About from './About'; // Importar o componente About
import Services from './Services'; // Importar o componente Services
import ColorTest from './ColorTest'; // Importar o componente ColorTest

const Home: React.FC = () => {
    return (
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Le+French&display=swap" rel="stylesheet" />
                <style>
                    {`@font-face {
                        font-family: 'Classy Marisa';
                        src: url('/ClassyMarisa.otf') format('opentype');
                        font-weight: normal;
                        font-style: normal;
                    }`}
                </style>
            </Helmet>
            <section className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>Bem-vindo ao Your Color</h1>
                        <p className={styles.description}>Descubra sua coloração pessoal e<br></br>realce sua beleza natural.</p>
                        <button className={styles.ctaButton}>Descubra sua coloração pessoal</button>
                    </div>
                    <div className={styles.hero}>
                        <img src={DNImage} alt="Coloração Pessoal" />
                    </div>
                </div>
            </section>
            <About /> {/* Importar a seção About abaixo da main */}
            <Services /> {/* Importar a seção Services abaixo da seção About */}
            <ColorTest /> {/* Importar a seção ColorTest abaixo da seção Services */}
        </div>
    );
}

export default Home;
