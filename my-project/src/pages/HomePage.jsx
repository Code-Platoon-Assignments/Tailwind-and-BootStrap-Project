//Header is not the function name, always on layout in App.jsx
// import Header from '../components/Header'
import DisplayCharacter from '../components/DisplayCharacter'

function HomePage() {
    const [characterList, setCharacterList] = useState([])
    return(
        <>
            <DisplayCharacter characterList = {characterList} setCharacterList={setCharacterList}/>
        </>
    )
}

export default HomePage