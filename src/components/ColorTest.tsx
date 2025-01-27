import React, { useState } from "react";
import styles from "../styles/colortest.module.css";

const ColorTest: React.FC = () => {
  const [selectedSkinColor, setSelectedSkinColor] = useState("");
  const [selectedHairColor, setSelectedHairColor] = useState("");
  const [selectedFavoriteColor, setSelectedFavoriteColor] = useState("");

  const handleSkinColorClick = (color: string) => setSelectedSkinColor(color);
  const handleHairColorClick = (color: string) => setSelectedHairColor(color);
  const handleFavoriteColorClick = (color: string) =>
    setSelectedFavoriteColor(color);

  const handleWhatsAppClick = () => {
    const message = `Cor da Pele: ${selectedSkinColor}\nCor do Cabelo: ${selectedHairColor}\nCor Favorita: ${selectedFavoriteColor}`;
    window.open(`https://wa.me/+559299999-9999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Teste de<br></br>Coloração<br></br>Pessoal</h1>
        <div className={styles.decorativeLine}></div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Cor da Pele</h2>
          <div className={styles.colorOptions}>
            {["#c58c85", "#ecbcb4", "#d1a68c"].map((color) => (
              <div
                key={color}
                className={`${styles.colorCircle} ${
                  selectedSkinColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleSkinColorClick(color)}
              ></div>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2>Cor do Cabelo</h2>
          <div className={styles.colorOptions}>
            {["#2c1b18", "#5a3e36", "#b35a27"].map((color) => (
              <div
                key={color}
                className={`${styles.colorCircle} ${
                  selectedHairColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleHairColorClick(color)}
              ></div>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2>Cor Favorita</h2>
          <div className={styles.colorOptions}>
            {["#d96332", "#f0c987", "#ebbab9"].map((color) => (
              <div
                key={color}
                className={`${styles.colorCircle} ${
                  selectedFavoriteColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleFavoriteColorClick(color)}
              ></div>
            ))}
          </div>
        </section>
        <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>Enviar para WhatsApp</button>
      </main>
    </div>
  );
};

export default ColorTest;
