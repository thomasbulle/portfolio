import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';
import { reveal as Menu } from 'react-burger-menu';
import { FormattedMessage } from 'react-intl';

// Config
import config from 'config/config';

// Actions
import { toggleMobileMenu, selectSection } from 'store/actions';


class MobileMenu extends Component {
  constructor(props) {
    super(props);

    this.handleToggleMenu   = this.handleToggleMenu.bind(this);
    this.handleClickSection = this.handleClickSection.bind(this);
  }


  /**
   * To toggle the menu
   * 
   * @param {boolean} isOpen - the menu status
   */
  handleToggleMenu({ isOpen }) {
    const { dispatch, isOpenMobileMenu } = this.props;

    if (isOpen !== isOpenMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  }


  /**
   * To select the section in the redux store and scroll to this section
   * 
   * @param {string} section - the selected section
   */
  handleClickSection(section) {
    const { dispatch } = this.props;

    dispatch(toggleMobileMenu());
    dispatch(selectSection(section));
  }


  render() {
    const { isOpenMobileMenu, currentSection } = this.props;
    
    return (
      <Menu
        pageWrapId="App"
        isOpen={isOpenMobileMenu}
        outerContainerId="root"
        onStateChange={this.handleToggleMenu}>
        <div className="mobile-menu-wrapper">
          <div className="header-menu-wrapper">
            <span className="avatar-box">
              <img src="ressources/images/profile-picture.jpg" alt="Avatar" className="avatar" />
            </span>
            <h2 className="name-header">
              <span className="tag">&lt;&gt;</span>
              <span className="name"><FormattedMessage id="header.name" /></span>
              <span className="tag">&lt;/&gt;</span>
            </h2>
          </div>
          <ul className="sections-menu-wrapper">
            {config.header.sections.map((section, index) => (
              <li
                key={index}
                className={`menu-item${section === currentSection ? ' selected' : ''}`}
                onClick={() => this.handleClickSection(section)}>
                  <a href={`#${section}`} className="link-menu-item">
                    <FormattedMessage id={`navBar.${section}`} />
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </Menu>
    );
  }
}


MobileMenu.propTypes = {
  dispatch: PropTypes.func,
  isOpenMobileMenu: PropTypes.bool,
  currentSection: PropTypes.string,
};

const mapStateToProps = ({ utils }) => ({
  isOpenMobileMenu: utils.isOpenMobileMenu,
  currentSection: utils.currentSection,
});

export default connect(mapStateToProps)(MobileMenu);
