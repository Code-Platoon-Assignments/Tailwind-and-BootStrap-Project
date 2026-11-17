import { Link } from 'react-router'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function NavBar() {
    return (
        <Navbar bg='primary' data-bs-theme='dark' style={{ paddingInLine: '1.5rem' }}>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
        </Navbar>
        // <nav className='mx-auto flex max-w-5xl gap-4 px-6 pt-4'>
        //     <Link to='/'>Home</Link>
        //     <Link to='/about'>About</Link>
        // </nav>
    )
}

export default NavBar