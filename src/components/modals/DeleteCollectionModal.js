import React from 'react';
import '../../index.css'
import Modal from '../ModalS'
// import styled from 'styled-components'
// import axios from 'axios'

class DeleteCollectionModal extends React.Component {
    state = {
    };

    componentDidMount() {
        console.log("Mounted")
    }


    handleSubmit = () => {
        console.log("DELETE")
    }

    render() {
        const { isOpen, isClosed, collectionName } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                isOpen={isOpen}
                onClose={isClosed}
            >
                <header>
                    <h3>Are you sure?</h3>
                    <button onClick={isClosed}>close</button>
                </header>
                <p>Are you sure you'd like to delete the {collectionName} collection?</p>
                <p>This will permanently delete this collection and all of its items</p>

            </Modal>
        );
    }
}

export default DeleteCollectionModal;