import React, { useState } from 'react';
import styles from '../styles/ColorTest.module.css';

const ColorTest: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para calcular o resultado com base nas respostas
        setResult('Baseado nas suas respostas, sua coloração pessoal é Primavera.');
    };

    return (
        <section className={styles.colorTest}>
            <h2>Teste de Coloração Pessoal</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="skinTone">Qual é o tom da sua pele?</label>
                <select id="skinTone">
                    <option value="pardo">Pardo</option>
                    <option value="negro">Negro</option>
                    <option value="branco">Branco</option>
                </select>

                <label htmlFor="skinUndertone">Qual é o subtom da sua pele?</label>
                <select id="skinUndertone">
                    <option value="frio">Frio</option>
                    <option value="neutro">Neutro</option>
                    <option value="quente">Quente</option>
                </select>

                <label htmlFor="hairColor">Qual é a cor do seu cabelo?</label>
                <select id="hairColor">
                    <option value="loiro">Loiro</option>
                    <option value="castanho">Castanho</option>
                    <option value="preto">Preto</option>
                    <option value="ruivo">Ruivo</option>
                    <option value="grisalho">Grisalho</option>
                </select>

                <label htmlFor="eyeColor">Qual é a cor dos seus olhos?</label>
                <select id="eyeColor">
                    <option value="azul">Azul</option>
                    <option value="verde">Verde</option>
                    <option value="castanho">Castanho</option>
                    <option value="avela">Avelã</option>
                </select>

                <label htmlFor="favoriteColor">Qual é a cor que você mais gosta de usar?</label>
                <select id="favoriteColor">
                    <option value="vermelho">Vermelho</option>
                    <option value="azul">Azul</option>
                    <option value="verde">Verde</option>
                    <option value="amarelo">Amarelo</option>
                    <option value="rosa">Rosa</option>
                    <option value="roxo">Roxo</option>
                    <option value="laranja">Laranja</option>
                    <option value="marrom">Marrom</option>
                    <option value="cinza">Cinza</option>
                    <option value="preto">Preto</option>
                    <option value="branco">Branco</option>
                    <option value="bege">Bege</option>
                </select>

                <button type="submit">Descubra sua coloração</button>
            </form>
            {result && <p>{result}</p>}
        </section>
    );
};

export default ColorTest;
