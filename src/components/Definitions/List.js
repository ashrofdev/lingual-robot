import React from 'react'
import './list.css'

const List = ({outcome}) => {
    const result = outcome.map((e,i)=>{
        return <Definition/>
    })

    return (
        <div className="list"></div>
    )
}

export default List