import { Link, isRouteErrorResponse, useRouteError } from 'react-router'

function ErrorPage() {
    const error = useRouteError()
    const message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error.message

    return (
        <>
            <h2>Something went wrong</h2>
            <p>{message}</p>
            <Link to='/'>Back home</Link>
        </>
    )
}

export default ErrorPage