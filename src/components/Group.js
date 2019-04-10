import React, { Component } from 'react'
import axios from 'axios'
import MaterialTable from './Table'
import SimpleModal from './Modal'

// todo make this a stateless function

class Group extends Component {
    state = {
        items: null,
        selectedItem: null,
        open: false,
        year: null,
        name: null,
        country: null,
        denomination: null,
        groupName: null,
    }

    handleOpen = (year, name, country, denomination, measurement, weight, note) => {
        this.setState({
            open: true,
            selectedItem: {
                year,
                name,
                country,
                denomination,
                measurement,
                weight,
                note,
            }
        });
        console.log(this.state.groupName)
    };

    handleClose = () => {
        this.setState({ open: false });
        console.log("Closed")
    };

    componentDidMount() {
        this.getCollectionItems()
    }

    getCollectionItems = async () => {
        try {
            const { groupId } = this.props.match.params
            const res = await axios.get(`/groups/${groupId}`)
            this.setState({ items: res.data.data[0].collectables, groupName: res.data.data[0].name })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { items, selectedItem, groupName } = this.state
        if (!items) return <p>Loading...</p>
        return (
            <>
                <h1>{groupName}</h1>
                <MaterialTable
                    items={items}
                    handleModalOpen={this.handleOpen}
                />
                {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
                {selectedItem !== null &&
                    <SimpleModal selectedItem={selectedItem} isClosed={this.handleClose} isOpen={this.state.open} />
                }
            </>
        )
    }
}

export {Group};