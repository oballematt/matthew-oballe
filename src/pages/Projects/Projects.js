import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'
import bestflix from '../../assets/images/BestFlixRsz.png'
import bestflix1 from '../../assets/images/home.PNG'
import bestflix2 from '../../assets/images/profile1.PNG'
import bestflix3 from '../../assets/images/tvshows.PNG'

const Projects = () => {
    const [showIndex, setShowIndex] = useState(-1)

    const openModal = (ind) => {
        setShowIndex(ind)
    }

    const closeModal = () => {
        setShowIndex(-1)
    }

    const projects = [
        {
            title: 'BestFlix',
            description: 'This is Working',
            picture: bestflix,
            pic1: bestflix1,
            pic2: bestflix2,
            pic3: bestflix3,
            projectAction: 'project1',
            show: showIndex === 1,
            closed: closeModal,
            clicked: () => openModal(1),
            id: 1
        },
        {
            title: 'Combat Fitness',
            description: 'This is also Working',
            picture: bestflix,
            pic1: bestflix1,
            pic2: bestflix2,
            pic3: bestflix3,
            projectAction: 'project2',
            show: showIndex === 2,
            closed: closeModal,
            clicked: () => openModal(2),
            id: 2
        },
    ]

    return (
        <>
            <div className='container'>
                <h1 className={styles.title}>Projects</h1>
                <div className='row'>
                    {projects.map(project =>
                    <DisplayPicture key={project.id}
                    title={project.title} 
                    description={project.description}
                    picture={project.picture} 
                    pic1={project.pic1} 
                    pic2={project.pic2} 
                    pic3={project.pic3} 
                    projectAction={project.projectAction} 
                    show={project.show} 
                    clicked={project.clicked}
                    closed={project.closed} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
