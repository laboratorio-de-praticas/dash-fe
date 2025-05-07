import React from 'react';
import styles from './NuvemDePalavras.module.css';

const NuvemDePalavras = ({ words }) => {
  if (!words || words.length === 0) {
    return <p>Nenhum grupo para exibir</p>;
  }

  return (
    <div className={styles.NuvemDePalavrasContainer}>
      {words.map((word, index) => {
        let fontSize = 16; // tamanho pequeno por padrão

        if (word.rank >= 10) {
          fontSize = 48; // grande
        } else if (word.rank >= 7) {
          fontSize = 32; // médio
        } else {
          fontSize = 16; // pequeno
        }

        return (
          <span
            key={`${word.projeto}-${index}`}
            className={styles.word}
            style={{ fontSize: `${fontSize}px` }}
          >
            {word.projeto}
          </span>
        );
      })}
    </div>
  );
};

export default NuvemDePalavras;
