'use client';
import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import styles from "./ChartSemanal.module.css";

// Função para mapear o formato dos dados
const formatData = (data) => {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  
  return data.map((item) => {
    // Extrai o dia da semana da data
    const date = new Date(item.data);
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    return {
      day: dayOfWeek, // Dia da semana
      week1: item.qtd_votos, // Quantidade de votos
    };
  });
};

const ChartSemanal = ({ turma }) => {
  const votosPorDia = turma?.votos_por_dia || [];
  
  // Formata os dados
  const chartData = formatData(votosPorDia);

  return (
    <div className={styles.chartContainer}>
      <span className={styles.title}>Votos - Semana 1</span>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart data={chartData} margin={{ left: -20 }}>
            <defs>
              <linearGradient id="colorWeek1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B20000" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#B20000" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              style={{ fontSize: "12px" }} 
              axisLine={false} 
              tickLine={false} 
            />
            <YAxis 
              style={{ fontSize: "12px" }} 
              axisLine={false} 
              tickLine={false} 
            />
            <Tooltip />
            <Legend
              wrapperStyle={{ fontSize: "12px", top: 0, left: 0, lineHeight: "15px" }}
              iconType="circle"
              iconSize={10}
            />
            <Area
              type="monotone"
              dataKey="week1"
              stroke="#B20000"
              fill="url(#colorWeek1)"
              name="Semana 1"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSemanal;
