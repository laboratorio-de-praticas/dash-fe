'use client';

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const ChartBar = ({ turma }) => {
    // Extraindo candidatos e seus votos de `turma`
    const candidatos = turma.representantes || [];
    const data = candidatos.map((candidato) => ({
        nome: candidato.name,
        votos: candidato.qtd_votos_recebidos || 0,  // Supondo que você tenha a informação de votos de cada candidato
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
            >
                <XAxis
                    dataKey="nome"
                    style={{ fontSize: "12px" }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    domain={[0, Math.max(...data.map((item) => item.votos)) + 10]}
                    style={{ fontSize: "12px" }}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip formatter={(value) => `${value} votos`} />
                <Legend
                    wrapperStyle={{
                        fontSize: "12px",
                        top: 0,
                        left: 0,
                        lineHeight: "15px",
                    }}
                    iconType="circle"
                    iconSize={10}
                />
                <Bar
                    dataKey="votos"
                    fill="#B20000"
                    name="Total de Votos"
                    barSize={40}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartBar;
