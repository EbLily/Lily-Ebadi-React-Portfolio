import { useState } from 'react';
import Project from '../components/Project';

// React often wants us to IMPORT the ASSEST First
import ssImg from '../assets/SS.png';

const projectList = [
    {
        title: 'Project 1',
        description: "Project 1 description",
        image: ssImg,
        github: 'http://www.github.com/repoName',
        deployed: 'http://www.render.com/projectName'
    },
    {
        title: 'Project 2',
        description: "Project 2 description",
        image: ssImg,
        github: 'http://www.github.com/repoName',
        deployed: 'http://www.render.com/projectName'
    },
    {
        title: 'Project 3',
        description: "Project 3 description",
        image: ssImg,
        github: 'http://www.github.com/repoName',
        deployed: 'http://www.render.com/projectName'
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