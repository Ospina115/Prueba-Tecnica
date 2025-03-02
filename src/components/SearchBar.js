import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Buscar por nombre o país"
            value={searchTerm}
            onChange={onSearchChange}
        />
        </div>
    );
};

export default SearchBar;
