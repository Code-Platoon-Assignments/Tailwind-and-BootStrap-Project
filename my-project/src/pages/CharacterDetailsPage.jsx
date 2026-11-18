import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


function CharacterDetailsPage() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let ignore = false
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => { if (!ignore) setCharacter(response.data) })
        return () => { ignore = true }
    }, [id])

    if (error) return <p> {error} <Link to='/'>Back home</Link></p>
    if (!character) return <Spinner animation='border' role='status' />

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                    <h2 className='text-capitalize'>{character.name} #{character.id}</h2>
                    <ul>
                        <li>Status: {character.status}</li>
                        <li>Species: {character.species}</li>
                        <li>Gender: {character.gender}</li>
                    </ul>
                </Card.Body>
            </Card>
        </>
    )

}

export default CharacterDetailsPage