import React from 'react';
import '../index.css'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'
import axios from 'axios'

class SimpleModal extends React.Component {
    state = {
        open: false,
        collectionName: null,
        collectionDescription: null
    };

    handleChange = (field, value) => {
        this.setState({
            // ...this.state.item,
            [field]: value
        })
        console.log(this.state.collectionDescription, this.state.collectionName)
    }

    handleCreateCollection = () => {
        axios.post('/groups', {
            name: this.state.collectionName,
            description: this.state.collectionDescription
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const { isOpen, isClosed, selectedItem, addCollection } = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={isClosed}
            >
                <Paper>
                    {selectedItem &&
                        <Coin>
                            <div className="imageWrap">
                                <div className="controls">
                                    <div className="left"></div>
                                    <div className="right"></div>
                                </div>
                                <div className="image"><img src="https://via.placeholder.com/500x500.png/2980b9/ffffff?text=Sample%20Coin" alt={selectedItem.name} /></div>
                            </div>
                            <div className="yearCountry">
                                <p>{selectedItem.year}</p>
                                <p>{selectedItem.country}</p>
                            </div>
                            <div className="info">
                                <p>{selectedItem.name}</p>
                                <p>{selectedItem.denomination}</p>
                                {selectedItem.measurement && <p>Measurement: {selectedItem.measurement}</p>}
                                {selectedItem.weight && <p>Weight: {selectedItem.weight}</p>}
                                {selectedItem.note && <p>Notes: {selectedItem.note}</p>} {/* WWWWWWWWWWWWWWWT5R5E423E6YG54TFRD3ESW2yeds\fe3333333333333333333sabccccccccccccx  44444444444444f */}
                            </div>
                        </Coin>
                    }
                    {addCollection &&
                        <AddCollection>
                            <h2>Add New Collection</h2>
                            <input name="collectionName" type="text" placeholder="Collection Name" onChange={(e) => this.handleChange("collectionName", e.target.value)} />
                            <textarea name="collectionDescription" placeholder="A breif description about the collection" onChange={(e) => this.handleChange("collectionDescription", e.target.value)} />
                            <button onClick={this.handleCreateCollection}>Submit</button>
                        </AddCollection>
                    }
                    <SimpleModalWrapped />
                    {/* <button onClick={isClosed}>Close</button> */}
                </Paper>
            </Modal>
        );
    }
}

const Paper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    background-color: #ecf0f1;
    padding: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const Coin = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .imageWrap{
        position: absolute;
        top: -120px;
        left: 0;
        right: 0;
        margin: auto;
        width: 200px;
    }
    .image{
        img{
            border-radius: 50%;
            width: 100%;
        }
    }
    .yearCountry{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        p:nth-child(2){
            text-align: right;
        }
    }
    .info{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-top: 70px;
    }
    p{
        min-width: 50%;
        padding: 5px 10px 5px 0;
        margin: 0; 
    }
`;

const AddCollection = styled.div`
font-family: 'Roboto', sans-serif;
    input, textarea{
        width: 100%;
        border: solid 1px #7f8c8d;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        padding: 5px 10px;
    }
    input{
        margin-bottom: 10px;
    }
    textarea{
        resize: none;
        height: 200px;
    }
`;

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = (SimpleModal);

export default SimpleModalWrapped;