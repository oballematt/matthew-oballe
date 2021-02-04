import React from 'react'

import styles from './Skills.module.css'
import Icon from '../Icon/Icon'

const skills = () => {
    return (
        <>
            <div className={styles.container}>
                <br/>
                <h1>Skills</h1>
                <div className={`row ${styles.skillsRow}`}>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-js-square fa-5x' />
                            <h2>JavaScript</h2>
                            <p>jQuery, Ajax, REST, JSON, DOM</p>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div>
                            <Icon icon='fab fa-html5 fa-5x' />
                            <h2>HTML</h2>
                            <p>Semantic HTML, Forms, Form Validation, Data Attributes, JSX</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-css3-alt fa-5x' />
                            <h2>CSS</h2>
                            <p>CSS Grid, Flex Box, Bootstrap, Materialize, Animations, Media Query</p>
                        </div>
                    </div>
                </div>
                <div className={`row ${styles.skillsRow}`}>
                <div className="col-sm-2">
                        <div>
                            <Icon icon='fab fa-react fa-5x' />
                            <h2>React</h2>
                            <p>Redux, Hooks, CSS modules, Next.Js </p>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div>
                            <Icon icon='fab fa-node fa-5x' />
                            <h2>Node</h2>
                            <p>Express, Authentication, REST, AJAX, JSON, Firebase, Heroku, Jest, MVC Pattern, SQL, No SQL </p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <Icon icon='fas fa-database fa-5x' />
                            <h2>Databases</h2>
                            <p>MongoDB, MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default skills
