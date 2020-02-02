import React, { Component } from 'react';
import './styles.scss';
import { FormattedMessage } from 'react-intl';

// Components
import NavBar from 'components/NavBar/NavBar';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      currentImg: 0,
    };

    this.intervalImgBg = null;

    this.getImgBanner = this.getImgBanner.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoaded } = this.state;

    if (prevState.isLoaded !== isLoaded && isLoaded) {
      this.intervalImgBg = setInterval(() => {
        if (this.state.currentImg < 2) {
          this.setState({ currentImg: this.state.currentImg + 1 });
        } else {
          this.setState({ currentImg: 0 });
        }
      }, 7000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.intervalImgBg);
  }

  getImgBanner() {
    const { currentImg } = this.state;
    const img = [];
    for(let i = 0; i < 3; i++) {
      img.push(<img key={i} src={`/ressources/images/banner${i}.jpg`} alt="Banner" className={`img-banner-header ${i === currentImg ? 'visible' : 'hidden'}`} />)
    }
    return img;
  }

  render() {
    return (
      <header className="header-wrapper">
        <div className="img-background-container">
          {this.getImgBanner()}
        </div>

        <NavBar />

        <div className="titles-header">
          <h1 className="name-header"><FormattedMessage id='header.name' /></h1>
          <h2 className="subtitle-header"><FormattedMessage id="header.subtitle" /></h2>
        </div>

        <div className="indicator-scroll-header">
          <img src="/ressources/images/arrow.png" alt="Arrow" className="arrow-indicator-scroll" />
        </div>
      </header>
    );
  }
}

export default Header;
