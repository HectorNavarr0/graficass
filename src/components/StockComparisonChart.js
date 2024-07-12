import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Container } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockComparisonChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [
        {
          label: 'Bolsa Mexicana de Valores (BMV)',
          data: [47000, 46000, 46500, 47500, 48000, 48500, 49000],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Bolsa de Valores de Europa (Euronext)',
          data: [7500, 7600, 7700, 7650, 7800, 7900, 7950],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
        text: 'Comparativa de la Bolsa Mexicana de Valores con la Bolsa de Valores de Europa',
      },
    },
  };

  return (
    <Container maxWidth="md" style={{ height: '500px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            Comparativa de la Bolsa Mexicana de Valores con la Bolsa de Valores de Europa
          </Typography>
          <Line data={chartData} options={options} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default StockComparisonChart;
