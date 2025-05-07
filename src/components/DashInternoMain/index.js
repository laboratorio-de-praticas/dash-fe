'use client';
import React, { useState } from "react";
import styles from "./DashInternoMain.module.css";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/primereact.min.css";
import ChartSemanal from "../ChartSemanal";
import ChartPie from "../ChartPie";
import VotacaoInternaCards from "../VotacaoIntCards";

const DashInternoMain = () => {
  const [selectedCurso, setSelectedCurso] = useState({ name: "Todos" });
  const [selectedVotacaoType, setSelectedVotacaoType] = useState(null);

  const curso = [
    { name: "Todos" },
    { name: "DSM" },
    { name: "Gestão Empresarial" }
  ];

  const votacaoType = [
    { name: "Interna" },
    { name: "Externa" }
  ];

  return (
    <div className={styles.dashContainer}>
      <div className={styles.dashHeader}>
        <Dropdown
          value={selectedVotacaoType}
          onChange={(e) => setSelectedVotacaoType(e.value)}
          options={votacaoType}
          optionLabel="name"
          placeholder="Votação"
          className={styles.votacaoSelector}
        />
        <Dropdown
          value={selectedCurso}
          onChange={(e) => setSelectedCurso(e.value)}
          options={curso}
          optionLabel="name"
          placeholder="Selecione um curso"
          className={styles.cursoSelector}
        />
      </div>

      <div className={styles.cardContent}>
        <VotacaoInternaCards cursoSelecionado={selectedCurso.name} />
      </div>

      <div className={styles.chartContainers}>
        <div className={styles.chartContainer}>
          <ChartSemanal />
        </div>
        <div className={styles.chartContainer}>
          <ChartPie />
        </div>
      </div>
    </div>
  );
};

export default DashInternoMain;
