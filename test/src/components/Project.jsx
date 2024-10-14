//import React from 'react'
//import PropTypes from 'prop-types';



function Project({ data }) {  // props = { data: [{ }, { }]}

//  const {title, description, img, github, deployed} = data
  
  return (
    <div className='project'>
      <h3>Title: {data.title}</h3>
      <p>Description: {data.description}</p>
      <img src={data.image} alt={data.description} className="project-img"/>
      <a href={data.github}><button>Link to github Repo</button></a>
      <a href={data.deployed}>Link to deployed project</a>
    </div>
  )
}

Project.propTypes = {
  data: {
    title: String,
    description: String,
    image: String,
    github: String,
    deployed: String
  }
}

export default Project