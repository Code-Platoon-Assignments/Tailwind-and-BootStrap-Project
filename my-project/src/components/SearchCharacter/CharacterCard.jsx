import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function CharacterCard( {characterList} ){
    return (
        <>
            {characterList.map((character)=>{
                <Card style={{ width: '18rem' }} key = {character.id}>
                    <Card.Img variant="top" src={character.image} alt={character.name}/>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                        {`${character.name} is status ${character.status.toLowerCase()} and of the species ${character.gender.toLowerCase()} ${character.species.toLowerCase()}, from the location ${character.location.name}`}
                        </Card.Text>
                        <Button variant="primary">View this character</Button>
                    </Card.Body>
                </Card>
            })}
        
        
        </>
    )
}


export default CharacterCard