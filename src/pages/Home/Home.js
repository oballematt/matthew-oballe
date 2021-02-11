import React from 'react'

import profile from "../../assets/images/profilePic1.jpg"
import resume from '../../assets/images/Resume.pdf'
import Icon from '../../components/Icon/Icon'
import styles from './Home.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'
import Skills from '../../components/Skills/Skills'


const home = () => {
    return (
        <>
            <div className={`container ${styles.aboutContainer}`} id='home'>
                <div className='row'>
                    <div className={`col-sm-4 ${styles.aboutColumn}`}>
                        <DisplayPicture display='false' picture={profile} />
                        <h1>Matthew Oballe</h1>
                        <br/>
                        <h2>Full Stack Developer</h2>
                        <h4>University of Texas Coding Boot Camp</h4>
                        <div className={`row ${styles.iconRow}`}>
                            <Icon
                                icon='fas fa-envelope fa-3x'
                                link="mailto:oballematt@gmail.com"/>
                            <Icon
                                icon='fab fa-github fa-3x'
                                link="https://github.com/oballematt" />
                            <Icon
                                icon='fab fa-linkedin fa-3x'
                                link="https://www.linkedin.com/in/matt-oballe-4a1b0563/" />
                            <Icon
                                icon='fas fa-file-pdf fa-3x'
                                link={resume} />
                        </div>
                    </div>
                    <div className={`col-sm-8 ${styles.aboutColumn}`}>
                        <h1>About Me</h1>
                        <p>My name is Matt and Im a full stack developer</p>
                    </div>
                </div>
            </div>
            <Skills />
        </>
    )
}

export default home
