import React from 'react'


const Item = props => {
    const { denomination, country, name, year, handleModalOpen } = props

    return (
        <>
            <td>{year}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{denomination}</td>
            <td><button onClick={() => handleModalOpen(year, name, country, denomination)}>View</button></td>
        </>
    )
}

export default Item