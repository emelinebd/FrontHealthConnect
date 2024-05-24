import React, { useState } from 'react';

const AnnuaireSante = () => {
  const [locality, setLocality] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    // Remplacez l'URL par celle de votre API
    try {
      const response = await axios.get(
        'https://api.example.com/professionals',
        {
          params: {
            locality,
            specialty,
          },
        },
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Recherche de professionnels de santé</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label>
            Localité:
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Spécialité:
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Rechercher</button>
      </form>
      <div>
        <h2>Résultats de la recherche</h2>
        <ul>
          {results.map((professional) => (
            <li key={professional.id}>
              {professional.name} - {professional.specialty} -{' '}
              {professional.locality}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnnuaireSante;
