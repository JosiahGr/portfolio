import React from 'react';
import redeemingSolesPic from '../../assets/logo__white_200w.png';
import regretNothingPic from '../../assets/Ses_G5sq_400x400.jpg';
import devPopPic from '../../assets/devpop.png';
import Modal from '../modal/modal';
import PPAPic1 from '../../assets/puppyPound.png';

import './portfolio.scss';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redeemingSoles: false,
      poundPuppyAlert: false,
      regretNothing: false,
      devPop: false,
    };
  }

  render() {
    return (
      <div>
        <section>
          <div id='portfolio'>
          <div className='redeeming-soles card1 black' onClick={() => this.setState({ redeemingSoles: true })}>
            <span className="step">1</span>
            <p className='projectName'>Redeeming Soles</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderCont'>_______________________________________</p>
          </div>
          <Modal
            show={this.state.redeemingSoles}
            handleClose={() => this.setState({ redeemingSoles: false })}>
            <h2>Redeeming Soles</h2>
            <div>
            <img src={redeemingSolesPic} />
            <h5>JavaScript | Node | React | Redux | Express | MongoDB | Mongoose | AWS S3 | webpack | Travis CI | Jest</h5>
            <p className='description'>
              The first iteration of a web application for the Redeeming Soles "No Kids Left on the Sidelines" project. This application is designed to track incoming sport shoes/cleats requests from coaches and youth sports leagues. This application aids in keeping an accurate inventory of sports shoes and prioritizes fulfillment of in-house requests.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://redeeming-soles-front.herokuapp.com/' target='_blank'>Redeeming Soles</a></h4>
            <h4><a href='https://redeeming-soles-front.herokuapp.com/' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='regret-nothing card2 black' onClick={() => this.setState({ regretNothing: true })}>
          <span className="step">2</span>
            <p className='projectName'>Regret Nothing</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderContGr'>_______________________________________</p>
          </div>
          <Modal
            show={this.state.regretNothing}
            handleClose={() => this.setState({ regretNothing: false })}>
            <h2>Regret Nothing</h2>
            <div>
            <img src={regretNothingPic} />
            <h5>JavaScript | Node | Express | PostgreSQL </h5>
            <p className='description'>This mobile friendly app allows users to search any restaurant in the Seattle area and append all health records to the results. Users are able to create and update reviews of the app itself, however, reviewing actual restaurants must be written directly on Yelp as per the user agreement.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://4betterorworse.github.io/' target='_blank'>4betterorworse.github</a></h4>
            <h4><a href='https://github.com/4betterOrWorse/4betterOrWorse.github.io' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='devPop card1 black' onClick={() => this.setState({ devPop: true })}>
          <span className="step">3</span>
            <p className='projectName'>&lt;dev&gt;POP</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderCont'>_______________________________________</p>
          </div>
          <Modal
            show={this.state.devPop}
            handleClose={() => this.setState({ devPop: false })}>
            <h2>&#60;dev&#62;POP the Game</h2>
            <div>
            <img src={devPopPic} />
            <h5>JavaScript | CSS3 | HTML5</h5>
            <p className='description'> An interactive game that uses numbers and bubbles, the goal is to clear the board. Version 1.0 has 9 levels with increasing dificulties. Level 9 repeats until the user decides to quit.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://surgespace.github.io/201Final/' target='_blank'>devPop</a></h4>
            <h4><a href='https://github.com/SurgeSpace/201Final' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='pound-puppy-alert card2 black' onClick={() => this.setState({ poundPuppyAlert: true })}>
          <span className="step">4</span>
            <p className='projectName'>Pound Puppy Alert</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderContGr'>_______________________________________</p>
          </div>
          <Modal
            show={this.state.poundPuppyAlert}
            handleClose={() => this.setState({ poundPuppyAlert: false })}>
            <h2>Pound Puppy Alert</h2>
            <div>
            <img src={PPAPic1} />
            <h5>NPM | Twilio API | JavaScript | Node | Express | MongoDB | Mongoose | Travis CI | Jest</h5>
            <p className='description'>
              This app provides the user with data of availability of dogs for adoption at a specified shelter. The user signs up for an account and creates a profile with their specific preferences for their desired type of dog, including their given location. The app is built with a RESTful HTTP server that utilizes basic authentication using Express. An account and login is created through basic and bearer authentication. Mongoose and MongoDB are used for the Schema and database functionality.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://github.com/puppyPound/puppy-pound' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
