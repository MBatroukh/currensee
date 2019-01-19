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
        collectionName: "",
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
            this.setState({ collections: res.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    openDeleteCollectionModal = (collectionName) => {
        this.setState({
            deleteCollectionModal: true,
            collectionName
        })
    }

    deleteCollection = async id => {
        // todo Need To Create modal to verify deletion of collection
        await axios.delete(`/groups/${id}`)
        this.getCollections()
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
                                deleteCollection={() => this.openDeleteCollectionModal(collection.name)}
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
                    collectionName={this.state.collectionName}
                />
            </>
            // {/* {console.log(collections)} */}
            // {JSON.stringify(collections, null, 4)}
        )
    }
}

export default Collections