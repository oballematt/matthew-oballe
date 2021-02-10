import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'

import bestflix from '../../assets/images/BestFlix/BestFlixRsz.png'
import bestflix1 from '../../assets/images/BestFlix/home.PNG'
import bestflix2 from '../../assets/images/BestFlix/profile1.PNG'
import bestflix3 from '../../assets/images/BestFlix/tvshows.PNG'

import combatfitness from '../../assets/images/CombatFitness/fitfitfit.png'
import combathome from '../../assets/images/CombatFitness/combathome.PNG'
import combatbulk from '../../assets/images/CombatFitness/combatbulk.PNG'
import combatlean from '../../assets/images/CombatFitness/combatlean.PNG'
import combathiit from '../../assets/images/CombatFitness/combathiit.PNG'
import combatprofile from '../../assets/images/CombatFitness/combatprofile.PNG'

import shoppies from '../../assets/images/Shoppies/shoppies.PNG'
import shoppies1 from '../../assets/images/Shoppies/shoppiesOne.PNG'
import shoppies2 from '../../assets/images/Shoppies/shoppiesTwo.PNG'
import shoppies3 from '../../assets/images/Shoppies/shoppiesThree.PNG'
import shoppies4 from '../../assets/images/Shoppies/shoppiesFour.PNG'
import shoppies5 from '../../assets/images/Shoppies/shoppiesFive.PNG'

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
            title: 'The Shoppies',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            picture: shoppies,
            pic1: shoppies1,
            pic2: shoppies2,
            pic3: shoppies3,
            pic4: shoppies4,
            pic5: shoppies5,
            show: showIndex === 1,
            closed: closeModal,
            clicked: () => openModal(1),
            color: 'black',
            id: 1
        },
        {
            title: 'BestFlix',
            description: 'This is Working',
            picture: bestflix,
            pic1: bestflix1,
            pic2: bestflix2,
            pic3: bestflix3,
            show: showIndex === 2,
            closed: closeModal,
            clicked: () => openModal(2),
            id: 2
        },
        {
            title: 'Combat Fitness',
            description: 'This is also Working',
            picture: combatfitness,
            pic1: combathome,
            pic2: combatbulk,
            pic3: combatlean,
            pic4: combathiit,
            pic5: combatprofile,
            show: showIndex === 3,
            closed: closeModal,
            clicked: () => openModal(3),
            id: 3
        }
        
    ]

    return (
        <>
            <div className='container' id='projects'>
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
                    pic4={project.pic4}
                    pic5={project.pic5} 
                    projectAction={project.projectAction} 
                    show={project.show}
                    color={project.color} 
                    clicked={project.clicked}
                    closed={project.closed} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
