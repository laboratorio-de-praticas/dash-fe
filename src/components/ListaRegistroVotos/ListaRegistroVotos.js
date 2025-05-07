"use client";

import { useState } from "react";
import styles from "./ListaRegistroVotos.module.css";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";

const dados = [
  { nome: "João", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Maria", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Lucas", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Ana", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Carlos", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Laura", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Pedro", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Bruna", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Rafael", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Isabela", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Thiago", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Juliana", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Felipe", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Camila", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Eduardo", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Aline", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Bruno", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Fernanda", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Igor", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Tatiane", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Vinícius", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Natália", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Gustavo", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
  { nome: "Patrícia", idade: "Votou no candidato 1", cidade: "50 minutos atrás" },
];

function RegistroVotos() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 4;

  const totalPaginas = Math.ceil(dados.length / itensPorPagina);
  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const dadosPagina = dados.slice(inicio, fim);
  const totalRegistros = itensPorPagina * totalPaginas;

  const marcaPagina = (index) => {
    if (index === paginaAtual){
      return styles.paginaAtual
    }else{
      return styles.nada
    }
  }

  const irParaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const irParaProxima = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  const corLinha = (index) => {
    if (index % 2 === 0) {
        return styles.tableRowGray
    } else {
        return styles.tableRowWhite
    }
  };

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
              {dadosPagina.map((item, index) => (
              <tr key={index} className={corLinha(index)}>
                <td data-label="Aluno">{item.nome}</td>
                <td data-label="Data" className={styles.data}>{item.cidade}</td>
              </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.containerPaginacao}>
            <div className={styles.esconderMobile}>Total de {totalRegistros} registros</div>
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
                    (paginaAtual === totalPaginas && pagina === paginaAtual - 1)
                )
                .map((pagina) => (
                  <span key={pagina} className={marcaPagina(pagina)}>
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
      </div>
    </div>
    </div>
    </div>
  );
}

export default RegistroVotos;
