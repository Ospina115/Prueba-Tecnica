import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import UserDetails from './UserDetails';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleBackClick = () => {
        setSelectedUser(null);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-list">
            <div>
            <input className='barra-busqueda' type="text" placeholder="Buscar por nombre o país" value={searchTerm} onChange={handleSearchChange}/>
            </div>
            <div className="cadauno">
        {selectedUser ? (
            <UserDetails user={selectedUser} onBackClick={handleBackClick} />
        ) : (
            <>

            {filteredUsers.map(user => (
                <UserCard key={user.login.uuid} user={user} onClick={handleUserClick} />
            ))}
            </>
        )}
            </div>

        </div>
    );
};

export default UserList;
