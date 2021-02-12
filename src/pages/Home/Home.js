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
                        <br />
                        <h2>Full Stack Developer</h2>
                        <h4>University of Texas Coding Boot Camp</h4>
                        <div className={`row ${styles.iconRow}`}>
                            <Icon
                                icon='fas fa-envelope fa-3x'
                                link="mailto:oballematt@gmail.com" />
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
                        <p>I started my professional career in the beverage industry, working my way up to production manager at a well known brewery. I loved managing, strategizing and being apart of such a beloved industry. I worked with ferocity and a strong drive to increase my skills in management and become a pivotal part of the company's success. But my passion has always been technology. I decided to make a career change and enroll in the University of Texas Coding Boot Camp. I took my work ethic and dedication from striving to be the best manager I could be, and applied it to learn a number of web development methods in just three months.
                        During my time in the boot camp, I gained a strong understanding of many elements in programming such as HTML, CSS, ES6, React NodeJs, and databases such as MongoDB and MySQL. I have completed three big projects as well as many smaller projects and I'm ready to create many more with the skillsets I have learned. I look forward to taking on any new challenges web development will throw at me to always increase my knowledge and become a great developer. </p>
                    </div>
                </div>
            </div>
            <Skills />
        </>
    )
}

export default home
