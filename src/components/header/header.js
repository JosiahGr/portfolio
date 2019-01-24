import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
      <nav>
        <AnchorLink href='#intro'><p>Home</p></AnchorLink>
        <AnchorLink href='#about'><p>About</p></AnchorLink>
        <AnchorLink href='#portfolio'><p>Portfolio</p></AnchorLink>
        <AnchorLink href='#contact'><p>Contact</p></AnchorLink>
      </nav>
    </header>
    );
  }
}

export default Header;
