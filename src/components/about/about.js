import React from 'react';

import './about.scss';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <section id='about'>
          <h2>About Me</h2>
          <p className='divider'>______</p>
          <div id='about-block'>
            <div id='img-div'>
              <img src='https://avatars1.githubusercontent.com/u/34176171?s=400&u=7f42fb181a8db172c90e18894451ddf5c6f5c4f0&v=4'/>
            </div>
            <p>Hello! I am a full stack software developer with a focus on JavaScript, React, and NodeJS.</p> {/* eslint-disable-line */}
            <p>I’ve always loved to create and explore new things. I studied fine arts at Colorado State University where I continued the pursuit as a graphic designer, product developer, music producer, and most recently am enjoying the life as a pen and ink based illustrator. I always have wanted to create things, and ultimately that’s why I got into tech. 
              </p>

<p>I really love that coding is challenging and there is always something new to learn and to create. It’s the same reasons why I love art. You get to start with nothing and have a fully functioning, tangible object. I've continued my pursuit of creation by expoloring software development and, by doing so, challenging myself in a whole new world.</p>{/* eslint-disable-line */}
            <p>You can take a look at some of my previous and recent works <a href='https://www.JSGart.com' target='_blank'>here</a>.</p>{/* eslint-disable-line */}            
            
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
