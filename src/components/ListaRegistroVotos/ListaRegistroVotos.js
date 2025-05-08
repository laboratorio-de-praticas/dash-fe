"use client";

import { useState, useEffect } from "react";
import styles from "./ListaRegistroVotos.module.css";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";

function RegistroVotos({ turma }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [votosData, setVotosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itensPorPagina = 4;

  // Função para parsear o formato de data DD/MM/YYYY HH:mm:ss
  const parseDate = (dateString) => {
    try {
      const [date, time] = dateString.split(" ");
      const [day, month, year] = date.split("/").map(Number);
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return new Date(year, month - 1, day, hours, minutes, seconds);
    } catch (err) {
      console.error("Erro ao parsear data:", dateString, err);
      return new Date(); // Fallback para data atual
    }
  };

  // Função para formatar o horário do voto
  const formatarHorario = (horario) => {
    const dataVoto = parseDate(horario);
    const agora = new Date();
    const diffMinutos = Math.floor((agora - dataVoto) / (1000 * 60));

    if (diffMinutos < 60) {
      return `${diffMinutos} minutos atrás`;
    } else if (diffMinutos < 1440) {
      const horas = Math.floor(diffMinutos / 60);
      return `${horas} hora${horas > 1 ? "s" : ""} atrás`;
    } else {
      return dataVoto.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  // Processar log_votos da prop turma
  useEffect(() => {
    if (!turma || !turma.name || !turma.log_votos) {
      console.warn("Prop 'turma', 'turma.name' ou 'turma.log_votos' não definida:", turma);
      setVotosData([]);
      setLoading(false);
      setError("Nenhuma turma ou registros de votos disponíveis.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const votos = turma.log_votos.map((voto) => ({
        nome: voto.nome_votante,
        horario: formatarHorario(voto.data_hora_voto),
      }));
      setVotosData(votos);
      setLoading(false);
    } catch (err) {
      console.error("Erro ao processar log_votos:", err);
      setError("Não foi possível processar os registros de votos.");
      setLoading(false);
    }
  }, [turma]);

  const totalPaginas = Math.ceil(votosData.length / itensPorPagina);
  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const dadosPagina = votosData.slice(inicio, fim);
  const totalRegistros = votosData.length;

  const marcaPagina = (index) => {
    if (index === paginaAtual) {
      return styles.paginaAtual;
    } else {
      return styles.nada;
    }
  };

  const irParaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const irParaProxima = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const corLinha = (index) => {
    if (index % 2 === 0) {
      return styles.tableRowGray;
    } else {
      return styles.tableRowWhite;
    }
  };

  if (loading) {
    return <div className={styles.container}>Carregando registros...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h2 className={styles.tabelaTitulo}>Registro de Votos</h2>
        <div>
          <div>
            <table className={styles.tabela}>
              <thead>
                <tr className={styles.tabelaSubTitulo}>
                  <th>Aluno</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {dadosPagina.length > 0 ? (
                  dadosPagina.map((item, index) => (
                    <tr key={index} className={corLinha(index)}>
                      <td data-label="Aluno">{item.nome}</td>
                      <td data-label="Data" className={styles.data}>
                        {item.horario}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      Nenhum registro de voto encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {votosData.length > 0 && (
              <div className={styles.containerPaginacao}>
                <div className={styles.esconderMobile}>
                  Total de {totalRegistros} registros
                </div>
                <div className={styles.paginacao}>
                  <div className={styles.containerSeta}>
                    {paginaAtual > 1 && (
                      <IoChevronBackOutline
                        size={24}
                        onClick={irParaAnterior}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                  <div className={styles.containerNumeros}>
                    {paginas
                      .filter(
                        (pagina) =>
                          pagina === paginaAtual ||
                          pagina === paginaAtual + 1 ||
                          (paginaAtual === totalPaginas &&
                            pagina === paginaAtual - 1)
                      )
                      .map((pagina) => (
                        <span
                          key={pagina}
                          className={marcaPagina(pagina)}
                          onClick={() => setPaginaAtual(pagina)}
                          style={{ cursor: "pointer" }}
                        >
                          {pagina}
                        </span>
                      ))}
                  </div>
                  <div className={styles.containerSeta}>
                    {paginaAtual < totalPaginas && (
                      <IoChevronForward
                        size={24}
                        onClick={irParaProxima}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroVotos;