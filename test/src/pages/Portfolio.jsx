import { useState } from 'react';
import Project from '../components/Project';

// React often wants us to IMPORT the ASSEST First
import ssImg from '../assets/SS.png';
import employeeTracker from '../assets/View_All_Department.png';
import notetaker       from '../assets/notetaker.png';
import socialEmployeeAPI from '../assets/ss.png';
import moodSetter from '../assets/moodsetter.png';
import getAllCategories from '../assets/getallcategories.png';
import svgLogo from '../assets/svg.png';
const projectList = [
    {
        title: 'SQL-Employee-Tracker-',
        description: "This interface allows non-developers to easily view and interact with information through the command-line of the application stored in an SQL Employee Tracker database",
        image: employeeTracker,

        github: 'https://github.com/EbLily/SQL-Employee-Tracker-',
        deployed: 'https://drive.google.com/file/d/1xgvFmklKdOXsXFaPtVNLBUSK2NMIbAxZ/view'
    
    },
    {
        title: '-Social-Network-API',
        description: "NoSQL Social Network API is a Node.js application programming interface(API) that allows users to peform CRUD (create, read, update and delete) operations on social networking data models using a NOSQL database. This API is built by using Node.js & Mongoose.",
        image:socialEmployeeAPI ,
        
        github: 'https://github.com/EbLily/-Social-Network-API',
        deployed: 'https://drive.google.com/file/d/1eEFK2bPDkf6jH5bdQ5abG_lX1ZzSWASs/view'
    },
    {
        title: 'Mood-Setter(group project)',
        description: "Mood Setter is a website that allows users to enter their mood, which then generates a mood-specific background color, images or GIFs, and a playlist. This helps users process their feelings through a personalized visual and auditory experience.",
        image: moodSetter,
        github: 'https://github.com/digitalscribe53/Mood-Setter',
        deployed: 'https://digitalscribe53.github.io/Mood-Setter/'
    },

    {
        title: 'Note-Taker',
        description: "As a developer student I WANT to be able to write and save notes SO THAT I can organize my thoughts and keep track of tasks I need to complete",
        image: notetaker,
        github: 'https://github.com/EbLily/Note-Taker',
        deployed: 'https://eblily.github.io/Note-Taker/'
    },

    {
        title: 'E-Commerce-Back-End',
        description: "E-commerce is the exchange of goods and services and the trasmission of funds and data over the internet.E-Commerce Back End is the server-side infrastructure that supports the front end and other systerms that run in the background",
        image: getAllCategories,
        github: 'https://github.com/EbLily/E-Commerce-Back-End',
        deployed: 'https://app.screencastify.com/v2/manage/videos/WFwM54qzqiM4DIdefqBb'
    },

    {
        title: 'SVG-Logo-Maker',
        description: "The application enables users to enter inputs into a inquirer prompt in order to generate a logo file which contains the users desired results as an SVG image.",
        image: svgLogo,
        github: 'https://github.com/EbLily/SVG-Logo-Maker',
        deployed: 'https://drive.google.com/file/d/1Jg2TlQOmFGMHMzbJJnqEJMcNx3FVP'
    },
]

function Portfolio() {

  const [projects, setProjects] = useState(projectList);

  return (
    <>
        <div>Portfolio</div>
        { projects.map(proj => (
            <Project key={proj.title} data={proj}/>
        ))}
    
    </>
  )
}

export default Portfolio