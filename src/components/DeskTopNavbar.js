import { Link, NavLink, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function DeskTopNavbar() {

    const {pathname, key} = useLocation()

    const pathObj = {
        '/projects': false,
        '/about-me': false,
        '/get-in-touch': false
    }

    const [navBarBkVisible, setNavBarBkVisible] = useState(false)
    const [currentPath, setCurrentPath] = useState(pathObj)
    
    console.log(currentPath);

    console.log(useLocation());

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
            console.log(path, pathname);
            if (path === pathname) {
                console.log('match', path);
                pathObj[path] = true 
            } else {
                pathObj[path] = false
            }
        }
        console.log('pathObj', pathObj);
        setCurrentPath(pathObj)
    }, [key])


    return (
        <>
            <nav className={navBarBkVisible ? "navbar active" : "navbar"}>
                <h3 className="darley">Jonas Darley</h3>
                <ul className="links">
                    <Link to='/projects'><li className={currentPath['/projects'] ? 'underline-hover-effect activeLink' : 'underline-hover-effect'}>Projects</li></Link>
                    <Link to='/about-me'><li className={currentPath['/about-me'] ? 'underline-hover-effect activeLink' : 'underline-hover-effect'}>About me</li></Link>
                    <Link to='/get-in-touch'><li className={currentPath['/get-in-touch'] ? 'underline-hover-effect activeLink' : 'underline-hover-effect'}>Get in touch</li></Link>
                </ul>
            </nav>
        </>
    )
}