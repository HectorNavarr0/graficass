import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Container } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeadingCausesDeathChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = {
      labels: [
        'Enfermedades cardíacas', 'Cáncer', 'Accidentes', 
        'Enfermedades respiratorias crónicas', 'Enfermedades cerebrovasculares',
        'Alzheimer', 'Diabetes', 'Enfermedades renales', 
        'Influenza y neumonía', 'Suicidio'
      ],
      datasets: [
        {
          label: 'Porcentaje de muertes',
          data: [24.2, 21.3, 7.1, 5.6, 5.2, 4.3, 3.1, 2.5, 2.3, 2.1],
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
        text: 'Principales Causas de Muerte en Hombres (2024)',
      },
    },
  };

  return (
    <Container maxWidth="md" style={{ height: '500px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
            Principales Causas de Muerte en Hombres (2024)
          </Typography>
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default LeadingCausesDeathChart;
