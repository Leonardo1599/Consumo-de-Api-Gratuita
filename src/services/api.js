import axios from 'axios';

const BASE_URL = 'https://thingproxy.freeboard.io/fetch/https://www.freetogame.com/api';

export const fetchGames = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, { params });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los juegos:', error);
    throw error;
  }
};

export const fetchGameById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/game`, { params: { id } });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el juego:', error);
    throw error;
  }
};