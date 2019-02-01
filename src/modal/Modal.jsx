import React from 'react';
import {Modal} from 'react-bootstrap';

class MyModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Body>{this.props.children}</Modal.Body>
            </Modal>
        );
    }
}

export default MyModal;