import React from 'react';
import styles from './NuvemDePalavras.module.css';

const NuvemDePalavras = ({ words }) => {
  if (!words || words.length === 0) {
    return <p>Nenhum grupo para exibir</p>;
  }

  // Filtra palavras duplicadas
  const wordsUnicas = words.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.projeto === value.projeto
    ))
  );

  return (
    <div className={styles.NuvemDePalavrasContainer}>
      {wordsUnicas.map((word, index) => {
        let fontSize = 16; // tamanho pequeno por padrão
        let color = '#333'; // cor padrão para outros projetos

        // Definir o tamanho e a cor baseado no rank (número de votos)
        if (word.rank >= 10) {
          fontSize = 40; // grande
          color = '#e53e3e'; // cor para o projeto mais votado (vermelho mais forte)
        } else if (word.rank >= 7) {
          fontSize = 32; // médio
          color = '#f87171'; // cor para o segundo projeto mais votado (vermelho mais suave)
        } else if (word.rank >= 5) {
          fontSize = 16; // pequeno
          color = '#fc8181'; // cor para o terceiro projeto mais votado (vermelho claro)
        }

        return (
          <span
            key={`${word.projeto}-${index}`}
            className={styles.word}
            style={{ fontSize: `${fontSize}px`, color }}
          >
            {word.projeto}
          </span>
        );
      })}
    </div>
  );
};

export default NuvemDePalavras;
