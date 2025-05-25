import React from 'react';
import restaurantData from '../restaurantData';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <ul>
        {restaurantData.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.location} - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;