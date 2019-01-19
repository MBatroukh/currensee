import React, { Component } from 'react'
import axios from 'axios'
import CollectionCard from './Card'
import Grid from '@material-ui/core/Grid';
import SimpleModal from './Modal';
import DeleteCollectionModal from './modals/DeleteCollectionModal'

class Collections extends Component {
    state = {
        collections: [],
        open: false,
        collection: {},
    }

    handleOpen = () => {
        this.setState({ open: true });
        console.log(this.state.selectedItem)
    };

    handleClose = () => {
        this.setState({
            open: false,
            deleteCollectionModal: false,
        });
        console.log("Closed")
    };

    componentDidMount() {
        this.getCollections()
    }

    getCollections = async () => {
        try {
            const res = await axios.get(`/groups`)
            const data = res.data.data
            this.setState({ collections: data })
        } catch (e) {
            console.log(e)
        }
    }

    openDeleteCollectionModal = (collection) => {
        this.setState({
            deleteCollectionModal: true,
            collection
        })
    }

    deleteCollection = async id => {
        await axios.delete(`/groups/${id}`)
        this.setState({
            deleteCollectionModal: false,
        })
        this.getCollections()
        console.log("Deleted")
    }

    render() {
        const { collections } = this.state
        return (
            <>
                <Grid container spacing={24}>
                    {collections.map(collection => (
                        <Grid item xs={4} key={collection._id}>
                            <CollectionCard
                                id={collection._id}
                                title={collection.name}
                                description={collection.description}
                                deleteCollection={() => this.openDeleteCollectionModal(collection)}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={4}>
                        <CollectionCard
                            title="Add a Collection"
                            handleModalOpen={this.handleOpen}
                            addCollection
                        />
                    </Grid>
                </Grid>
                <SimpleModal
                    addCollection
                    isClosed={this.handleClose}
                    isOpen={this.state.open}
                    getCollections={this.getCollections()}
                />
                <DeleteCollectionModal
                    isClosed={this.handleClose}
                    isOpen={this.state.deleteCollectionModal}
                    onSubmit={this.deleteCollection}
                    collection={this.state.collection}
                />
            </>
            // {/* {console.log(collections)} */}
            // {JSON.stringify(collections, null, 4)}
        )
    }
}

export default Collections