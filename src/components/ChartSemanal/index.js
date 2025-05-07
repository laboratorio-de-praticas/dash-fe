'use client';
import React, { useContext } from "react";
import {
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
} from "recharts";
import { TurmaContext } from "@/context/TurmaContext";
import styles from "./ChartSemanal.module.css";

const daysOfWeek = ["seg.", "ter.", "qua.", "qui.", "sex.", "sáb.", "dom."];

const ChartSemanal = () => {
    const { dataweek, selectedCurso } = useContext(TurmaContext);

    const getData = () => {
        if (selectedCurso === "todos") {
            return daysOfWeek.map((day, index) => {
                const dsmWeek1Data = dataweek.dsm?.week1[index];
                const gestaoWeek1Data = dataweek.gestao?.week1[index];

                return {
                    day,
                    week1: (dsmWeek1Data?.visitantes || 0) + (gestaoWeek1Data?.visitantes || 0),
                };
            });
        } else {
            const cursoData = selectedCurso && dataweek[selectedCurso] 
                ? dataweek[selectedCurso] 
                : { week1: [] };

            return daysOfWeek.map((day, index) => {
                const week1Data = cursoData.week1[index];

                return {
                    day,
                    week1: week1Data ? week1Data.visitantes : 0,
                };
            });
        }
    };

    const data = getData();

    return (
        <div className={styles.chartContainer}>
            <span className={styles.title}>Votos - Semana 1</span>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={data}
                        margin={{ left: -20 }}
                    >
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
                            wrapperStyle={{
                                fontSize: "12px",
                                top: 0,
                                left: 0,
                                lineHeight: "15px",
                            }}
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
