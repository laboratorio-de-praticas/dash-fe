"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./ChartDonut.module.css"

const COLORS = ["#a60000", "#1c1c1c"];

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data }) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#000" textAnchor="middle" dominantBaseline="central">
      {data[index].name}
      <tspan x={x} dy="1.2em">
        {`${(percent * 100).toFixed(0)}%`}
      </tspan>
    </text>
  );
};

const DonutChart = ({ title, data }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h3 className={styles.title}>{title}</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            labelLine={false}
            label={(props) => <CustomLabel {...props} data={data} />}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
