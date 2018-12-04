import React, { Component } from 'react'
import axios from 'axios'
import CollectionCard from './Card'
import Grid from '@material-ui/core/Grid';

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
            this.setState({ collections: res.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { collections } = this.state
        return (
            <Grid container spacing={24}>
                {collections.map(collection => (
                    <Grid item xs={4} key={collection._id}>
                        <CollectionCard
                            id={collection._id}
                            title={collection.name}
                            description={collection.description}
                        />
                    </Grid>
                ))}
            </Grid>
            // {/* {console.log(collections)} */}
            // {JSON.stringify(collections, null, 4)}
        )
    }
}

export default Collections