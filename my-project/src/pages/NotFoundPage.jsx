import { Link } from 'react-router'

function NotFoundPage() {
    return (
        <>
        <h2>404 - Page Not Found</h2>
        <Link to="/">Back home</Link>
        </>
    )
}

export default NotFoundPage