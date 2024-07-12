import React from 'react';
import './App.css';
import ParityChart from './components/ParityChart';
import BestSellingGamesChart from './components/BestSellingGamesChart';
import StockComparisonChart from './components/StockComparisonChart';
import LeadingCausesDeathChart from './components/LeadingCausesDeathChart';
import BMIStatisticsChart from './components/BMIStatisticsChart';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: '#4A4A4A' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            Gráficos en React
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <ParityChart />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <BestSellingGamesChart />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <StockComparisonChart />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <LeadingCausesDeathChart />
        </div>
        <div>
          <BMIStatisticsChart />
        </div>
      </Container>
    </div>
  );
}

export default App;
