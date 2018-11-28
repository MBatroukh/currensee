import React, { Component } from 'react'

// const AddItem = props => {
class AddItem extends Component {

    render() {
        // const { handleChange, addItem } = this.props
        const { handleChange, addItem, name, year, country, denomination } = this.props
        return (
            <div className='AddItem'>
                <label for="year">
                    Year:
                    <input id="year" onChange={(e) => handleChange('year', e.target.value)} value={year} />
                </label>
                <label for="name">
                    Name:
                    <input id="name" onChange={(e) => handleChange('name', e.target.value)} value={name} />
                </label>
                <label for="country">
                    Country:
                    <input id="country" onChange={(e) => handleChange('country', e.target.value)} value={country} />
                </label>
                <label for="denomination">
                    Denomination:
                    <input id="denomination" onChange={(e) => handleChange('denomination', e.target.value)} value={denomination} />
                </label>
                <button onClick={addItem}>Add Item</button>
            </div>
        )
    }
}

export default AddItem