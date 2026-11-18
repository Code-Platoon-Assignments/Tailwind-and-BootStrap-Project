import { createBrowserRouter, createHashRouter } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter

const router = createRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: 'character/:id', element: <CharacterDetailsPage /> },
                    { path: 'about', element: <AboutPage /> },
                    { path:'/login', element: <LoginPage /> },
                    { path: '*', element: <NotFoundPage /> },
                ],
            },
        ],
    },
])

export default router