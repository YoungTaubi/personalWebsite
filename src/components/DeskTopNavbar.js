import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function DeskTopNavbar() {

    const { pathname, key } = useLocation()

    const pathObj = {
        '/projects': false,
        '/about-me': false,
        '/get-in-touch': false
    }

    const [navBarBkVisible, setNavBarBkVisible] = useState(false)
    const [currentPath, setCurrentPath] = useState(pathObj)

    const showNavbarBk = () => {
        if (window.scrollY > 60) {
            setNavBarBkVisible(true)
        } else {
            setNavBarBkVisible(false)
        }
    }

    window.addEventListener('scroll', showNavbarBk)

    useEffect(() => {
        for (let path in pathObj) {
            for (let i = 0; i < pathname.length; i++) {
                if (pathname[i] === '/' && pathname[i + 1] === '0') {
                    if (path === pathname.slice(0, pathname.length - 4)) {
                        pathObj[path] = true
                    } else {
                        pathObj[path] = false
                    }
                    return
                } else {
                    if (path === pathname) {
                        pathObj[path] = true
                    } else {
                        pathObj[path] = false
                    }
                }
            }
        }
        setCurrentPath(pathObj)
    }, [key])


    return (
        <>
            <nav className={navBarBkVisible ? "navbar active" : "navbar"}>
                <Link to='/'><h3 className="darley">Jonas Darley</h3></Link>
                <ul className="links">
                    <Link to='/projects'><li className={currentPath['/projects'] ? 'underline-hover-effect gradient' : 'underline-hover-effect'}>Projects</li></Link>
                    <Link to='/about-me'><li className={currentPath['/about-me'] ? 'underline-hover-effect gradient' : 'underline-hover-effect'}>About me</li></Link>
                    <Link to='/get-in-touch'><li className={currentPath['/get-in-touch'] ? 'underline-hover-effect gradient' : 'underline-hover-effect'}>Get in touch</li></Link>
                </ul>
            </nav>
        </>
    )
}