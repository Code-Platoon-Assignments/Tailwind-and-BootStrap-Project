// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown';
// import axios from "axios"

function Header(){

    // const getRicky = async() =>{
    //     let ricks = await axios.get(`https://rickandmortyapi.com/api/character/?name=rick`)
    //     let firstRick = ricks.data.results[0].name
    //     console.log(firstRick)
    //     let rickDisplay = document.createElement("div")
    //     let h3 = document.createElement("h3")
    //     h3.innerText = firstRick
    //     rickDisplay.appendChild(h3)
    //     const displayRick = document.getElementById("rickSpot")
    //     displayRick.appendChild(rickDisplay)
    // }


    return (
        <>
            <h1 id="header">Rick and Morty Character Search!</h1>
            {/* <Dropdown.Menu show>
                <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.Item eventKey="2" onClick={()=>getRicky()}>Get Ricky</Dropdown.Item>
                <Dropdown.Item eventKey="3">Get Morty</Dropdown.Item>
                <DropdownButton>I'm a Button!</DropdownButton>
                <div id ="rickSpot">
                </div>
            </Dropdown.Menu> */}
        </>
    );
}

export default Header;