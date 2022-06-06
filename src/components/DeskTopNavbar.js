import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function DeskTopNavbar() {

    const [navBarBkVisible, setNavBarBkVisible] = useState(false)

    const showNavbarBk = () => {
        if (window.scrollY > 60) {
            setNavBarBkVisible(true)
        } else {
            setNavBarBkVisible(false)
        }
    }

    window.addEventListener('scroll', showNavbarBk)


    return (
        <>
            <nav className={navBarBkVisible ? "navbar active" : "navbar"}>
                <h3 className="darley">Jonas Darley</h3>
                <ul className="links">
                    <Link to='/projects'><li className='underline-hover-effect'>Projects</li></Link>
                    <Link to='/about-me'><li className='underline-hover-effect'>About me</li></Link>
                    <Link to='/get-in-touch'><li className='underline-hover-effect'>Get in touch</li></Link>
                </ul>
            </nav>
        </>
    )
}