import React, { Component } from 'react'
import axios from 'axios'

class Collections extends Component {
    state = {
        collections: []
    }

    componentDidMount() {
        this.getCollections()
    }

    getCollections = async () => {
        try {
            const res = await axios.get(`/groups`)
            console.log(res)
            this.setState({ collections: res.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div>
                {collections.map(collection => (
                    <div key={collection._id}>
                        <h3>{collection.name}</h3>
                        <p>{collection.description}</p>
                    </div>
                ))}
                {/* {console.log(collections)} */}
                {JSON.stringify(collections, null, 4)}
            </div>
        )
    }
}

export default Collections