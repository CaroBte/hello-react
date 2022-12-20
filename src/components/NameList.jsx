import React from 'react'
import Card from './Card'

const NamesList = (props) => {
    console.log(props.names);
    return (
        <>
            <div>Names List</div>
            {props.names.map((element, i) => <Card name={element} key={i} />)}
            {/*siempre se debe poner un key unico*/}
        </>
    )
}

export default NamesList