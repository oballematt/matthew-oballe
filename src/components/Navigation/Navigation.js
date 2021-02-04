import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand justify-content-center" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
