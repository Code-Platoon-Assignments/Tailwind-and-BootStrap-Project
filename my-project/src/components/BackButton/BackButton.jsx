import { useLocation, useNavigate } from 'react-router'

function BackButton() {
    const navigate = useNavigate()
    const location = useLocation()

    const goBack = () => (location.key === 'default' ? navigate('/') : navigate(-1))

    return <button aria-label='Go back' onClick={goBack}>Back</button>
}

export default BackButton