import React from 'react'
import 'styles/components/Search.scss';

const Search = ({isOpen}) => {
    return (
        <section className={isOpen ? 'open search' : 'search'}>
            <input className="search__input" type="search" placeholder="Quick Search"/>
            <button className="search__btn">Search</button>
        </section>
    )
}

export default Search
