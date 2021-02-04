import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'
import bestflix from '../../assets/images/BestFlixRsz.png'

const Projects = () => {
    const [show, setShow] = useState(false)

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <div className='container'>
                <h1 className={styles.title}>Projects</h1>
                <div className='row'>
                    <DisplayPicture projectAction='project1' show={show} closed={closeModal} picture={bestflix} title='BestFlix' clicked={openModal} />
                    <DisplayPicture projectAction='project2' show={show} closed={closeModal} picture={bestflix} title='Hello' clicked={openModal} />
                    <DisplayPicture projectAction='project3' show={show} closed={closeModal} picture={bestflix} title='Goodbye' clicked={openModal} />
                </div>
            </div>
        </>
    )
}

export default Projects
