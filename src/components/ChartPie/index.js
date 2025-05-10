'use client';
import React, { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import styles from "./ChartPie.module.css";
import axios from "axios";

const COLORS = ["#d32f2f", "#252525"];

const renderCustomizedLabel = ({ name, percent, index }) => {
    const x = index === 0 ? "30%" : "70%";
    const textAnchor = index === 0 ? "end" : "start";

    return (
        <text
            x={x}
            y={x}
            fill="#666666"
            textAnchor={textAnchor}
            dominantBaseline="central"
            style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '14px',
            }}
        >
            {`${name}: ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ChartPie = ({ selectedCurso }) => {
    const [turmaData, setTurmaData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/v1/dashboard/interno/ativo");
                console.log("Dados recebidos da API:", response.data); // Depuração
                setTurmaData(response.data);
                setError(null);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
                setError("Falha ao carregar os dados.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Apenas uma chamada inicial

    const getData = () => {
        if (!turmaData || turmaData.length === 0) {
            console.log("Nenhum dado disponível para processar.");
            return [
                { name: "Votos Confirmados", value: 0 },
                { name: "Não Votaram", value: 0 }
            ];
        }

        const cursoFiltro = selectedCurso ? selectedCurso.toLowerCase() : "todos";
        console.log("Curso selecionado:", cursoFiltro); // Depuração

        const eventosFiltrados = turmaData.filter((turma) => {
            const curso = turma.curso_semestre?.toLowerCase() || "";
            if (cursoFiltro === "todos") return true;
            if (cursoFiltro === "dsm") return curso.includes("dsm");
            if (cursoFiltro.includes("gestão")) return curso.includes("ge");
            return false;
        });

        console.log("Dados filtrados:", eventosFiltrados); // Depuração

        const totalAlunos = eventosFiltrados.reduce((sum, turma) => sum + parseInt(turma.total_alunos || 0, 10), 0);
        const votosValidos = eventosFiltrados.reduce((sum, turma) => sum + parseInt(turma.votos_validos || 0, 10), 0);
        const votosPendentes = totalAlunos - votosValidos;

        console.log("Totais calculados:", { totalAlunos, votosValidos, votosPendentes }); // Depuração

        const data = [
            { name: "Votos Confirmados", value: votosValidos || 0 },
            { name: "Não Votaram", value: votosPendentes || 0 }
        ];

        console.log("Dados para o gráficos:", data); // Depuração

        return data;
    };

    const data = getData();

    if (isLoading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.chartContainer}>
            <span className={styles.title}>Quantidade de Votos</span>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart key={selectedCurso || "default"}> {/* Força re-renderização */}
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        innerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} votos`, '']} />
                </PieChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p>Total: {(data[0]?.value || 0) + (data[1]?.value || 0)} votos</p>
            </div>
        </div>
    );
};

export default ChartPie;