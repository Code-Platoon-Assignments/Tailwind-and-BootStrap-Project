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

    // useEffect(()=>grabPage("https://rickandmortyapi.com/api/character"), [])

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
        let identifier=event.target.nameField.value
        console.log(event.target.nameField.value)
        try{
            let info = await axios.get(`https://rickandmortyapi.com/api/character/?name=${identifier}`)
            let nameInfo = info.data.results
            console.log(info.data)
            console.log(nameInfo)
            setCharacterList(nameInfo)
        } catch (error) {
            console.log("Request failed:", error.message)
            alert("No character by this name")
        } finally {
            console.log("Request process completed (whether error or not)")
        }
    }
    //     let rickDisplay = document.createElement("div")
    //     let h3 = document.createElement("h3")
    //     h3.innerText = firstRick
    //     rickDisplay.appendChild(h3)
    //     const displayRick = document.getElementById("rickSpot")
    //     displayRick.appendChild(rickDisplay)




    return (
        <>
            {/* <button disabled={!prev} onClick={setCurrUrl(prev)}>Prev</button> */}
            {/* <button disabled={!next} onClick={setCurrUrl(next)}>Next</button> */}
            {/* <div>
                <CharacterCard characterList = {characterList}/>
            </div> */}
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
            <div className = "flex flex-row flex-wrap gap-4" id ="characterContainer">
                <CharacterCard characterList = {characterList}/>
            </div>
        </>
    );
}





export default SearchCharacter