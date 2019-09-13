import React from 'react'
import './search.css'

const Search = ({onSearch}) => {
        return (
            <div className="search">
                <input placeholder="Search for a word..."/>
                <button onClick={onSearch}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        )
}
export default Search