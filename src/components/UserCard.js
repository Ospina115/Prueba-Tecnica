import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={() => onClick(user)}>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>{user.email}</p>
      <p>{user.nat}</p>
    </div>
  );
};

export default UserCard;
