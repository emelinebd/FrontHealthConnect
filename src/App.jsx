// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AnnuaireSante from './pages/AnnuaireSante';
import PriseDeRendezVous from './pages/PriseDeRendezVous';
import SuiviDesRendezVous from './pages/SuiviDesRendezVous';
import DossiersMedicaux from './pages/DossiersMedicaux';
import RessourcesSante from './pages/RessourcesSante';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Health Connect</h1>
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/annuaire-sante">Recherche de professionnels de santé</Link></li>
              <li><Link to="/prise-de-rendez-vous">Prise de rendez-vous</Link></li>
              <li><Link to="/suivi-des-rendez-vous">Suivi des rendez-vous</Link></li>
              <li><Link to="/dossiers-medicaux">Dossiers médicaux électroniques</Link></li>
              <li><Link to="/ressources-sante">Ressources santé</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/annuaire-sante" element={<AnnuaireSante />} />
            <Route path="/prise-de-rendez-vous" element={<PriseDeRendezVous />} />
            <Route path="/suivi-des-rendez-vous" element={<SuiviDesRendezVous />} />
            <Route path="/dossiers-medicaux" element={<DossiersMedicaux />} />
            <Route path="/ressources-sante" element={<RessourcesSante />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Bienvenue sur Health Connect</h1>
    <p>Sélectionnez une option dans le menu pour commencer.</p>
  </div>
);

export default App;
