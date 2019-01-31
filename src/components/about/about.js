import React from 'react';

import './about.scss';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <section id='about'>
          <h2>ABOUT ME</h2>
          <div id='about-block'>
            <div id='img-div'>
              <img src='https://avatars1.githubusercontent.com/u/34176171?s=400&u=7f42fb181a8db172c90e18894451ddf5c6f5c4f0&v=4'/>
            </div>
            <p>Hello! I am a full stack software developer with a focus on JavaScript, React, and NodeJS.</p> {/* eslint-disable-line */}
            <p>I’ve always loved to create and explore new things. I studied fine arts at Colorado State University where I continued the pursuit as a graphic designer, product developer, music producer, and most recently am pursuing a career in software development.
            </p>           
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
