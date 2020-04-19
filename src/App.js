import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'App.scss';
import { connect } from 'react-redux';

// Config
import config from 'config/config';

// Actions
import { selectSection } from 'store/actions';

// Containers
import MobileMenu from 'containers/MobileMenu/MobileMenu';

// Components
import Header from 'components/Header/Header';
import About from 'components/About/About';


class App extends Component {
  /**
   * Add event listener on the scroll
   */
  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.checkScrollElementIntoView('header')
      config.header.sections.map(section => this.checkScrollElementIntoView(section));
    });
  }


  /**
   * To check if the section is in the screen view
   * 
   * @param {string} section - the section name
   */
  checkScrollElementIntoView(section) {
    const { dispatch, currentSection } = this.props;

    // TODO : remove condition
    const boundingSection = document.getElementById(section) && document.getElementById(section).getBoundingClientRect();
    // Get the two-third of the screen
    const twoThirdScreen = (window.innerHeight / 3) * 2;
    const sectionName = section === 'header' ? null : section;

    if (boundingSection && ((boundingSection.top < twoThirdScreen) && (boundingSection.top > twoThirdScreen - boundingSection.height)) && (currentSection !== sectionName)) {
      dispatch(selectSection(sectionName));
      return true;
    }

    return false;
  }

  
  render() {
    return (
      <React.Fragment>
        <MobileMenu />
        <div id="App" className="App">
          <Header />
          <About />
        </div>
      </React.Fragment>
    );
  }
};


MobileMenu.propTypes = {
  dispatch: PropTypes.func,
  currentSection: PropTypes.string,
};

const mapStateToProps = ({ utils }) => ({
  currentSection: utils.currentSection,
});

export default connect(mapStateToProps)(App);
