import React from 'react';
import { useGlobalContext } from '../../context/Context.js';

interface SearchBarProps {
    placeHolder?: string;
}
const SearchBar = ({ placeHolder = 'Search by repo name' }: SearchBarProps) => {
    const { query, searchChanges } = useGlobalContext();
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="search-bar">
                <input
                    className="search-bar"
                    type="text"
                    value={query}
                    placeholder={placeHolder}
                    onChange={(e) => searchChanges(e.target.value)}
                />
            </div>
        </form>
    );
};

export default SearchBar;
