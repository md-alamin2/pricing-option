import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayaan Khan",
    Math: 85,
    English: 78,
    Science: 91,
  },
  {
    id: 2,
    name: "Zara Ali",
    Math: 92,
    English: 88,
    Science: 95,
  },
  {
    id: 3,
    name: "Rahim Uddin",
    Math: 76,
    English: 69,
    Science: 80,
  },
  {
    id: 4,
    name: "Fatima Noor",
    Math: 88,
    English: 85,
    Science: 89,
  },
  {
    id: 5,
    name: "Ibrahim Hussain",
    Math: 67,
    English: 72,
    Science: 70,
  },
  {
    id: 6,
    name: "Maya Rahman",
    Math: 90,
    English: 93,
    Science: 88,
  },
  {
    id: 7,
    name: "Omar Siddique",
    Math: 73,
    English: 65,
    Science: 78,
  },
  {
    id: 8,
    name: "Layla Ahmed",
    Math: 95,
    English: 91,
    Science: 94,
  },
  {
    id: 9,
    name: "Nihal Chowdhury",
    Math: 81,
    English: 77,
    Science: 83,
  },
  {
    id: 10,
    name: "Aisha Karim",
    Math: 78,
    English: 82,
    Science: 79,
  },
];

const ResultChart = () => {
  return (
    <div className="w-11/12 lg:container mx-auto mt-5">
      <LineChart width={800} height={200} data={resultData}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey="Math"></Line>
        <Line dataKey="English" stroke="#8884d8"></Line>
        <Line dataKey="Science" stroke="#82ca9d"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
