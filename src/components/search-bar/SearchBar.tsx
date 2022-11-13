import React from 'react';

interface SearchBarProps {
    placeHolder?: string;
}
const SearchBar = ({ placeHolder = 'Search by repo name' }: SearchBarProps) => {
    return (
        <div className="search-bar">
            <input className="search-bar" type="text" placeholder={placeHolder} />
        </div>
    );
};

export default SearchBar;
