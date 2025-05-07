"use client";
import React, { useContext, useState } from "react";
import { TurmaContext } from "@/context/TurmaContext";
import { Dropdown } from "primereact/dropdown";
import styles from "@/styles/dash-externa-tela-especifica.module.css";

const DashExternaEspecifica = () => {
  const {
    curso,
    turmaDataVotos,
    selectedCurso,
    setSelectedCurso,
    votacaoType,
  } = useContext(TurmaContext);
  const [selectedTurma, setSelectedTurma] = useState(null);
  const [selectedVotacao, setSelectedVotacao] = useState("Votação Externa"); // Inicializa com "Votação Externa"

  // Obter turmas de todos os cursos se "Todos os Cursos" estiver selecionado
  const turmasOptions =
    selectedCurso === "Todos os Cursos"
      ? Object.values(turmaDataVotos)
          .flat()
          .map((turma) => ({
            label: turma.name,
            value: turma.name,
          }))
      : selectedCurso && turmaDataVotos[selectedCurso]
      ? turmaDataVotos[selectedCurso].map((turma) => ({
          label: turma.name,
          value: turma.name,
        }))
      : [];

  // Opções de cursos, agora apenas "Todos os Cursos" e cursos individuais
  const cursosOptions = [
    { label: "Todos os Cursos", value: "Todos os Cursos" },
    ...curso.map((c) => ({ label: c.name, value: c.value })),
  ];

  // Usando as opções de votação do contexto
  const votacaoOptions = votacaoType.map((votacao) => ({
    label: votacao.name,
    value: votacao.value,
  }));

  const handleTurmaChange = (e) => {
    setSelectedTurma(e.value);
  };

  // Área de Atuação
  const [areaSelecionada, setAreaSelecionada] = useState("");

  const projetosMock = [
    { nome: "Projeto IA", integrantes: "Ana, João", area: "IA" },
    { nome: "Projeto Web", integrantes: "Carlos, Marina", area: "Web" },
    { nome: "Projeto Mobile", integrantes: "Pedro, Laura", area: "Mobile" },
  ];

  const projetosFiltrados = areaSelecionada
    ? projetosMock.filter((p) => p.area === areaSelecionada)
    : projetosMock;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Dropdown
          value={selectedVotacao}
          options={votacaoOptions}
          onChange={(e) => setSelectedVotacao(e.value)}
          placeholder="Selecione a Votação"
          className={styles.title}
        />

        <div className={styles.dropdownGroup}>
          <Dropdown
            value={selectedCurso}
            options={cursosOptions}
            onChange={(e) => {
              setSelectedCurso(e.value);
              setSelectedTurma(null);
            }}
            placeholder="Curso"
            className={styles.votacaoSelector}
          />

          <Dropdown
            value={selectedTurma}
            options={turmasOptions}
            onChange={handleTurmaChange}
            placeholder="Selecione a turma"
            className={styles.votacaoSelector}
            disabled={!selectedCurso || turmasOptions.length === 0}
          />
        </div>
      </div>

      {/* Subtitulo - Projetos1-DSM  + Filtro*/}
      <div className={styles.projetosHeader}>
        <p className={styles.sectionTitle}>Projetos1 - DSM</p>
        <div className={styles.filterContainer}>
          <select className={styles.areaFilter}>
            <option value="">Área de Atuação</option>
            <option value="front">Front-end</option>
            <option value="back">Back-end</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </div>
      </div>

      {/* Imagem do Proejto + Informações */}

      <div className={styles.wrapper}>
        <div className={styles.projetoContainer}>
          <div className={styles.imagemProjeto}></div>
          <div className={styles.infoProjeto}>
            <h2 className={styles.nomeProjeto}>Nome do Projeto -</h2>
            <p className={styles.integrantes}>Nome dos Integrantes</p>
            <p className={styles.area}>Área de Atuação</p>
            <div className={styles.descricao}></div>
          </div>
        </div>
      </div>

      {/* Descriçaõ do Projeto */}
      <div className={styles.descricaoContainer}>
        <p className={styles.titulo}>Descrição do Projeto-</p>
        <p className={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default DashExternaEspecifica;
