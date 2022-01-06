import React from 'react';
import IconSearch from '../icons/IconSearch';

const HeaderSearch: React.FC = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="header-form">
            <input type="text" placeholder="Search" />
            <button type="submit">
                {' '}
                <IconSearch />
            </button>
        </form>
    );
};

export default HeaderSearch;
