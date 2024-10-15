// import the RESUME.pdf
import lilyResume from "../assets/Ebadi L Resume.pdf";

function Resume() {
  return (
    <div>
      <a href={lilyResume} download>
        <button className="download-btn">Download Resume</button>
      </a>
      <h2>Front-End Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>responsive design </li>
        <li>Bootstrap</li>
        <li>React</li>
        
      </ul>
      <h2>Back-End Skills</h2>
      <ul>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Sequelize</li>
        <li>Express.js </li>
        <li>HTTP & REST</li>
        
      </ul>
    </div>
  );
}

export default Resume;
