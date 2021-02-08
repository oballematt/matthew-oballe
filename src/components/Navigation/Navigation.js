import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
