import React from 'react'
import Card from './Card'

const NamesList = (props) => {
    console.log(props.names);
    return (
        <>
            <div>NamesList</div>
            {props.names.map(element => <Card name={element} />)}
        </>
    )
}

export default NamesList