import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'

import bestflix from '../../assets/images/BestFlix/BestFlixRsz.png'
import bestflix1 from '../../assets/images/BestFlix/home.PNG'
import bestflix2 from '../../assets/images/BestFlix/profile1.PNG'
import bestflix3 from '../../assets/images/BestFlix/tvshows.PNG'
import bestflix4 from '../../assets/images/BestFlix/bestflixhome.PNG'
import bestflix5 from '../../assets/images/BestFlix/bestflixlogin.PNG'

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
            description: 'Nominate 5 movies for the upcoming shoppies awards. This project was built to fulfill requirements for a shopify front end dev internship. Search for your favorite movies and nominate them for the shoppies awards. Choose wisely, however, because you can only nominate 5!',
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
            demo: 'https://theshoppies-mo.herokuapp.com',
            source: 'https://github.com/oballematt/the-shoppies',
            id: 1
        },
        {
            title: 'BestFlix',
            description: 'Find a new tv show or movie to watch before browsing Netflix! With this app, you can search for a specific taste in a show or movie and find the best titles as well as view the top 100 series or movies! Save any titles you like to your profile to watch later. ',
            picture: bestflix,
            pic1: bestflix1,
            pic2: bestflix2,
            pic3: bestflix3,
            pic4: bestflix4,
            pic5: bestflix5,
            show: showIndex === 2,
            closed: closeModal,
            clicked: () => openModal(2),
            id: 2
        },
        {
            title: 'Combat Fitness',
            description: 'Finally meet your health goals with combat fitness! Browse for recipes and workouts based on your own health plan. Use the calorie calculator to calculate your specific weight goal and use the result to find recipes! Save nay recipes or videos you like to your profile!',
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
                    closed={project.closed}
                    demo={project.demo}
                    source={project.source} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
