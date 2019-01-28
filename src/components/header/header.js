import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './header.scss';

import logo from '../../assets/JGLogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
      <nav>
        <div id='nav-left'>
          <AnchorLink href='#intro'>
            <img className='jg-logo-pic' src={logo} />
          </AnchorLink>
        </div>
        <ul id='nav-right'>
          <AnchorLink href='#about'><p>About</p></AnchorLink>
          <AnchorLink href='#portfolio'><p>Portfolio</p></AnchorLink>
          <AnchorLink href='#contact'><p>Contact</p></AnchorLink>
        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;
