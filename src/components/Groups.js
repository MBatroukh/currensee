import React, { Component } from 'react'
import axios from 'axios'
import CollectionTile from './CollectionTile';
import styled from "styled-components";
// import Grid from '@material-ui/core/Grid';
import SimpleModal from './Modal';
import DeleteCollectionModal from './modals/DeleteCollectionModal'

class Collections extends Component {
    state = {
        collections: [],
        open: false,
        collection: {},
        fetched: false,
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
    };

    componentDidMount() {
        this.getCollections()
    }

    getCollections = async () => {
        try {
            const res = await axios.get(`/groups`)
            const data = await res.data.data
            this.setState({ collections: data, fetched: true })
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
    }

    render() {
        const { collections } = this.state
        return (
            <>
                <AllCollections>
                    {collections.map(collection => (
                            <CollectionTile
                                id={collection._id}
                                title={collection.name}
                                description={collection.description}
                                deleteCollection={() => this.openDeleteCollectionModal(collection)}
                            />
                    ))}
                    <CollectionTile
                        title="Add a Collection"
                        handleModalOpen={this.handleOpen}
                        addCollection
                    />
                </AllCollections>
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

const AllCollections = styled.div`
    display: flex;
`;

export default Collections