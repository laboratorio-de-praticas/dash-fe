'use client';

import React, { useContext, useState, useEffect } from 'react';
import NuvemDePalavras from '@/components/WordCloud/NuvemDePalavras';
import { Dropdown } from 'primereact/dropdown';
import { TurmaContext } from '@/context/TurmaContext';
import styles from '@/styles/nuvem-projetos.module.css';

const ProjectCloud = () => {
  const {
    selectedCurso,
    setSelectedCurso,
    selectedTurma,
    setSelectedTurma,
    selectedArea,
    setSelectedArea,
    curso,
    turmas,
    projetos,
    areasDeAtuacao
  } = useContext(TurmaContext);

  const turmasOptions = selectedCurso === "todos"
    ? Object.values(turmas).flat()
    : turmas[selectedCurso] || [];

  const [projetosFiltrados, setProjetosFiltrados] = useState([]);

  // useEffect para aplicar os filtros sempre que os estados de filtro mudarem
  useEffect(() => {
    const filteredProjects = (selectedCurso === 'todos'
      ? Object.values(projetos).flat() 
      : projetos[selectedCurso] || [] 
    ).filter((proj) => {
      // Filtra por área de atuação
      const isAreaMatch = selectedArea && selectedArea !== 'all' && selectedArea !== 'todos'
        ? proj.area === selectedArea
        : true;

      // Filtra por turma
      const isTurmaMatch = selectedTurma && selectedTurma !== 'todos' ? proj.turma === selectedTurma : true;

      return isAreaMatch && isTurmaMatch;
    });

    setProjetosFiltrados(filteredProjects);
  }, [selectedCurso, selectedTurma, selectedArea, projetos]); // Recalcula os projetos sempre que algum filtro mudar

  return (
    <div className={styles.container}>
      <h1 className={`${styles.header} text-3xl font-bold mb-8 text-center`}>Nuvem de Projetos</h1>

      <div className={styles.dropdownsContainer}>
        <Dropdown
          value={selectedCurso}
          onChange={(e) => setSelectedCurso(e.value)}
          options={curso}
          optionLabel="name"
          placeholder="Selecione um curso"
          className={styles.cursoSelector}
        />

        <Dropdown
          value={selectedTurma}
          onChange={(e) => setSelectedTurma(e.value)}
          options={[{ label: 'Todos', value: 'todos' }, ...turmasOptions.map(t => ({ label: t.toUpperCase(), value: t }))]}
          placeholder="Turmas"
          className="ml-auto"
        />
      </div>

      <hr />

      <div className={styles.divAtuacao}>
        <span className={styles.projectText}>
          Projetos {selectedCurso ? selectedCurso.toUpperCase() : ''}
        </span>
        <Dropdown
          options={[{ name: 'Todas as Áreas', value: 'all' }, ...areasDeAtuacao]}
          optionLabel="name"
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.value)}
          placeholder="Área de Atuação"
          className="ml-auto"
        />
      </div>

      <div className={styles.card}>
        <NuvemDePalavras words={projetosFiltrados} />
      </div>
    </div>
  );
};

export default ProjectCloud;
