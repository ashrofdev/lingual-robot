import React from 'react'
import './list.css'
import Definition from './Definition'


const List = ({outcome, search}) => {
    const result = outcome.map((e,i)=>{
        return <Definition definition = {outcome[i].definition} 
        example={outcome[i].example} author={outcome[1].author}/>
    })

    return (
        <div className="list">
            <div className="top">
                <h2>{`Result(s) for: "${search}"`}</h2>
            </div>
            {result}
        </div>
    )
}

export default List