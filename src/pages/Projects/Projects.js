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

import budgettracker from '../../assets/images/BudgetTracker/budgettracker.PNG'
import budgettracker1 from '../../assets/images/BudgetTracker/budgettrackerone.PNG'
import budgettracker2 from '../../assets/images/BudgetTracker/budgettrackertwo.PNG'
import budgettracker3 from '../../assets/images/BudgetTracker/budgettrackerthree.PNG'
import budgettracker4 from '../../assets/images/BudgetTracker/budgettrackerfour.PNG'
import budgettracker5 from '../../assets/images/BudgetTracker/budgettrackerfive.PNG'

import notetaker from '../../assets/images/NoteTaker/notetaker.PNG'
import notetaker1 from '../../assets/images/NoteTaker/notetakerone.PNG'
import notetaker2 from '../../assets/images/NoteTaker/notetakertwo.PNG'
import notetaker3 from '../../assets/images/NoteTaker/notetakerthree.PNG'
import notetaker4 from '../../assets/images/NoteTaker/notetakerfour.PNG'
import notetaker5 from '../../assets/images/NoteTaker/notetakerfive.PNG'

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
            title: 'BestFlix',
            description: 'Find a new tv show or movie to watch before browsing Netflix! With this app, you can search for a specific taste in a show or movie and find the best titles or view the top 100 IMDb rated series or movies! Save any titles that catch your eye to your profile to watch later. ',
            picture: bestflix,
            pic1: bestflix1,
            pic2: bestflix2,
            pic3: bestflix3,
            pic4: bestflix4,
            pic5: bestflix5,
            show: showIndex === 2,
            closed: closeModal,
            clicked: () => openModal(2),
            demo: 'https://bestflix-mo.herokuapp.com',
            source: 'https://github.com/oballematt/bestflix',
            id: 2
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
            show: showIndex === 3,
            closed: closeModal,
            clicked: () => openModal(3),
            demo: 'https://combatfitness.herokuapp.com',
            source: 'https://github.com/Sarah-Nguyen1993/Combat-Fitness',
            id: 3
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
            show: showIndex === 4,
            closed: closeModal,
            clicked: () => openModal(4),
            demo: 'https://bcermak.github.io/BrewsNDadJokes/',
            source: 'https://github.com/bcermak/BrewsNDadJokes',
            id: 4
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
            show: showIndex === 5,
            closed: closeModal,
            clicked: () => openModal(5),
            demo: 'https://reactemployeedirectory-mo.herokuapp.com/',
            source: 'https://github.com/oballematt/React-Employee-Directory',
            id: 5
        },
        {
            title: 'Offline Budget Tracker',
            description: 'Track your budget both online and offline. When the user enters a transaction, they can either add or subtract from their budget. If the user needs to update while on the move without internet, their data will be stored in indexedDB. When the user can connect to the server via the internet again, the data will then be processed into MongoDB. ',
            picture: budgettracker,
            pic1: budgettracker1,
            pic2: budgettracker2,
            pic3: budgettracker3,
            pic4: budgettracker4,
            pic5: budgettracker5,
            show: showIndex === 6,
            closed: closeModal,
            clicked: () => openModal(6),
            demo: 'https://budget-trackerz1.herokuapp.com/',
            source: 'https://github.com/oballematt/Budget-Tracker',
            id: 6
        },
        {
            title: 'Note Taker',
            description: 'In this app, the user will be able to dynamically create notes using express. When the user creates a note it will be saved on the left-hand side to view later. Once the user does not need a particular note anymore, they have the option to delete any note they choose.',
            picture: notetaker,
            pic1: notetaker1,
            pic2: notetaker2,
            pic3: notetaker3,
            pic4: notetaker4,
            pic5: notetaker5,
            show: showIndex === 7,
            closed: closeModal,
            clicked: () => openModal(7),
            demo: 'https://coolestnotetaker.herokuapp.com/',
            source: 'https://github.com/oballematt/Note-Taker',
            id: 7
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
                            source={project.source}
                            background={project.background} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
