import React, { useState } from 'react';
import restaurantData from '../restaurantData';

const AddRestaurant = () => {
  const [form, setForm] = useState({ name: '', location: '', cuisine: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Restaurante agregado: ' + JSON.stringify(form));
  };

  return (
    <div>
      <h1>Nuevo Restaurante</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Ubicación" onChange={handleChange} required />
        <input type="text" name="cuisine" placeholder="Tipo de comida" onChange={handleChange} required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddRestaurant;