import React from 'react'
import './head.css'
import Search from '../search/Search'

const Header = ({onSearch}) => {


    return (
        <div className="header">
            <h1>LINGUAL ROBOT</h1>
            <Search onSearch={onSearch}/>
            <img className="loader" src={require('./3.gif')}/>
        </div>
    )
}
export default Header