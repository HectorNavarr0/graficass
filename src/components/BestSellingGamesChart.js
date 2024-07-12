import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Container } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BestSellingGamesChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Datos de los videojuegos más vendidos en 2023
    const data = [
      { name: 'Hogwarts Legacy', sales: 120 },
      { name: 'The Legend of Zelda: Tears of the Kingdom', sales: 105 },
      { name: 'Call of Duty: Modern Warfare III', sales: 95 },
      { name: 'Diablo IV', sales: 85 },
      { name: 'Marvel’s Spider-Man 2', sales: 80 },
    ];
    
    const labels = data.map(item => item.name);
    const values = data.map(item => item.sales);
    setChartData({
      labels,
      datasets: [
        {
          label: 'Ventas en millones',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Videojuegos Más Vendidos de 2023',
      },
    },
  };

  return (
    <Container maxWidth="md" style={{ height: '500px' }}> {/* Aumentar la altura */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            Videojuegos Más Vendidos de 2023
          </Typography>
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default BestSellingGamesChart;
