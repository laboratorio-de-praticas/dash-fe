'use client';
import { useContext } from "react";
import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import { TurmaContext } from "../../context/TurmaContext"
import styles from "./ChartPie.module.css"

const COLORS = ["#d32f2f", "#252525"];

const renderCustomizedLabel = ({ name, percent, index }) => {
    const x = index === 0 ? "30%" : "70%";
    const y = index === 0 ? "30%" : "70%";
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

const ChartPie = () => {
    const { turmaData, selectedCurso } = useContext(TurmaContext);
    
    const getData = () => {
        if (selectedCurso === "todos") {
            const dsmData = turmaData.dsm || [];
            const gestaoData = turmaData.gestao || [];
            
            const totalAlunos = dsmData.reduce((sum, turma) => sum + turma.totalAlunos, 0) +
                              gestaoData.reduce((sum, turma) => sum + turma.totalAlunos, 0);
            
            const votosValidos = dsmData.reduce((sum, turma) => sum + turma.votosValidos, 0) +
                               gestaoData.reduce((sum, turma) => sum + turma.votosValidos, 0);
            
            const votosPendentes = totalAlunos - votosValidos;
            
            return [
                { name: "Votos Confirmados", value: votosValidos },
                { name: "Não Votaram", value: votosPendentes }
            ];
        } else if (selectedCurso && turmaData[selectedCurso]) {
            const cursoData = turmaData[selectedCurso];
            
            const totalAlunos = cursoData.reduce((sum, turma) => sum + turma.totalAlunos, 0);
            const votosValidos = cursoData.reduce((sum, turma) => sum + turma.votosValidos, 0);
            const votosPendentes = totalAlunos - votosValidos;
            
            return [
                { name: "Votos Confirmados", value: votosValidos },
                { name: "Não Votaram", value: votosPendentes }
            ];
        }
        
        return [];
    };

    const data = getData();

    return (
        <div className={styles.chartContainer}>
            <span className={styles.title}>Quantidade de Votos</span>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
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
        </div>
    );
};

export default ChartPie; 