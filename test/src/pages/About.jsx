import React from 'react'
import slackPic from '../assets/slack_pic.jpg';

function About() {
  return (
    <>
      <div>About Component</div>
      <section className="content">
        <img src={slackPic} alt="portfolio image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam quas dolorum ea labore aspernatur quidem, iste laborum? Laboriosam minima similique nesciunt explicabo doloremque eos consequatur labore, animi aliquid totam quam adipisci accusamus quia, sint distinctio, quidem perspiciatis inventore hic reiciendis qui aut. Quaerat voluptatum maxime, aliquam ducimus ipsam architecto aliquid explicabo sequi voluptates, repudiandae libero, consequuntur eveniet. Modi nesciunt, rerum debitis esse aut tempora optio quos ad nisi voluptatem ducimus doloremque, ab nihil! Eligendi!</p>
      </section>
    </>
  )
}

export default About