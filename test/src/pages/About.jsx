import React from 'react'
import slackPic from '../assets/slack_pic.jpg';

function About() {
  return (
    <>
      <div>Lily Ebadi</div>
      <section className="content">
        <img src={slackPic} alt="portfolio image" />
        <div>A Path to Web Development</div>
          <p>Hello,and welcome to my website.I graduated from 
          the University of Texas at San Antonio with a B.A in 
          Electrical Engineering,and I am currently working toward 
          earning a certificate in full stack development.I have 
          started my journey in coding world May 2024 in UTSA 
          web development Bootcamp.The journey has been exciting,
          challenging, rewarding, intersting and sometimes overwhelming.
          I have learned so much and have come a long way in this field.
          Node.js,MongoDB,SQL,Sequelize,Express.js, Javascript,React and many more.I 
          love learning new stuff , and in my free time, I enjoy baking,
          cooking,reading books and short stories,going to gym, hiking,
          and learnign new languages.I am fluent in Persian,Arabic,and
          English and currently working toward learning French. 
        </p>
     </section>
     </>
      );
    }

export default About

 