import React from 'react'
import './list.css'
import Definition from './Definition'


const List = ({outcome, search}) => {
    const result = outcome.map((e,i)=>{
        return <Definition definition = {outcome[i].definition}/>
    })

    return (
        <div className="list">
            <h2>{`"${search}"`}</h2>
            {result}
        </div>
    )
}

export default List