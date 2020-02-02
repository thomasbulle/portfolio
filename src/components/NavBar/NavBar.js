import React from 'react';
import './styles.scss';
import { FormattedMessage } from 'react-intl';

// Config
import config from 'config/config';

const NavBar = () => {
  return (
    <nav className="nav-bar-wrapper">
      <div className="logo-wrapper">
        <img src="ressources/images/logo.png" alt="Logo" className="logo-nav-bar" />
      </div>

      <div className="sections-wrapper">
        {config.header.sections.map((section, index) => (
          <span key={index} className="section-nav-bar">
            <FormattedMessage id={`navBar.${section}`} />
          </span>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
