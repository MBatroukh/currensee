import React from 'react';
import '../../index.css'
import Modal from '../ModalS'
import styled from 'styled-components'
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
        const { isOpen, isClosed, collection, onSubmit } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                isOpen={isOpen}
                onClose={isClosed}
                header
            >
                <ModalHeader>
                    <h3>Are you sure?</h3>
                    <button onClick={isClosed}>&times;</button>
                </ModalHeader>
                <p>Are you sure you'd like to delete the '{collection.name}' collection?</p>
                <p>This will permanently delete this collection and all of its items</p>
                <ButtonBar>
                    <button onClick={isClosed}>Cancel</button>
                    <button onClick={() => onSubmit(collection._id)}>Delete</button>
                </ButtonBar>
            </Modal>
        );
    }
}

const ModalHeader = styled.div`
     background: #2980b9;
     color: #fff;
     display: flex;
     justify-content: space-between;
     h3{
         margin: 0;
         padding: 15px;
         
     }
    button{
        color: #fff;
        background: transparent;
        border: none;
        font-size: 35px;
        padding: 0 15px;
    }
`;

const ButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    button{
        border: none;
        background: #f1c40f;
        color: #fff;
        font-size: 16px;
        padding: 10px 15px;
        border-radius: 3px;

        &:nth-child(2){
            background: #c0392b;
        }
    }
`;

export default DeleteCollectionModal;