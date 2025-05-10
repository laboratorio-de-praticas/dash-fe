'use client';

import React, { useContext, useState, useEffect } from 'react';
import NuvemDePalavras from '@/components/WordCloud/NuvemDePalavras';
import { TurmaContext } from '@/context/TurmaContext'; // Adicionando a importação do contexto
import styles from '@/styles/nuvem-projetos.module.css';

const ProjectCloud = () => {
  const {
    nuvemPalavrasProjetos
  } = useContext(TurmaContext);

  const [projetosFiltrados, setProjetosFiltrados] = useState([]);

  // useEffect para carregar todos os projetos
  useEffect(() => {
    setProjetosFiltrados(nuvemPalavrasProjetos ? Object.values(nuvemPalavrasProjetos).flat() : []);
  }, [nuvemPalavrasProjetos]); // Atualiza os projetos sempre que 'nuvemPalavrasProjetos' mudar

  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} text-3xl font-bold mb-8 text-center`}>Nuvem de Projetos</h1>

      <div className={styles.card}>
        <NuvemDePalavras words={projetosFiltrados} />
      </div>
    </div>
  );
};

export default ProjectCloud;
