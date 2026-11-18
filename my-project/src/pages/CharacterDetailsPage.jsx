// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// function CharacterDetailsPage() {
//     const { id } = useParams()
//     const [character, setCharacter] = useState(null)

//     useEffect(()=>{
//         let ignore = false
//         axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//             .then((response) => { if (!ignore) setPokemon(response.data) })
//         return () => { ignore = true }
//     }, [id])

//     return (
//         <>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={character.image} alt={character.name} />
//                 <Card.Body>
//                     <h2 className='text-capitalize'>{character.name} #{character.id}</h2>
//                     <ul>
//                         <li>Status: {character.status}</li>
//                         <li>Species: {character.species}</li>
//                     </ul>
//                 </Card.Body>
//             </Card>
//         </>
//     )

//     // return <h2>Character #{id}</h2>
// }

// export default CharacterDetailsPage