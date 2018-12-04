// ! Delete eventually

import React from 'react'
// import PropTypes from 'prop-types'

const Item = props => {
    const { denomination, country, name, year } = props
    return (
        <>
            <td>{year}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{denomination}</td>
        </>
    )
}

// Todo.propTypes = {
//     description: PropTypes.string.isRequired
// }

export default Item