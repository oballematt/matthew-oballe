import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'
import bestflix from '../../assets/images/BestFlixRsz.png'

const Projects = () => {
    const [showIndex, setShowIndex] = useState(-1)

    const openModal = (ind) => {
        setShowIndex(ind)
    }

    const closeModal = () => {
        setShowIndex(-1)
    }

    return (
        <>
            <div className='container'>
                <h1 className={styles.title}>Projects</h1>
                <div className='row'>
                    <DisplayPicture projectAction='project1' show={showIndex === 1} closed={closeModal} picture={bestflix} title='BestFlix' clicked={() => openModal(1)} />
                    <DisplayPicture projectAction='project1' show={showIndex === 2} closed={closeModal} picture={bestflix} title='hello' clicked={() => openModal(2)} />
                </div>
            </div>
        </>
    )
}

export default Projects
