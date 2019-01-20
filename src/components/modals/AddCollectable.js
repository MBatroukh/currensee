import React from 'react';
import '../../index.css'
import Modal from '../ModalS'
import styled from 'styled-components'
import axios from 'axios'

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
                                <label for="year">Year:</label>
                                <input id="year" name="year" type="text" placeholder="Year" onChange={(e) => this.handleChange("year", e.target.value)} />
                            </InputItem>
                            <InputItem className="twoThirds">
                                <label for="name">Name:</label>
                                <input id="name" name="name" type="text" placeholder="Name" onChange={(e) => this.handleChange("name", e.target.value)} />
                            </InputItem>
                        </Row>
                        <InputItem>
                            <label for="country">Country:</label>
                            <input id="name" name="country" type="text" placeholder="Country" onChange={(e) => this.handleChange("country", e.target.value)} />
                        </InputItem>
                        <Row>
                            <InputItem className="third">
                                <label for="denomination">Denomination:</label>
                                <input id="denomination" name="denomination" type="text" placeholder="Denomination (ex. 0.25)" onChange={(e) => this.handleChange("denomination", e.target.value)} />
                            </InputItem>
                            <InputItem className="third">
                                <label for="measurements">Measurements:</label>
                                <input id="measurements" name="measurement" type="text" placeholder="Measurement" onChange={(e) => this.handleChange("measurement", e.target.value)} />
                            </InputItem>
                            <InputItem className="third">
                                <label for="weight">Weight:</label>
                                <input id="weight" name="weight" type="text" placeholder="Weight" onChange={(e) => this.handleChange("weight", e.target.value)} />
                            </InputItem>
                        </Row>
                        <InputItem>
                            <label for="notes">Notes:</label>
                            <textarea id="notes" name="note" placeholder="A breif note about the this item" onChange={(e) => this.handleChange("note", e.target.value)} />
                        </InputItem>
                        <button onClick={() => this.handleSubmit()}>Submit</button>
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
    label{
        padding: 5px 0;
    }
    select, input, textarea{
        width: 100%;
        padding: 5px;
    }
    &.third{
        width: 30%;
    }
    &.twoThirds{
        width: 67.5%;
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