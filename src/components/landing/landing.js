import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../header/header';
import AboutMe from '../about/about';
import Portfolio from '../portfolio/portfolio';

import './landing.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <Header />
          <section id='wrap'>
            <div id='intro'></div>
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">
                Josiah
                </p>
                
                <ul className="content__container__list">
                  <li className="content__container__list__item">Green</li>
                  <li className="content__container__list__item">Illustrator</li>
                  <li className="content__container__list__item">Designer</li>
                  <li className="content__container__list__item">Developer</li>
                </ul>
              </div>
              </div>
              <div className="animateSubTxt">
                <p>SOFTWARE DEVELOPER</p> 
              </div>
              <div className="downArrow bounce">
                <p>&darr;</p>
            </div>
            {/* </div> */}
          </section>
            <Portfolio />
            <AboutMe />
            <section id='contact'>
              <h3>LET'S GET IN TOUCH.</h3>
              <p className='divider'>___</p>
              <h4>JOSIAH GREEN</h4>
              <h5><a href="mailto:josiahgreen90@gmail.com">josiahgreen90@gmail.com</a></h5>
              <h5><a href="https://github.com/josiahGr">GitHub</a></h5>
              <h5><a href='https://www.linkedin.com/in/josiah-green/'>LinkedIn</a></h5>
            </section>
        <footer className='footer'>
        <AnchorLink href='#intro'><p>Back to top</p></AnchorLink>
        </footer>
      </div>
    );
  }
}

export default Landing;
