import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Container } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ParityChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: 'Paridad Peso/Dólar (San Luis Río Colorado 2024)',
        data: [18.75, 19.10, 19.05, 19.20, 19.15, 19.00, 19.25], // Datos específicos para San Luis Río Colorado 2024
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Paridad Peso/Dólar (San Luis Río Colorado 2024)',
      },
    },
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            Paridad Peso/Dólar (San Luis Río Colorado 2024)
          </Typography>
          <Line data={chartData} options={options} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ParityChart;
