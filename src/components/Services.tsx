import React from 'react';
import styles from '../styles/Services.module.css';
import serviceImage from '../assets/service.png'; // Certifique-se de que o caminho está correto

const Services: React.FC = () => {
    return (
        <section className={styles.services}>
            <div className={styles.serviceContent}>
                <h2>Serviços</h2>
                <p>Como consultora de imagem e estilo, ofereço uma variedade de serviços para ajudar você a descobrir e aprimorar sua aparência única, incluindo:</p>
                <ul>
                    <li>Análise de coloração pessoal</li>
                    <li>Consultoria de estilo</li>
                    <li>Organização de guarda-roupa</li>
                    <li>Personal shopper</li>
                    <li>Consultoria de imagem corporativa</li>
                </ul>
            </div>
            <img src={serviceImage} alt="Serviços de consultoria" className={styles.serviceImage} />
        </section>
    );
}

export default Services;
