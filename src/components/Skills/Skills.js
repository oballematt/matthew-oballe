import React from 'react'

import styles from './Skills.module.css'
import Icon from '../Icon/Icon'

const skills = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Skills</h1>
                <div className={`row ${styles.skillsRow}`}>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-js-square fa-5x' />
                            <p>JavaScript</p>
                            <p>jQuery, Ajax, REST, JSON</p>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div>
                            <Icon icon='fab fa-html5 fa-5x' />
                            <p>HTML</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-css3-alt fa-5x' />
                            <p>CSS</p>
                            <p>CSS Grid, Flex Box, Bootstrap, Materialize, Animations, Media Query</p>
                        </div>
                    </div>
                </div>
                <div className={`row ${styles.skillsRow}`}>
                <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-react fa-5x' />
                            <p>React</p>
                            <p>Redux, Hooks, CSS modules, Next.Js </p>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div>
                            <Icon icon='fab fa-node fa-5x' />
                            <p>Node</p>
                            <p>Express, Authentication, REST, AJAX, JSON, Firebase, Heroku, Jest, MVC, SQL, No SQL </p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fas fa-database fa-5x' />
                            <p>Databases</p>
                            <p>MongoDB, MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default skills
