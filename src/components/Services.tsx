import React from 'react';
import styles from '../styles/Services.module.css';
import serviceImage from '../assets/service.png'; // Certifique-se de que o caminho está correto

const Services: React.FC = () => {
    const handleButtonClick = () => {
        window.open('https://wa.me/5582999999999?text=Olá,%20gostaria%20de%20uma%20consultoria%20sobre%20coloração%20pessoal/imagem%20e%20estilo.', '_blank');
    };

    return (
        <section className={styles.services}>
            <div className={styles.serviceContent}>
                <h2>Serviços</h2>
                <p>
                    Como consultora de imagem e estilo, ofereço uma variedade de serviços para ajudar você a descobrir e aprimorar sua aparência única. Explore nossos serviços e veja como podemos transformar seu estilo:
                </p>
                <ul>
                    <li>Análise de coloração pessoal</li>
                    <li>Consultoria de estilo</li>
                    <li>Organização de guarda-roupa</li>
                    <li>Personal shopper</li>
                    <li>Consultoria de imagem corporativa</li>
                </ul>
                <button className={styles.ctaButton} onClick={handleButtonClick}>Saiba mais</button>
            </div>
            <img src={serviceImage} alt="Serviços de consultoria" className={styles.serviceImage} />
        </section>
    );
}

export default Services;
