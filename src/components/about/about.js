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
            <p>Hello! I am a full stack software developer with a focus on JavaScript, React, Redux, and Node.</p> {/* eslint-disable-line */}
            <p>WRITE A BIO HERE</p>{/* eslint-disable-line */}
            <p>I studied Fine Arts at Colorado State University where I continued life as a freelance graphic designer. Over time this has evolved to hand drawn illustrations. You can take a look here <a href='https://www.JSGart.com' target='_blank'></a> WRITE A BIO HERE</p>{/* eslint-disable-line */}            
            
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
