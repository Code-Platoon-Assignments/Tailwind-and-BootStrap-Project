import { useState } from 'react'
import { Outlet } from 'react-router'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
//Styling now comes from tailwind
// import './App.css'
//GetCharacter is no longer used
//Other imports now live in HomePage file under pages
import MenuHeadersExample from './components/Header/Header'
// import GetCharacter from './components/GetCharacter/GetCharacter'
// import DisplayCharacter from './components/DisplayCharacter/DisplayCharacter'


function App() {
  //useState goes in pages now?
  // const [characterList, setCharacterList] = useState([])

  return (
    <>
      <MenuHeadersExample></MenuHeadersExample>
      <Outlet />
      {/* <DisplayCharacter characterList = {characterList} setCharacterList={setCharacterList}></DisplayCharacter> */}
    </>
  )
}

export default App
