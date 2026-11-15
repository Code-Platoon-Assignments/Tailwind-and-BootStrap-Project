import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CharacterForm(){
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search character by name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Search location by name</Form.Label>
                    <Form.Control type="password" placeholder="Enter location" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default CharacterForm