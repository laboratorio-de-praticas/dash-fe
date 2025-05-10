'use client';

import React, { createContext, useState } from "react";

export const TurmaContext = createContext();

const turmaDataVotos = {
  dsm: [
    {
      name: "DSM 1",
      votos: 60,
      feedback: { otimo: 25, bom: 45 },
      total: 95,
      representantes: [
        { name: "Lucas Martins", foto: "/imgs/rep1.png" },
        { name: "Amanda Rocha", foto: "/imgs/rep2.png" },
        { name: "Henrique Silva", foto: "/imgs/rep3.png" },
        { name: "Jéssica Lima", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "DSM 2",
      votos: 30,
      feedback: { otimo: 15, bom: 15 },
      total: 80,
      representantes: [
        { name: "Pedro Carvalho", foto: "/imgs/rep1.png" },
        { name: "Bruna Teixeira", foto: "/imgs/rep2.png" },
        { name: "Gabriel Souza", foto: "/imgs/rep3.png" },
        { name: "Lívia Costa", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "DSM 3",
      votos: 20,
      feedback: { otimo: 18, bom: 2 },
      total: 60,
      representantes: [
        { name: "João Pedro", foto: "/imgs/rep1.png" },
        { name: "Marina Duarte", foto: "/imgs/rep2.png" },
        { name: "Tiago Nunes", foto: "/imgs/rep3.png" },
        { name: "Ana Paula", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "DSM 4",
      votos: 70,
      feedback: { otimo: 35, bom: 35 },
      total: 110,
      representantes: [
        { name: "Ricardo Melo", foto: "/imgs/rep1.png" },
        { name: "Camila Borges", foto: "/imgs/rep2.png" },
        { name: "Felipe Ramos", foto: "/imgs/rep3.png" },
        { name: "Isabela Fontes", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "DSM 5",
      votos: 80,
      feedback: { otimo: 60, bom: 20 },
      total: 130,
      representantes: [
        { name: "Rafael Torres", foto: "/imgs/rep1.png" },
        { name: "Laura Mendes", foto: "/imgs/rep2.png" },
        { name: "Daniel Almeida", foto: "/imgs/rep3.png" },
        { name: "Vanessa Reis", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "DSM 6",
      votos: 40,
      feedback: { otimo: 20, bom: 20 },
      total: 90,
      representantes: [
        { name: "Carlos Eduardo", foto: "/imgs/rep1.png" },
        { name: "Natália Silva", foto: "/imgs/rep2.png" },
        { name: "Bruno Castro", foto: "/imgs/rep3.png" },
        { name: "Fernanda Lopes", foto: "/imgs/rep4.png" },
      ],
    },
  ],
  gestao: [
    {
      name: "GE 1",
      votos: 100,
      feedback: { otimo: 40, bom: 60 },
      total: 150,
      representantes: [
        { name: "Mateus Brito", foto: "/imgs/rep1.png" },
        { name: "Tatiane Gomes", foto: "/imgs/rep2.png" },
        { name: "Rodrigo Fernandes", foto: "/imgs/rep3.png" },
        { name: "Elaine Souza", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "GE 2",
      votos: 80,
      feedback: { otimo: 35, bom: 45 },
      total: 100,
      representantes: [
        { name: "Vinícius Rocha", foto: "/imgs/rep1.png" },
        { name: "Débora Pires", foto: "/imgs/rep2.png" },
        { name: "Caio Augusto", foto: "/imgs/rep3.png" },
        { name: "Simone Vieira", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "GE 3",
      votos: 43,
      feedback: { otimo: 30, bom: 13 },
      total: 85,
      representantes: [
        { name: "Eduardo Lima", foto: "/imgs/rep1.png" },
        { name: "Giovana Farias", foto: "/imgs/rep2.png" },
        { name: "Alexandre Prado", foto: "/imgs/rep3.png" },
        { name: "Letícia Amorim", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "GE 4",
      votos: 30,
      feedback: { otimo: 20, bom: 10 },
      total: 70,
      representantes: [
        { name: "Samuel Ribeiro", foto: "/imgs/rep1.png" },
        { name: "Juliana Matos", foto: "/imgs/rep2.png" },
        { name: "Leonardo Dias", foto: "/imgs/rep3.png" },
        { name: "Clara Azevedo", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "GE 5",
      votos: 20,
      feedback: { otimo: 10, bom: 10 },
      total: 55,
      representantes: [
        { name: "Igor Santana", foto: "/imgs/rep1.png" },
        { name: "Patrícia Lima", foto: "/imgs/rep2.png" },
        { name: "Wesley Andrade", foto: "/imgs/rep3.png" },
        { name: "Renata Silva", foto: "/imgs/rep4.png" },
      ],
    },
    {
      name: "GE 6",
      votos: 90,
      feedback: { otimo: 45, bom: 45 },
      total: 120,
      representantes: [
        { name: "Otávio Martins", foto: "/imgs/rep1.png" },
        { name: "Carolina Nunes", foto: "/imgs/rep2.png" },
        { name: "Douglas Moreira", foto: "/imgs/rep3.png" },
        { name: "Sabrina Costa", foto: "/imgs/rep4.png" },
      ],
    },
  ],
};

const turmaData = {
  dsm: [
    { totalAlunos: 20, votosValidos: 15, candidatosAtivos: 15 },
  ],
  gestao: [
    { totalAlunos: 50, votosValidos: 30, candidatosAtivos: 10 },
  ],
};

const curso = [
  { name: "DSM", value: "dsm" },
  { name: "Gestão Empresarial", value: "gestao" },
  { name: "Todos", value: "todos" },
];

const turmas = {
  dsm: [
    'dsm1', 'dsm2', 'dsm3', 'dsm4', 'dsm5', 'dsm6'
  ],
  gestao: [
    'ge1', 'ge2', 'ge3'
  ]
};

const projetos = {
  dsm: [
    { projeto: 'ProjetoDSM1', rank: 1, turma: 'dsm1', area: 'ti'},
    { projeto: 'ProjetoDSM2', rank: 3, turma: 'dsm2', area: 'educacao' },
    { projeto: 'ProjetoDSM3', rank: 4, turma: 'dsm3', area: 'inovacao' },
    { projeto: 'ProjetoDSM4', rank: 5, turma: 'dsm4', area: 'saude' },
    { projeto: 'ProjetoDSM5', rank: 2, turma: 'dsm5', area: 'meioambiente' },
    { projeto: 'ProjetoDSM6', rank: 6, turma: 'dsm6', area: 'financas' },
    { projeto: 'ProjetoDSM7', rank: 7, turma: 'dsm2', area: 'rh' },
    { projeto: 'ProjetoDSM8', rank: 10, turma: 'dsm3', area: 'marketing' },
    { projeto: 'ProjetoDSM9', rank: 8, turma: 'dsm1', area: 'logistica' },
    { projeto: 'ProjetoDSM10', rank: 9, turma: 'dsm2', area: 'administracao' }
  ],
  gestao: [
    { projeto: 'ProjetoGE1', rank: 3, turma: 'ge1', area: 'administracao' },
    { projeto: 'ProjetoGE2', rank: 4, turma: 'ge2', area: 'rh' },
    { projeto: 'ProjetoGE3', rank: 2, turma: 'ge3', area: 'financas' },
    { projeto: 'ProjetoGE4', rank: 1, turma: 'ge2', area: 'marketing' },
    { projeto: 'ProjetoGE5', rank: 5, turma: 'ge1', area: 'educacao' },
    { projeto: 'ProjetoGE6', rank: 7, turma: 'ge3', area: 'ti' },
    { projeto: 'ProjetoGE7', rank: 6, turma: 'ge1', area: 'meioambiente' },
    { projeto: 'ProjetoGE8', rank: 10, turma: 'ge2', area: 'logistica' },
    { projeto: 'ProjetoGE9', rank: 9, turma: 'ge2', area: 'inovacao' },
    { projeto: 'ProjetoGE10', rank: 8, turma: 'ge3', area: 'saude' }
  ]
};


// let nuvemPalavrasProjetos
// // Requisição para buscar dados da API
// fetch('http://localhost:5000/v1/dashboard/externo/ativo', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     // Se necessário, adicione aqui outros cabeçalhos (como autenticação, por exemplo)
//   }
// })
//   .then(response => response.json()) // Converte a resposta da API para JSON
//   .then(data => {
//     console.log('Dados recebidos da API:', data);

//     // Agora, podemos usar os dados da API para preencher a variável nuvemPalavrasProjetos

//     nuvemPalavrasProjetos = {
//       dsm: data.map(item => ({
//         projeto: item.projetos_participantes?.[0].nome_projeto,
//         rank: item.projetos_participantes?.[0].votos_recebidos,
//         turma: item.projetos_participantes?.[0].turma,
//         area: item.projetos_participantes?.[0].linhas_extensao
//       })),
//       gestao: data.map(item => ({
//         projeto: "item.projeto",
//         rank: "item.rank",
//         turma: "item.turma",
//         area: "item.area"
//       }))
//     };

//     console.log('nuvemPalavrasProjetos atualizado:', nuvemPalavrasProjetos);
//   })
//   .catch(error => {
//     console.error('Erro ao fazer requisição para a API:', error);
//   });


let nuvemPalavrasProjetos;

// Requisição para buscar dados da API
fetch('http://localhost:5000/v1/dashboard/externo/ativo', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json()) // Converte a resposta da API para JSON
  .then(data => {
    console.log('Dados recebidos da API:', data);

    // Verifique se os dados estão bem definidos antes de manipular
    if (!data || !Array.isArray(data)) {
      console.error("Dados inválidos recebidos da API.");
      return;
    }

    // Extrai os votos recebidos e encontra o número máximo de votos
    const votosRecebidos = data.map(item => {
      return item.projetos_participantes?.[0]?.votos_recebidos || 0; // Protege contra undefined ou null
    });

    const maxVotos = Math.max(...votosRecebidos);

    // Função para calcular o ranking entre 1 e 10
    const calcularRanking = votos => {
      if (maxVotos === 0) return 1; // Se não houver votos, retorna o ranking mínimo
      return Math.ceil((votos / maxVotos) * 10); // Mapeia o número de votos para o intervalo de 1 a 10
    };

    // Preenche a variável nuvemPalavrasProjetos com o ranking calculado
    nuvemPalavrasProjetos = {
      dsm: data.map(item => {
        const participante = item.projetos_participantes?.[0];
        if (!participante) return {}; // Protege contra participantes inexistentes
        return {
          projeto: participante.nome_projeto,
          rank: calcularRanking(participante.votos_recebidos),
          turma: participante.turma,
          area: participante.linhas_extensao
        };
      }),
      gestao: data.map(item => {
        const participante = item.projetos_participantes?.[0];
        if (!participante) return {}; // Protege contra participantes inexistentes
        return {
          projeto: participante.nome_projeto,
          rank: calcularRanking(participante.votos_recebidos),
          turma: participante.turma,
          area: participante.linhas_extensao
        };
      })
    };

    console.log('nuvemPalavrasProjetos atualizado:', nuvemPalavrasProjetos);
  })
  .catch(error => {
    console.error('Erro ao fazer requisição para a API:', error);
  });
  



// let nuvemPalavrasProjetos;

// // Dados mockados para substituir a resposta da API
// const data = [
//   { projetos_participantes: [{ nome_projeto: 'Projeto A', votos_recebidos: 50, turma: 'DSM', linhas_extensao: 'Tecnologia' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto B', votos_recebidos: 30, turma: 'Gestão Empresarial', linhas_extensao: 'Administração' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto C', votos_recebidos: 70, turma: 'DSM', linhas_extensao: 'Pesquisa' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto D', votos_recebidos: 40, turma: 'Gestão Empresarial', linhas_extensao: 'Gestão de Pessoas' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto E', votos_recebidos: 80, turma: 'DSM', linhas_extensao: 'Sistemas' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto F', votos_recebidos: 20, turma: 'Gestão Empresarial', linhas_extensao: 'Marketing' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto G', votos_recebidos: 90, turma: 'DSM', linhas_extensao: 'Inteligência Artificial' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto H', votos_recebidos: 60, turma: 'Gestão Empresarial', linhas_extensao: 'Finanças' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto I', votos_recebidos: 15, turma: 'DSM', linhas_extensao: 'Redes de Computadores' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto J', votos_recebidos: 35, turma: 'Gestão Empresarial', linhas_extensao: 'Logística' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto K', votos_recebidos: 25, turma: 'DSM', linhas_extensao: 'Desenvolvimento Web' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto L', votos_recebidos: 55, turma: 'Gestão Empresarial', linhas_extensao: 'Gestão de Projetos' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto M', votos_recebidos: 45, turma: 'DSM', linhas_extensao: 'Data Science' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto N', votos_recebidos: 75, turma: 'Gestão Empresarial', linhas_extensao: 'Consultoria Empresarial' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto O', votos_recebidos: 85, turma: 'DSM', linhas_extensao: 'Blockchain' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto P', votos_recebidos: 65, turma: 'Gestão Empresarial', linhas_extensao: 'Compliance' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto Q', votos_recebidos: 95, turma: 'DSM', linhas_extensao: 'Cloud Computing' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto R', votos_recebidos: 10, turma: 'Gestão Empresarial', linhas_extensao: 'Recursos Humanos' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto S', votos_recebidos: 5, turma: 'DSM', linhas_extensao: 'Cibersegurança' }] },
//   { projetos_participantes: [{ nome_projeto: 'Projeto T', votos_recebidos: 50, turma: 'Gestão Empresarial', linhas_extensao: 'Sustentabilidade' }] }
// ];

// // Verifique se os dados estão bem definidos antes de manipular
// if (!data || !Array.isArray(data)) {
//   console.error("Dados inválidos recebidos.");
// } else {
//   // Extrai os votos recebidos e encontra o número máximo de votos
//   const votosRecebidos = data.map(item => {
//     return item.projetos_participantes?.[0]?.votos_recebidos || 0; // Protege contra undefined ou null
//   });

//   const maxVotos = Math.max(...votosRecebidos);

//   // Função para calcular o ranking entre 1 e 10
//   const calcularRanking = votos => {
//     if (maxVotos === 0) return 1; // Se não houver votos, retorna o ranking mínimo
//     return Math.ceil((votos / maxVotos) * 10); // Mapeia o número de votos para o intervalo de 1 a 10
//   };

//   // Preenche a variável nuvemPalavrasProjetos com o ranking calculado
//   nuvemPalavrasProjetos = {
//     dsm: data.map(item => {
//       const participante = item.projetos_participantes?.[0];
//       if (!participante) return {}; // Protege contra participantes inexistentes
//       return {
//         projeto: participante.nome_projeto,
//         rank: calcularRanking(participante.votos_recebidos),
//         turma: participante.turma,
//         area: participante.linhas_extensao
//       };
//     }),
//     gestao: data.map(item => {
//       const participante = item.projetos_participantes?.[0];
//       if (!participante) return {}; // Protege contra participantes inexistentes
//       return {
//         projeto: participante.nome_projeto,
//         rank: calcularRanking(participante.votos_recebidos),
//         turma: participante.turma,
//         area: participante.linhas_extensao
//       };
//     })
//   };

//   console.log('nuvemPalavrasProjetos atualizado:', nuvemPalavrasProjetos);
// }



const areasDeAtuacao = [
  { name: 'Tecnologia da Informação', value: 'ti' },
  { name: 'Administração', value: 'administracao' },
  { name: 'Marketing', value: 'marketing' },
  { name: 'Recursos Humanos', value: 'rh' },
  { name: 'Logística', value: 'logistica' },
  { name: 'Finanças', value: 'financas' },
  { name: 'Educação', value: 'educacao' },
  { name: 'Saúde', value: 'saude' },
  { name: 'Meio Ambiente', value: 'meioambiente' },
  { name: 'Inovação e Empreendedorismo', value: 'inovacao' }
];


const votacaoType = [
  { name: "Votação Interna", value: 0 },
  { name: "Votação Externa", value: 1 },
];

const dataweek = {
  dsm: {
    week1: [
      { day: "2024-04-01", visitantes: 20 },
      { day: "2024-04-02", visitantes: 25 },
      { day: "2024-04-03", visitantes: 15 },
      { day: "2024-04-04", visitantes: 10 },
      { day: "2024-04-05", visitantes: 30 },
      { day: "2024-04-06", visitantes: 50 },
      { day: "2024-04-07", visitantes: 40 },
    ],
    week2: [
      { day: "2024-04-08", visitantes: 40 },
      { day: "2024-04-09", visitantes: 30 },
      { day: "2024-04-10", visitantes: 15 },
      { day: "2024-04-11", visitantes: 25 },
      { day: "2024-04-12", visitantes: 35 },
      { day: "2024-04-13", visitantes: 2 },
      { day: "2024-04-14", visitantes: 10 },
    ],
  },
  gestao: {
    week1: [
      { day: "2024-04-01", visitantes: 10 },
      { day: "2024-04-02", visitantes: 30 },
      { day: "2024-04-03", visitantes: 30 },
      { day: "2024-04-04", visitantes: 55 },
      { day: "2024-04-05", visitantes: 38 },
      { day: "2024-04-06", visitantes: 55 },
      { day: "2024-04-07", visitantes: 45 },
    ],
    week2: [
      { day: "2024-04-08", visitantes: 50 },
      { day: "2024-04-09", visitantes: 65 },
      { day: "2024-04-10", visitantes: 15 },
      { day: "2024-04-11", visitantes: 70 },
      { day: "2024-04-12", visitantes: 45 },
      { day: "2024-04-13", visitantes: 55 },
      { day: "2024-04-14", visitantes: 35 },
    ],
  },
};

export const TurmaProvider = ({ children }) => {
  const [selectedCurso, setSelectedCurso] = useState("todos");
  const [selectedTurma, setSelectedTurma] = useState("todos");
  const [selectedVotacaoType, setSelectedVotacaoType] = useState(0);
  const [selectedCard, setSelectedCard] = useState('');  // Adiciona o estado selectedCard
  const [selectedArea, setSelectedArea] = useState(null);


  return (
    <TurmaContext.Provider
      value={{
        nuvemPalavrasProjetos,
        selectedCurso,
        setSelectedCurso,
        selectedVotacaoType,
        setSelectedVotacaoType,
        selectedCard,
        selectedTurma,
        setSelectedTurma,
        setSelectedCard,    // Passa setSelectedCard
        turmaData,
        turmaDataVotos,
        curso,
        votacaoType,
        dataweek,
        turmas,
        projetos,
        areasDeAtuacao,
        selectedArea,
        setSelectedArea
      }}
    >
      {children}
    </TurmaContext.Provider>
  );
};
