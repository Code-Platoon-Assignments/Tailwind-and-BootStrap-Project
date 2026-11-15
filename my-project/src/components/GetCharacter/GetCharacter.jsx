import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'
function GetCharacter (){

    const getRicky = async() =>{
        let ricks = await axios.get(`https://rickandmortyapi.com/api/character/?name=rick`)
        let firstRick = ricks.data.results[0].name
        console.log(firstRick)
        let rickDisplay = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText = firstRick
        rickDisplay.appendChild(h3)
        const displayRick = document.getElementById("spot")
        displayRick.appendChild(rickDisplay)
    }

    const getMorty = async() =>{
        let mortys = await axios.get(`https://rickandmortyapi.com/api/character/?name=morty`)
        let firstMorty = mortys.data.results[0].name
        console.log(firstMorty)
        let mortyDisplay = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText = firstMorty
        mortyDisplay.appendChild(h3)
        const displayMorty = document.getElementById("spot")
        displayMorty.appendChild(mortyDisplay)
    }

    return (
        <>
            {/* <Dropdown.Menu show>
                <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.Item eventKey="2" onClick={()=>getRicky()}>Get Ricky</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={()=>getMorty()}>Get Morty</Dropdown.Item>
                <DropdownButton>I'm a Button!</DropdownButton>
                <div id ="spot">
                </div>
            </Dropdown.Menu> */}
        </>
    )
}

export default GetCharacter