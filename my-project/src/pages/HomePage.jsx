//Header is not the function name, always on layout in App.jsx
// import Header from '../components/Header'
import SearchCharacter from '../components/SearchCharacter'
import { useState } from 'react'

function HomePage() {
    const [characterList, setCharacterList] = useState([])
    return(
        <>
            <SearchCharacter characterList = {characterList} setCharacterList={setCharacterList}/>
        </>
    )
}

export default HomePage