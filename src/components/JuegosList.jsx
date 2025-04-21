import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';
import Filtros from './Filtros';
import JuegoDetalle from './JuegoDetalle';
import '../styles/JuegosList.css';

//creacion de la lista
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

  const renderFiltrosActivos = () => {
    const { platform, category, 'sort-by': sortBy } = filters;

    if (!platform && !category && !sortBy) return null;

    const labels = {
      platform: {
        pc: 'PC',
        browser: 'Navegador',
      },
      category: {
        shooter: 'Shooter',
        mmorpg: 'MMORPG',
        fantasy: 'Fantasía',
      },
      'sort-by': {
        'release-date': 'Fecha de lanzamiento',
        alphabetical: 'Orden alfabético',
      },
    };

    return (
      <p className="filtros-activos">
        Mostrando juegos
        {platform && ` en ${labels.platform[platform] || platform}`}
        {category && ` | categoría: ${labels.category[category] || category}`}
        {sortBy && ` | ordenados por: ${labels['sort-by'][sortBy] || sortBy}`}
      </p>
    );
  };

  if (selectedGame) {
    return <JuegoDetalle gameId={selectedGame} onBack={() => setSelectedGame(null)} />;
  }

  if (error) return <p className="mensaje-error">{error}</p>;
  if (loading) return <p className="mensaje-cargando">Cargando juegos...</p>;

  return (
    <div>
      <h2>Lista de Juegos Gratuitos</h2>
      <Filtros onFilterChange={handleFilterChange} />
      {renderFiltrosActivos()}
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
