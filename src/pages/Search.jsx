import React, { useState } from 'react';
import restaurantData from '../restaurantData';

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Búsqueda de Restaurantes</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.location} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;