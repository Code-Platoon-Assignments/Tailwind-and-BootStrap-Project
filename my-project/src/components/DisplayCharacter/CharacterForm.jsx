import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function CharacterForm( {characterList, setCharacterList} ){

    const getInfo = async(event) =>{
        event.preventDefault()
        console.log(event.target)
        let identifier=event.target.elements.formCharacter.value
        let info = await axios.get(`https://rickandmortyapi.com/api/character/?name=${identifier}`)
        let nameInfo = info.data.results
        console.log(nameInfo)
        setCharacterList(nameInfo)
    //     let rickDisplay = document.createElement("div")
    //     let h3 = document.createElement("h3")
    //     h3.innerText = firstRick
    //     rickDisplay.appendChild(h3)
    //     const displayRick = document.getElementById("rickSpot")
    //     displayRick.appendChild(rickDisplay)
    }




    return (
        <>
            <Form onSubmit = {(event)=>getInfo(event)}>
                <Form.Group className="mb-3" controlId="formCharacter">
                    <Form.Label>Search character by name</Form.Label>
                    <Form.Control name="nameField" type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formLocation">
                    <Form.Label>Search location by name</Form.Label>
                    <Form.Control name = "locationField" type="text" placeholder="Enter location" />
                </Form.Group> */}
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <div className = "flex flex-row gap-4"id ="characterContainer">
                {characterList.map((character)=>(
                    <div className="size-30 border-1 p-4" id={`${character.name}-card`} key={character.id}>
                        <img src={character.image} alt={character.name}/>
                        <h6 className="text-xs">{character.name}</h6>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CharacterForm