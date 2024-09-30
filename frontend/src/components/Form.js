import FormTextExample from './FormTextExample';
import { Modal } from 'react-bootstrap';

const Form = ({ show=true, onHide }) => {
    const modal = {
        padding: "0"
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>App Name</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modal}>
                <FormTextExample />
            </Modal.Body>
        </Modal>
    )
}

export default Form;
