import Form from 'react-bootstrap/Form';
import axios from 'axios'
import CharacterCard from './CharacterCard'
// import { useEffect } from 'react'
// import { useState } from 'react'
import Button from 'react-bootstrap/Button';
function SearchCharacter( {characterList, setCharacterList} ){
    // const [currUrl, setCurrUrl] = useState("")
    // const [prev, setPrev] = useState(null)
    // const [next, setNext] = useState(null)


    // useEffect(async()=>{
    //     let nextPage = await axios.get(currUrl)
    //     setCharacterList(nextPage.data.results)
    // }, [currUrl])
    
    // const grabPage = async(url) => {
    //     let nextPage = await axios.get(url)
    //     setCharacterList(nextPage.data.results)
    // }


    const getInfo = async(event) =>{
        event.preventDefault()
        let identifier=event.target.elements.formCharacter.value
        console.log(event.target.elements.formCharacter.value)
        try{
            console.log("trying")
            let info = await axios.get(`https://rickandmortyapi.com/api/character/?name=${identifier}`)
            console.log(info)
            let nameInfo = info.data.results 
            console.log(nameInfo)
            setCharacterList(nameInfo)
            console.log(characterList)
        } catch (error) {
            console.log("Request failed:", error.message)
            alert("No character by this name")
        } finally {
            console.log("Request process completed (whether error or not)")
        }
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
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <div className = "flex flex-row flex-wrap gap-4" id ="characterContainer">
                {characterList.map((character)=>(
                    <CharacterCard key = {character.id} character={character}/>
                ))}
            </div>
        </>
    );
}





export default SearchCharacter