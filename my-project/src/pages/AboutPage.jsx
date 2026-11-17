import { useState } from 'react'

function AboutPage() {

    const [crash, setCrash] = useState(false)
    if(crash) throw new Error('This page intentionally crashed')

    return (
        <>
        <div id="header">
            <h2 id="header">Rick and Morty Character Getter App</h2>
            <p>Search a character name and see all versions</p>
        </div>
        <button onClick={()=> setCrash(true)}>Test errorElement</button>
        </>
    )
}

export default AboutPage