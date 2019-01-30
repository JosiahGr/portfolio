import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './header.scss';

// import logo from '../../assets/JGLogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
      {/* <nav>
        <div id='nav-left'>
          <AnchorLink href='#intro'>
            <img className='jg-logo-pic' src={logo} />
          </AnchorLink>
        </div> */}
        <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
          <AnchorLink href='#intro'><li>Home</li></AnchorLink>
          <AnchorLink href='#about'><li>About</li></AnchorLink>
          <AnchorLink href='#portfolio'><li>Portfolio</li></AnchorLink>
          <AnchorLink href='#contact'><li>Contact</li></AnchorLink>
          </ul>
        </div>
      </nav>
        {/* <ul id='nav-right'>
          <AnchorLink href='#about'><li>About</li></AnchorLink>
          <AnchorLink href='#portfolio'><li>Portfolio</li></AnchorLink>
          <AnchorLink href='#contact'><li>Contact</li></AnchorLink>
        </ul>
      </nav> */}
    </header>
    );
  }
}

export default Header;
