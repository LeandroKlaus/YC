import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/Home.module.css';
import DNImage from '../assets/DN.jpeg';
import About from './About';
import Services from './Services';
import ColorTest from './ColorTest';

const Home: React.FC = () => {
    const handleButtonClick = () => {
        window.open('https://wa.me/5582999999999?text=Olá,%20gostaria%20de%20uma%20consultoria%20sobre%20coloração%20pessoal/imagem%20e%20estilo.', '_blank');
    };

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
            <section id="home" className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>Bem-vindo ao Your Color</h1>
                        <p className={styles.description}>Descubra sua coloração pessoal e<br />realce sua beleza natural.</p>
                        <button className={styles.ctaButton} onClick={handleButtonClick}>Descubra sua coloração pessoal</button>
                    </div>
                    <div className={styles.hero}>
                        <img src={DNImage} alt="Coloração Pessoal" />
                    </div>
                </div>
            </section>
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="colortest">
                <ColorTest />
            </section>
            <section id="contact">
                <h1>Contato</h1>
                {/* Conteúdo da seção Contato */}
            </section>
        </div>
    );
}

export default Home;
