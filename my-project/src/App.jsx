import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import MenuHeadersExample from './components/Header/Header'
import GetCharacter from './components/GetCharacter/GetCharacter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuHeadersExample></MenuHeadersExample>
      <GetCharacter></GetCharacter>
      {/* <DisplayCharacter></DisplayCharacter> */}
    </>
  )
}

export default App
