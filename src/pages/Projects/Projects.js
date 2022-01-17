import React, { useState } from 'react'

import styles from './Projects.module.css'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture'

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

import badjokesandbrews from '../../assets/images/BadJokesAndBrews/badjokesandbrews.PNG'
import badjokesandbrews1 from '../../assets/images/BadJokesAndBrews/badjokesandbrewsone.PNG'
import badjokesandbrews2 from '../../assets/images/BadJokesAndBrews/badjokesandbrewstwo.PNG'
import badjokesandbrews3 from '../../assets/images/BadJokesAndBrews/badjokesandbrewsthree.PNG'
import badjokesandbrews4 from '../../assets/images/BadJokesAndBrews/badjokesandbrewsfour.PNG'
import badjokesandbrews5 from '../../assets/images/BadJokesAndBrews/badjokesandbrewsfive.PNG'

import employee from '../../assets/images/EmployeeDirectory/employee.PNG'
import employee1 from '../../assets/images/EmployeeDirectory/employeeone.PNG'
import employee2 from '../../assets/images/EmployeeDirectory/employeetwo.jpg'
import employee3 from '../../assets/images/EmployeeDirectory/employeethree.jpg'
import employee4 from '../../assets/images/EmployeeDirectory/employeefour.jpg'
import employee5 from '../../assets/images/EmployeeDirectory/employeefive.jpg'

import energy from '../../assets/images/energyhub/energy.png'
import energy1 from '../../assets/images/energyhub/energy2.png'
import energy2 from '../../assets/images/energyhub/energy3.png'
import energy3 from '../../assets/images/energyhub/energy4.png'
import energy4 from '../../assets/images/energyhub/energy5.png'
import energy5 from '../../assets/images/energyhub/energy6.png'


import spacestagram from '../../assets/images/Spacestagram/spacestagram-logo.png'
import spacestagram1 from '../../assets/images/Spacestagram/spacestagram.png'

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
            title: 'UT Energy Hub',
            description: 'Energy Portal used by employees of the Utilities and Energy Department at the University of Texas. This energy portal contains two user interface applications that allows the user to read, edit, or add data. This web app is not yea available to the public so I provided a screen cast of myself going through the website.',
            picture: energy,
            pic1: energy1,
            pic2: energy2,
            pic3: energy3,
            pic4: energy4,
            pic5: energy5,
            show: showIndex === 5,
            closed: closeModal,
            clicked: () => openModal(5),
            demo: 'https://watch.screencastify.com/v/rPHVgvxHuJDUjT2hzY01',
            source: 'https://github.com/oballematt/ecm_input_forms',
            id: 5
        },
        {
            title: 'Spacestagram',
            description: 'The out of this world image collection app that shows you real photos collected from the rovers during their missions on Mars!',
            picture: spacestagram,
            onePicture: true,
            pic1: spacestagram1,
            show: showIndex === 6,
            closed: closeModal,
            clicked: () => openModal(6),
            demo: 'https://spacestagram-mo.herokuapp.com/',
            source: 'https://github.com/oballematt/spacestagram',
            id: 6
        },
        {
            title: 'The Shoppies',
            description: 'Find and nominate your movies for the upcoming Shoppies awards. This project was built to fulfill requirements for a Shopify front end developer internship. Search for your favorite movies and nominate them for the Shoppies awards. Choose wisely, however, because you can only nominate 5!',
            picture: shoppies,
            pic1: shoppies1,
            pic2: shoppies2,
            pic3: shoppies3,
            pic4: shoppies4,
            pic5: shoppies5,
            show: showIndex === 1,
            closed: closeModal,
            clicked: () => openModal(1),
            demo: 'https://theshoppies-mo.herokuapp.com',
            source: 'https://github.com/oballematt/the-shoppies',
            id: 1
        },
        {
            title: 'Combat Fitness',
            description: 'Finally meet your health goals with combat fitness! Browse for recipes and workouts based on your own health plan. Use the calorie calculator to calculate your specific weight goal and use the result to find recipes! Save any recipes or videos you like to your profile!',
            picture: combatfitness,
            pic1: combathome,
            pic2: combatbulk,
            pic3: combatlean,
            pic4: combathiit,
            pic5: combatprofile,
            show: showIndex === 2,
            margin: '80px',
            closed: closeModal,
            clicked: () => openModal(2),
            demo: 'https://combatfitness.herokuapp.com',
            source: 'https://github.com/Sarah-Nguyen1993/Combat-Fitness',
            id: 2
        },
        {
            title: 'Bad Jokes and Brews',
            description: 'Browse a list of breweries by zip code that is available in the sidebar, or via the Search by Zip function. Once a brewery-of-interest has been identified, users will be able to pinpoint that brewery using the mapbox. The last function of BrewsNDadJokes is the "Generate Joke" button located on the top right-hand side of the page.',
            picture: badjokesandbrews,
            pic1: badjokesandbrews1,
            pic2: badjokesandbrews2,
            pic3: badjokesandbrews3,
            pic4: badjokesandbrews4,
            pic5: badjokesandbrews5,
            show: showIndex === 3,
            closed: closeModal,
            clicked: () => openModal(3),
            demo: 'https://bcermak.github.io/BrewsNDadJokes/',
            source: 'https://github.com/bcermak/BrewsNDadJokes',
            id: 3
        },
        {
            title: 'Employee Directory',
            description: "In this app, the user will be able to dynamically search for any specific employee. Using the search bar at the top of the page, the user will search for any employee they want to view. As they're typing, all employee's names that match the input will appear while the user is searching.",
            picture: employee,
            pic1: employee1,
            pic2: employee2,
            pic3: employee3,
            pic4: employee4,
            pic5: employee5,
            show: showIndex === 4,
            closed: closeModal,
            clicked: () => openModal(4),
            demo: 'https://reactemployeedirectory-mo.herokuapp.com/',
            source: 'https://github.com/oballematt/React-Employee-Directory',
            id: 4
        },

    ]

    return (
        <>
            <h1 className={styles.title}>Projects</h1>
            <div className='container' id='projects'>
                <div className={`row ${styles.row}`}>
                    {projects.map(project =>
                        <DisplayPicture key={project.id}
                            title={project.title}
                            description={project.description}
                            picture={project.picture}
                            onePicture={project.onePicture}
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
                            margin={project.margin}
                            demo={project.demo}
                            source={project.source}
                            background={project.background} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
