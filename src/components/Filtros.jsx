import React from 'react';

const Filtros = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filtros">
      <select name="platform" onChange={handleFilterChange}>
        <option value="">Plataforma</option>
        <option value="pc">PC</option>
        <option value="browser">Navegador</option>
      </select>
      <select name="category" onChange={handleFilterChange}>
        <option value="">Categoría</option>
        <option value="shooter">Shooter</option>
        <option value="mmorpg">MMORPG</option>
        <option value="fantasy">Fantasía</option>
      </select>
      <select name="sort-by" onChange={handleFilterChange}>
        <option value="">Ordenar por</option>
        <option value="alphabetical">Alfabético</option>
        <option value="release-date">Fecha de lanzamiento</option>
      </select>
    </div>
  );
};

export default Filtros;