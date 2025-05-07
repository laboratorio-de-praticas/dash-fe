'use client';
import React, { useEffect, useState } from "react";
import styles from "./VotacaoIntCards.module.css";
import Image from 'next/image';
import axios from "axios";

const VotacaoInternaCards = ({ cursoSelecionado }) => {
  const [dadosTurmas, setDadosTurmas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/v1/dashboard/interno/ativo');
        setDadosTurmas(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados dos cards:", error);
      }
    }

    fetchData();
  }, []);

  const getTotais = () => {
    const cursoFiltro = cursoSelecionado.toLowerCase();
  
    const filtrado = dadosTurmas.filter((turma) => {
      const curso = turma.curso_semestre.toLowerCase();
  
      if (cursoFiltro === "todos") return true;
      if (cursoFiltro === "dsm") return curso.includes("dsm");
      if (cursoFiltro.includes("gestão")) return curso.includes("ge") || curso.includes("gestão");
  
      return false;
    });
  
    const totalAlunos = filtrado.reduce((sum, turma) => sum + parseInt(turma.total_alunos, 10), 0);
    const votosValidos = filtrado.reduce((sum, turma) => sum + parseInt(turma.votos_validos, 10), 0);
    const candidatosAtivos = filtrado.reduce((sum, turma) => sum + parseInt(turma.candidatos_ativos, 10), 0);
    const votosPendentes = totalAlunos - votosValidos;
  
    return {
      totalAlunos,
      votosValidos,
      votosPendentes,
      candidatosAtivos
    };
  };
  
  const totais = getTotais();

  const cards = [
    {
      name: "Votos Válidos",
      votos: totais.votosValidos,
      color: "#666666",
      image: "/dash/vote.svg",
      bottomColor: "#d32f2f"
    },
    {
      name: "Votos Pendentes",
      votos: totais.votosPendentes,
      color: "#666666",
      image: "/dash/vote.svg"
    },
    {
      name: "Total de Alunos",
      votos: totais.totalAlunos,
      color: "#666666",
      image: "/dash/people.svg"
    },
    {
      name: "Candidatos Ativos",
      votos: totais.candidatosAtivos,
      color: "#666666",
      image: "/dash/people.svg"
    }
  ];

  return (
    <div className={styles.cardContainer}>
      {cards.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <span className={styles.classID}>{item.name}</span>
            </div>
            <div className={styles.cardInnerContent}>
              <div className={styles.votacaoInfoText}>
                <p className={styles.totalVotes} style={{ color: item.color }}>
                  {item.votos}
                </p>
                <Image src={item.image} alt={item.name} width={28} height={28} />
              </div>
            </div>
          </div>
          {item.bottomColor && (
            <div 
              className={styles.bottomBar} 
              style={{ backgroundColor: item.bottomColor }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VotacaoInternaCards;
