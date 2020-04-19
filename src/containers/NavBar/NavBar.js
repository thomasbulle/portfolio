import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import { FormattedMessage } from 'react-intl';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Config
import config from 'config/config';

// Actions
import { toggleMobileMenu } from 'store/actions';


class NavBar extends Component {
  /**
   * To change the style of the navbar when scrolling
   */
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const navBar = document.getElementById('navBar');
      if (window.scrollY === 0) {
        navBar.className = navBar.className.replace(/\sscrolled/g, '');
      } else if (window.scrollY > 0 && !navBar.className.includes('scrolled')) {
        navBar.className = `${navBar.className} scrolled`;
      }
    });
  }

  
  render() {
    const { dispatch, isOpenMobileMenu } = this.props;

    return (
      <nav id="navBar" className="nav-bar-wrapper">
        <div className="large-nav-bar">
          <div className="logo-wrapper">
            <img src="ressources/images/logo.png" alt="Logo" className="logo-nav-bar" />
          </div>

          <div className="sections-wrapper">
            {config.header.sections.map((section, index) => (
              <a key={index} className="section-nav-bar" href={`#${section}`}>
                <FormattedMessage id={`navBar.${section}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="small-nav-bar">
          <div className={`icon-small-nav-circle ${isOpenMobileMenu ? 'menu-opened' : ''}`} onClick={() => dispatch(toggleMobileMenu())}>
            <FontAwesomeIcon icon={faBars} className="icon-small-nav" />
          </div>

          <img src="ressources/images/logo.png" alt="Logo" className="logo-nav-bar" />
        </div>
      </nav>
    );
  }
}


NavBar.propTypes = {
  dispatch: PropTypes.func,
  isOpenMobileMenu: PropTypes.bool,
};

const mapStateToProps = ({ utils }) => ({
  isOpenMobileMenu: utils.isOpenMobileMenu,
});

export default connect(mapStateToProps)(NavBar);
