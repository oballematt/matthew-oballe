import React from 'react'

import './Navigation.css'
import resume from '../../assets/images/Resume.pdf'

import { Link } from 'react-scroll'
const Navigation = () => {
    return (
        <div className='navbarStyle'>
            <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500} 
                                className="nav-link"> 
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={500} 
                                className="nav-link"> 
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500} 
                                className="nav-link"> 
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" rel='noreferrer' target="_blank" href={resume}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
