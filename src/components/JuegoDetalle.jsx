import React, { useEffect, useState } from 'react';
import { fetchGameById } from '../services/api';
import '../styles/JuegoDetalle.css';

const JuegoDetalle = ({ gameId, onBack }) => {
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchGameById(gameId)
      .then((data) => {
        setJuego(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar el juego:', err);
        setError('No se pudo cargar el juego. Intenta nuevamente más tarde.');
        setLoading(false);
      });
  }, [gameId]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Cargando detalles del juego...</p>;

  return (
    <div className="juego-detalle">
      <button onClick={onBack}>Volver</button>
      <h2>{juego.title}</h2>
      <img src={juego.thumbnail} alt={juego.title} />
      <p>{juego.description}</p>
      <p><strong>Género:</strong> {juego.genre}</p>
      <p><strong>Plataforma:</strong> {juego.platform}</p>
    </div>
  );
};

export default JuegoDetalle;