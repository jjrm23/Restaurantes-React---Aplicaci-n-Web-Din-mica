import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const UserProfile = ({ user, updateUser }) => {

  const { theme } = useContext(ThemeContext);

  const handleChage = (e) => {
    const { name, value } = e.target;
    updateUser({
      ...user,
      [name]: value
    });
  };


  return (
    <div className={`user-profile ${theme}`}>
      <h2>Perfil del usuario</h2>

      <div className='form-group'>
        <label htmlFor="name">Nombre:</label>
        <input 
          type="text"  
          id="name"
          name="name"
          value={user.name}
          onChange={handleChage}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"  
          id="email"
          name="email"
          value={user.email}
          onChange={handleChage}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="name">Rol:</label>
        <select  
          id="role"
          name="role"
          value={user.role}
          onChange={handleChage}
        >
          <option selected>Open this select menu</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Profesor">Profesor</option>
          <option value="Administrador">Administrador</option>
        </select>
      </div>

      <div className='user-summary'>
        <h3>Resumen:</h3>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol::</strong> {user.role}</p>
      </div>
    </div>
  )
}

export default UserProfile
