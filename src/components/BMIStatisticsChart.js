import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Container } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BMIStatisticsChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = {
      labels: [
        'América del Norte', 'Europa', 'Asia', 
        'África', 'América Latina y el Caribe', 'Oceanía'
      ],
      datasets: [
        {
          label: 'IMC Promedio',
          data: [29.0, 26.5, 23.0, 22.5, 28.0, 27.5],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estadísticas de IMC en Diversas Partes del Mundo (2024)',
      },
    },
  };

  return (
    <Container maxWidth="md" style={{ height: '500px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            Estadísticas de IMC en Diversas Partes del Mundo (2024)
          </Typography>
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default BMIStatisticsChart;
