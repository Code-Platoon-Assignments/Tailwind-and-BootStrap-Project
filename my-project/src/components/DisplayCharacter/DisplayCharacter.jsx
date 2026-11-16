import CharacterForm from './CharacterForm'

function DisplayCharacter ( {characterList, setCharacterList} ){
    return (
        <>
            <CharacterForm characterList={characterList} setCharacterList={setCharacterList}></CharacterForm>
        </>
    )
}

export default DisplayCharacter