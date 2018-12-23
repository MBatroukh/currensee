import React from 'react';
import '../index.css'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'

class Modals extends React.Component {
    state = {
        open: false,
        collectionName: null,
        collectionDescription: null
    };

    render() {
        const { isOpen, isClosed, children } = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={isClosed}
            >
                <Paper>
                    {children}
                    <SimpleModalWrapped />
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


// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = (Modals);

export default SimpleModalWrapped;