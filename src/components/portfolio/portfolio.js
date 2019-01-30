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
        <section id='portfolio'>
          <div className='redeeming-soles card1' onClick={() => this.setState({ redeemingSoles: true })}>
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
            <p className='description'>Description of redeeming Soles project goes here</p>
            <h5>JavaScript | Node | React | Redux | Express | MongoDB | Mongoose | AWS S3 | webpack | Travis CI | Jest</h5>
            </div>
            <div className='project-links'>
            <h4><a href='https://redeeming-soles-front.herokuapp.com/' target='_blank'>Redeeming Soles</a></h4>
            <h4><a href='https://redeeming-soles-front.herokuapp.com/' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='regret-nothing card2' onClick={() => this.setState({ regretNothing: true })}>
          <span className="step">2</span>
            <p className='projectName'>Regret Nothing</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderContGr'>_______________________________________</p>
          </div>_
          <Modal
            show={this.state.regretNothing}
            handleClose={() => this.setState({ regretNothing: false })}>
            <h2>Regret Nothing</h2>
            <div>
            <img src={regretNothingPic} />
            <p className='description'>Description of regret nothing project goes here.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://4betterorworse.github.io/' target='_blank'>4betterorworse.github</a></h4>
            <h4><a href='https://github.com/4betterOrWorse/4betterOrWorse.github.io' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='devPop card1' onClick={() => this.setState({ devPop: true })}>
          <span className="step">3</span>
            <p className='projectName'>&lt;dev&gt;POP</p>
            <p className='projectNameBorder'>_</p>
            <p className='projectNameBorderCont'>_______________________________________</p>
          </div>
          <Modal
            show={this.state.devPop}
            handleClose={() => this.setState({ devPop: false })}>
            <h2>Project</h2>
            <div>
            <img src={devPopPic} />
            <p className='description'> Description of Devpop project</p>            
            <h5>Description of technologies used</h5>
            </div>
            <div className='project-links'>
            <h4><a href='https://surgespace.github.io/201Final/' target='_blank'>devPop</a></h4>
            <h4><a href='https://github.com/SurgeSpace/201Final' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='pound-puppy-alert card2' onClick={() => this.setState({ poundPuppyAlert: true })}>
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
            <p className='description'>Description of PPA goes here</p>
            <h5>NPM | Twilio API | JavaScript | Node | Express | MongoDB | Mongoose | Travis CI | Jest</h5>
            </div>
            <div className='project-links'>
            <h4><a href='https://github.com/puppyPound/puppy-pound' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
        </section>
      </div>
    );
  }
}

export default Portfolio;
