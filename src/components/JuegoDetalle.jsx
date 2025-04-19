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

  if (error) return <p className="mensaje-error">{error}</p>;
  if (loading) return <p className="mensaje-cargando">Cargando detalles del juego...</p>;

  return (
    <div className="juego-detalle">
      <div className="header">
        <button className="volver-btn" onClick={onBack}>← Volver</button>
        <h2>{juego.title}</h2>
      </div>

      <div className="contenido-principal">
        <img src={juego.thumbnail} alt={juego.title} className="juego-imagen" />
        <p className="descripcion">{juego.description}</p>
      </div>

      <div className="info-extra">
        <p><strong>Género:</strong> {juego.genre}</p>
        <p><strong>Plataforma:</strong> {juego.platform}</p>
      </div>

      <div className="cta">
        <a href={juego.game_url} target="_blank" rel="noopener noreferrer" className="play-btn">
          Jugar ahora
        </a>
      </div>
    </div>
  );
};

export default JuegoDetalle;
