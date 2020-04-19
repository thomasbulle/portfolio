import React, { Component } from 'react';
import './styles.scss';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="about" className="about-wrapper">
        <h2><FormattedMessage id="about.title" /></h2>

        <img src="ressources/images/profile-picture.jpg" alt="Profile" className="profile-picture" />

        <div className="description-container">
          <FormattedHTMLMessage id="about.description" />
        </div>
      </div>
    );
  }
}

export default About;
