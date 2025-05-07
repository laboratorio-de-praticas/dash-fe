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

const data = [
    { nome: "Carlos", votos: 40 },
    { nome: "Lucas", votos: 50 },
    { nome: "Ana", votos: 32 },
    { nome: "Mariana", votos: 47 },
    { nome: "João", votos: 28 },
    { nome: "Fernanda", votos: 55 },
];

const ChartBar = () => {
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
    