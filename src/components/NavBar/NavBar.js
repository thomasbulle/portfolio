import React, { Component } from 'react';
import './styles.scss';
import { FormattedMessage } from 'react-intl';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Config
import config from 'config/config';


class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const navBar = document.getElementById('navBar');
      if (window.scrollY === 0) {
        navBar.className = navBar.className.replace(/\sscrolled/g, '');
      } else if (window.scrollY > 0 && !navBar.className.includes('scrolled')) {
        navBar.className = `${navBar.className} scrolled`;
      }
    })
  }

  render() {
    return (
      <nav id="navBar" className="nav-bar-wrapper">
        <div className="large-nav-bar">
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
        </div>

        <div className="small-nav-bar">
          <div className="icon-small-nav-circle">
            <FontAwesomeIcon icon={faBars} className="icon-small-nav" />
          </div>

          <img src="ressources/images/logo.png" alt="Logo" className="logo-nav-bar" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
