import React from 'react';
import '../../index.css'
import Modal from '../ModalS'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SimpleModal extends React.Component {
    state = {
        AddCollectableModal: false,
        selectedCollesction: null,
        collectionList: [],
        year: null,
        country: null,
        name: null,
        denomination: null,
        measurement: null,
        weight: null,
        note: null,
    };

    componentDidMount() {
        this.getListOfCollections()
    }

    handleChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    getListOfCollections = async () => {
        try {
            const res = await axios.get(`/groups/list`)
            this.setState({ collectionList: res.data.data })
            console.log("State:", this.state.collectionList)
        } catch (e) {
            console.log(e)
        }
    }

    // getListOfCollections = () => {
    //     axios.get('/groups/list', {

    //     }).then(function (response) {

    //     }).catch(function (error) {
    //         console.log(error)
    //     })
    // }

    handleSubmit = () => {
        const { isClosed } = this.props
        axios.post(`/groups/${this.state.selectedCollection}`, {
            year: this.state.year,
            country: this.state.country,
            name: this.state.name,
            denomination: this.state.denomination,
            measurement: this.state.measurement,
            weight: this.state.weight,
            note: this.state.note,
        })
            .then(function (response) {
                isClosed()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { isOpen, isClosed } = this.props;
        const { collectionList } = this.state;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                isOpen={isOpen}
                onClose={isClosed}
            >
                <Coin>
                    <div className="imageWrap">
                        <div className="controls">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <div className="image"><img src="https://via.placeholder.com/500x500.png/2980b9/ffffff?text=Sample%20Coin" alt="upload your own" /></div>
                    </div>
                    <button onClick={isClosed}>&times;</button>
                    <div className="info">
                        <InputItem>
                            <label for="collections">Collection:</label>
                            <select id="collections" onChange={(e) => this.handleChange("selectedCollection", e.target.value)}>
                                {collectionList && collectionList.map(collection => (
                                    <option key={collection._id} value={collection._id}>{collection.name}</option>
                                ))}
                            </select>
                        </InputItem>
                        <Row>
                            <InputItem className="third">
                                <TextField
                                    fullWidth
                                    id="standard-dense"
                                    label="Year"
                                    className="textField dense"
                                    name="year"
                                    onChange={(e) => this.handleChange("year", e.target.value)}
                                />
                            </InputItem>
                            <InputItem className="twoThirds">
                                <TextField
                                    fullWidth
                                    id="standard-dense"
                                    label="Name"
                                    className="textField dense"
                                    name="name"
                                    onChange={(e) => this.handleChange("name", e.target.value)}
                                />
                            </InputItem>
                        </Row>
                        <InputItem>
                            <TextField
                                fullWidth
                                id="standard-dense"
                                label="Country"
                                className="textField dense"
                                name="country"
                                onChange={(e) => this.handleChange("country", e.target.value)}
                            />
                        </InputItem>
                        <Row>
                            <InputItem className="third">
                                <TextField
                                    fullWidth
                                    id="standard-dense"
                                    label="Denomination"
                                    className="textField dense"
                                    name="denomination"
                                    onChange={(e) => this.handleChange("denomination", e.target.value)}
                                />
                            </InputItem>
                            <InputItem className="third">

                                <TextField
                                    fullWidth
                                    id="standard-dense"
                                    label="Measurement"
                                    className="textField dense"
                                    name="measurement"
                                    onChange={(e) => this.handleChange("measurement", e.target.value)}
                                />
                            </InputItem>
                            <InputItem className="third">
                                <TextField
                                    fullWidth
                                    id="standard-dense"
                                    label="Weight"
                                    className="textField dense"
                                    name="weight"
                                    onChange={(e) => this.handleChange("weight", e.target.value)}
                                />
                            </InputItem>
                        </Row>
                        <InputItem>
                            <TextField
                                fullWidth
                                id="standard-dense"
                                label="Notes"
                                className="textField dense"
                                name="note"
                                multiline
                                onChange={(e) => this.handleChange("note", e.target.value)}
                            />
                        </InputItem>
                        <Button size="large" color="primary" variant="contained" onClick={() => this.handleSubmit()}>Submit</Button>
                        {/* WWWWWWWWWWWWWWWT5R5E423E6YG54TFRD3ESW2yeds\fe3333333333333333333sabccccccccccccx  44444444444444f */}
                    </div>
                </Coin>
            </Modal>
        );
    }
}

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const InputItem = styled.div`
    width: 100%;
    padding: 0 10px;
    .dense{
        margin-top: 19px;
        margin-bottom: 5px;
    }
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
    .info{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-top: 70px;
        label{
            width: 100%;
            display: block;
        }
        button{
            margin-top: 15px;
            width: 100%;
        }
    }
    p{
        min-width: 50%;
        padding: 5px 10px 5px 0;
        margin: 0; 
    }
`

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = (SimpleModal);

export default SimpleModalWrapped;