import React from 'react';

const UserDetails = ({ user, onBackClick }) => {
    return (
        <div className="user-details">
        <button onClick={onBackClick}>Back</button>
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Telefono:</strong> {user.phone}</p>
        <p><strong>Fijo:</strong> {user.cell}</p>
        <p><strong>Nacionalidad:</strong> {user.nat}</p>
        <p><strong>Direccion:</strong> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
        <p><strong>Fecha de Nacimiento:</strong> {new Date(user.dob.date).toLocaleDateString()}</p>
        <p><strong>Registro:</strong> {new Date(user.registered.date).toLocaleDateString()}</p>
        <p><strong>Nombre de Usuario:</strong> {user.login.username}</p>
        </div>
    );
};

export default UserDetails;
