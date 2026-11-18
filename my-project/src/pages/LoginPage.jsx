import { useState } from 'react'
import { useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginPage() {
    const [username, setUserName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!username.trim()) return
        navigate('/')
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="enter a username" value = {username} onChange={(event)=> setUserName(event.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Log In</Button>
            </Form>
        </>
    )
}

export default LoginPage