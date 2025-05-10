"use client";

import { useContext } from "react";
import VtInternaCards from "../VtInternaCards/VInternaCards";
import RegistroVotos from "../ListaRegistroVotos/ListaRegistroVotos";
import styles from "./DashInternaTelaCard.module.css";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { TurmaContext } from "../../context/TurmaContext";
import ContainerChart from "../ContainerChart/ContainerChart";
import ChartDonut from "../ChartDonut/ChartDonut";
import ChartBar from "../ChartBar/ChartBar";
import ChartSemanal from "../ChartSemanal";

export default function DashInternoCard() {
  const {
    selectedCurso,
    selectedVotacaoType,
    curso,
    votacaoType,
    setSelectedCurso,
    setSelectedVotacaoType,
  } = useContext(TurmaContext);

  const chartData = [
    { name: "Votos Confirmados", value: 50 },
    { name: "Não Votaram", value: 50 },
  ];

  return (
    <>
      {/* Área vermelha */}
      <div className={styles.dashContainer}>
        <div className={styles.dashHeader}>
          <Dropdown
            value={selectedVotacaoType}
            onChange={(e) => setSelectedVotacaoType(e.value)}
            options={votacaoType}
            optionLabel="name"
            placeholder="Votação"
            style={{
              backgroundColor: "#b71c1c",
              color: "white",
              border: "none",
            }}
            valueTemplate={(option) => (
              <span style={{ color: "white", fontSize: "1.2rem" }}>
                {option ? option.name : "Votação"}
              </span>
            )}
            panelStyle={{
              backgroundColor: "white",
            }}
            className="custom-dropdown"
          />

          <Dropdown
            value={selectedCurso}
            onChange={(e) => setSelectedCurso(e.value)}
            options={curso}
            optionLabel="name"
            placeholder="CURSO"
            className={styles.cursoSelector}
          />
        </div>
      </div>

      <>
        <div className={styles.cardContent}>
          <VtInternaCards/>
        </div>
      </>
    </>
  );
}
