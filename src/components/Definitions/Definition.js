import React from 'react'

const Definition = ({definition, example, author}) => {
    return (
        <div className="definition">
            <p className="def">{'Definition: '+ definition}</p>
            <p>{'Example: '+ example}</p>
            <p>{'Author: '+ author}</p>
        </div>
    )
}
export default Definition