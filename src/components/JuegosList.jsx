import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';
import Filtros from './Filtros';
import JuegoDetalle from './JuegoDetalle';
import '../styles/JuegosList.css';

const JuegosList = () => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchGames(filters)
      .then((data) => {
        setJuegos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar los juegos:', err);
        setError('No se pudieron cargar los juegos. Intenta nuevamente más tarde.');
        setLoading(false);
      });
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  if (selectedGame) {
    return <JuegoDetalle gameId={selectedGame} onBack={() => setSelectedGame(null)} />;
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Cargando juegos...</p>;

  return (
    <div>
      <h2>Lista de Juegos Gratuitos</h2>
      <Filtros onFilterChange={handleFilterChange} />
      <div className="juegos-grid">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="juego-card"
            onClick={() => setSelectedGame(juego.id)}
          >
            <img src={juego.thumbnail} alt={juego.title} />
            <h3>{juego.title}</h3>
            <p>{juego.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuegosList;