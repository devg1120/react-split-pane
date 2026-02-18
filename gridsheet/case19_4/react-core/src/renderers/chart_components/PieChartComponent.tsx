import React, { useState } from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
 BarChart,
 Bar,
 ResponsiveContainer,
} from "recharts";

import { PieChart, Pie, Cell  } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// https://www.geeksforgeeks.org/reactjs/create-a-pie-chart-using-recharts-in-reactjs/
//

const PieChartComponent = ({data, width, height}) => 

(
  <div className="container">
      <PieChart width={width} height={height}>
            <Pie

                data={data}
                dataKey="students"
                outerRadius={height/2}
                fill="green"
                style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus

            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>


  </div>
);

export default PieChartComponent;

