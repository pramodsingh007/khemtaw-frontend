import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import AboutPage from '../pages/AboutPage'
import JoinUs from '../pages/JoinUs'
import TiffinService from '../pages/TiffinService'
import Contact from '../pages/Contact'

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Navbar><Home/></Navbar>
            },
            {
                path: 'about',
                element: <Navbar><AboutPage/></Navbar>
            },
            {
                path: 'joinus',
                element: <Navbar><JoinUs/></Navbar>
            },
            {
                path: 'tiffinService',
                element: <Navbar><TiffinService/></Navbar>
            },
            {
                path: 'contact',
            element: <Navbar><Contact/></Navbar>
            }
        ]
    }
])

export default router
