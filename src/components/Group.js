import React, { Component } from 'react'
import axios from 'axios'
import MaterialTable from './Table'

// todo make this a stateless function

class Group extends Component {
    state = {
        items: null
    }

    componentDidMount() {
        this.getCollectionItems()
    }

    getCollectionItems = async () => {
        try {
            const { groupId } = this.props.match.params
            const res = await axios.get(`/groups/${groupId}`)
            this.setState({ items: res.data.data[0].collectables })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { items } = this.state
        if (!items) return <p>Loading...</p>
        return (
            <>
                {console.log("Group", items)}
                < MaterialTable
                    items={items}
                />
            </>
        )
    }
}

export default Group